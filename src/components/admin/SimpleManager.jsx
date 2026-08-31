'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, Trash2 } from 'lucide-react';

const input =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primaryBlue focus:outline-none focus:ring-1 focus:ring-primaryBlue';

/**
 * Shared create/edit/delete list used by the Authors and Categories pages.
 * `fields` describes the form; `onSave`/`onDelete` are the server actions.
 */
export default function SimpleManager({ items, fields, onSave, onDelete, labelKey, emptyText }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [editing, setEditing] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const blank = Object.fromEntries(fields.map((f) => [f.name, '']));
  const form = editing ?? blank;

  const setField = (name, value) => setEditing({ ...form, [name]: value });

  const submit = () => {
    setFeedback(null);
    startTransition(async () => {
      const payload = { ...form };
      // Array-typed fields are edited as newline text.
      for (const f of fields) {
        if (f.list) {
          payload[f.name] = String(payload[f.name] || '')
            .split('\n')
            .map((s) => s.trim())
            .filter(Boolean);
        }
      }
      const res = await onSave(payload);
      setFeedback(res);
      if (res.ok) {
        setEditing(null);
        router.refresh();
      }
    });
  };

  const remove = (id) =>
    startTransition(async () => {
      const res = await onDelete(id);
      setFeedback(res);
      router.refresh();
    });

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        {items.length === 0 ? (
          <p className="px-4 py-12 text-center text-sm text-gray-500">{emptyText}</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {items.map((item) => (
              <li key={item._id} className="flex items-center gap-3 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{item[labelKey]}</p>
                  <p className="text-xs text-gray-400 truncate">/{item.slug}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setEditing({
                      id: item._id,
                      ...Object.fromEntries(
                        fields.map((f) => [
                          f.name,
                          f.list ? (item[f.name] || []).join('\n') : (item[f.name] ?? ''),
                        ])
                      ),
                    })
                  }
                  className="text-xs text-primaryBlue hover:underline"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => remove(item._id)}
                  disabled={pending}
                  className="text-red-400 hover:text-red-600 disabled:opacity-50"
                  aria-label="Delete"
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3 h-fit">
        <h2 className="font-semibold text-primaryBlue">{editing?.id ? 'Edit' : 'Add new'}</h2>

        {fields.map((f) => (
          <div key={f.name} className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">{f.label}</label>
            {f.type === 'textarea' || f.list ? (
              <textarea
                rows={f.list ? 4 : 3}
                value={form[f.name] ?? ''}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
                className={input}
              />
            ) : (
              <input
                type="text"
                value={form[f.name] ?? ''}
                onChange={(e) => setField(f.name, e.target.value)}
                placeholder={f.placeholder}
                className={input}
              />
            )}
            {f.hint && <p className="text-xs text-gray-500">{f.hint}</p>}
          </div>
        ))}

        {feedback && (
          <p className={`text-sm ${feedback.ok ? 'text-green-700' : 'text-red-600'}`}>
            {feedback.message}
          </p>
        )}

        <div className="flex gap-2 pt-1">
          <button
            type="button"
            onClick={submit}
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-lg bg-primaryBlue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
          >
            {pending && <Loader2 className="size-4 animate-spin" />}
            {editing?.id ? 'Save' : 'Create'}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => { setEditing(null); setFeedback(null); }}
              className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
