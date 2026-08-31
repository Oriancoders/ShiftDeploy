'use client';

import { useRef, useState } from 'react';
import { ImagePlus, Loader2, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { uploadImage } from '../../../app/admin/insights/actions';
import { compressImage, formatBytes } from './compressImage';

/**
 * Image field: drop or pick a file, compressed in the browser, uploaded to
 * Sanity's CDN via a server action.
 *
 * The alt-text field is deliberately not optional-looking. Missing alt is the
 * most common accessibility and image-SEO failure, and it is invisible unless
 * the UI makes it loud - so an empty one shows a warning inline rather than
 * only failing at publish time.
 */
export default function ImageUpload({ value, onChange, label, hint, compact = false }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(null);

  const handleFile = async (file) => {
    if (!file) return;
    setUploading(true);
    setError('');
    setSaved(null);

    try {
      const before = file.size;
      const compressed = await compressImage(file);

      const fd = new FormData();
      fd.set('file', compressed);
      const res = await uploadImage(fd);

      if (res.ok && res.assetRef) {
        onChange({
          assetRef: res.assetRef,
          url: res.url,
          alt: value?.alt ?? '',
          width: res.width,
          height: res.height,
        });
        // Only worth showing when compression actually did something.
        if (compressed.size < before * 0.95) {
          setSaved({ before, after: compressed.size });
        }
      } else {
        setError(res.message || 'Upload failed');
      }
    } catch (err) {
      setError(err?.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const missingAlt = value?.url && !value.alt?.trim();

  return (
    <div className="space-y-2">
      {label && <p className="text-sm font-medium text-gray-700">{label}</p>}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif,image/svg+xml"
        className="hidden"
        aria-label={label ?? 'Upload image'}
        onChange={(e) => handleFile(e.target.files?.[0])}
      />

      {value?.url ? (
        <div className="rounded-lg border border-gray-200 bg-white p-3">
          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${value.url}?w=240&h=240&fit=crop&auto=format`}
              alt={value.alt || 'Uploaded image'}
              className="size-20 shrink-0 rounded-md border border-gray-200 object-cover bg-gray-50"
            />

            <div className="min-w-0 flex-1 space-y-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600">
                  Alt text
                  <span className="ml-1 font-normal text-gray-400">
                    — what the image shows, for screen readers and image search
                  </span>
                </label>
                <input
                  type="text"
                  value={value.alt || ''}
                  onChange={(e) => onChange({ ...value, alt: e.target.value })}
                  placeholder="Mobile booking page with the hero image still loading"
                  className={`w-full rounded-md border px-3 py-1.5 text-sm focus:outline-none focus:ring-1 ${
                    missingAlt
                      ? 'border-amber-300 bg-amber-50 focus:border-amber-400 focus:ring-amber-400'
                      : 'border-gray-300 focus:border-primaryBlue focus:ring-primaryBlue'
                  }`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                {value.width && value.height && (
                  <span className="text-gray-400">
                    {value.width}×{value.height}
                  </span>
                )}
                {saved && (
                  <span className="inline-flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="size-3" />
                    {formatBytes(saved.before)} → {formatBytes(saved.after)}
                  </span>
                )}
                {missingAlt && (
                  <span className="inline-flex items-center gap-1 text-amber-600">
                    <AlertCircle className="size-3" /> Needed before publishing
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="ml-auto text-primaryBlue hover:underline"
                >
                  Replace
                </button>
                <button
                  type="button"
                  onClick={() => { onChange(null); setSaved(null); }}
                  className="inline-flex items-center gap-1 text-red-500 hover:underline"
                >
                  <X className="size-3" /> Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          disabled={uploading}
          className={`flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed transition disabled:opacity-60 ${
            compact ? 'h-20' : 'h-28'
          } ${
            dragging
              ? 'border-primaryBlue bg-blue-50 text-primaryBlue'
              : 'border-gray-300 text-gray-500 hover:border-primaryBlue hover:text-primaryBlue'
          }`}
        >
          {uploading ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              <span className="text-sm">Compressing and uploading…</span>
            </>
          ) : (
            <>
              <ImagePlus className="size-5" />
              <span className="text-sm font-medium">Drop an image or click to choose</span>
              <span className="text-xs text-gray-400">
                Resized and converted to WebP automatically
              </span>
            </>
          )}
        </button>
      )}

      {hint && <p className="text-xs text-gray-500">{hint}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
