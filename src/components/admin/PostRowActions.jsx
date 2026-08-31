'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { setPostStatus, deletePost } from '../../../app/admin/insights/actions';

export default function PostRowActions({ id, slug, status }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [confirming, setConfirming] = useState(false);

  const run = (fn) => startTransition(async () => { await fn(); router.refresh(); });

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-2 text-xs">
        <span className="text-gray-500">Delete?</span>
        <button
          type="button"
          disabled={pending}
          onClick={() => run(() => deletePost(id))}
          className="font-semibold text-red-600 hover:underline disabled:opacity-50"
        >
          Yes
        </button>
        <button type="button" onClick={() => setConfirming(false)} className="text-gray-500 hover:underline">
          No
        </button>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-3 text-xs">
      {status === 'published' && (
        <a
          href={`/insights/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-primaryBlue"
        >
          View
        </a>
      )}
      <button
        type="button"
        disabled={pending}
        onClick={() => run(() => setPostStatus(id, status === 'published' ? 'draft' : 'published'))}
        className="text-gray-500 hover:text-primaryBlue disabled:opacity-50"
      >
        {status === 'published' ? 'Unpublish' : 'Publish'}
      </button>
      <button type="button" onClick={() => setConfirming(true)} className="text-red-500 hover:underline">
        Delete
      </button>
    </span>
  );
}
