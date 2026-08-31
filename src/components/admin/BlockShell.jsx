'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Copy, GripVertical, Trash2 } from 'lucide-react';

/**
 * The frame around every body block: drag handle, collapse, duplicate, delete.
 *
 * Reordering uses native HTML5 drag-and-drop with an explicit grip handle
 * rather than making the whole card draggable - a draggable card fights text
 * selection inside its own fields. A line shows where the block will land,
 * because a drag with no drop indicator forces you to guess and then undo.
 *
 * Keyboard users get the same reordering via the arrow buttons, which stay
 * visible rather than appearing on hover.
 */
export default function BlockShell({
  index,
  total,
  icon: Icon,
  label,
  summary,
  onMove,
  onDelete,
  onDuplicate,
  dragState,
  children,
}) {
  const [collapsed, setCollapsed] = useState(false);
  const { draggingIndex, overIndex, setDraggingIndex, setOverIndex, onDrop } = dragState;

  const isDragging = draggingIndex === index;
  // Show the indicator on the edge the block would land against.
  const showBefore = overIndex === index && draggingIndex !== null && draggingIndex > index;
  const showAfter = overIndex === index && draggingIndex !== null && draggingIndex < index;

  return (
    <div>
      {showBefore && <div className="mb-1 h-0.5 rounded bg-primaryBlue" />}

      <div
        onDragOver={(e) => {
          e.preventDefault();
          if (draggingIndex !== null && overIndex !== index) setOverIndex(index);
        }}
        onDrop={(e) => {
          e.preventDefault();
          onDrop(index);
        }}
        className={`rounded-xl border bg-white transition ${
          isDragging ? 'border-primaryBlue opacity-40' : 'border-gray-200'
        }`}
      >
        <div className="flex items-center gap-2 border-b border-gray-100 px-2 py-1.5">
          <button
            type="button"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.effectAllowed = 'move';
              // Firefox needs data set or the drag never starts.
              e.dataTransfer.setData('text/plain', String(index));
              setDraggingIndex(index);
            }}
            onDragEnd={() => { setDraggingIndex(null); setOverIndex(null); }}
            title="Drag to reorder"
            aria-label={`Drag to reorder ${label} block`}
            className="cursor-grab rounded p-1 text-gray-300 hover:bg-gray-100 hover:text-gray-500 active:cursor-grabbing"
          >
            <GripVertical className="size-4" />
          </button>

          {Icon && <Icon className="size-4 shrink-0 text-gray-400" />}

          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            className="flex min-w-0 flex-1 items-baseline gap-2 text-left"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {label}
            </span>
            {collapsed && summary && (
              <span className="truncate text-xs text-gray-400">{summary}</span>
            )}
          </button>

          <div className="flex items-center gap-0.5">
            <button
              type="button" onClick={() => onMove(index, -1)} disabled={index === 0}
              title="Move up" aria-label="Move block up"
              className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-25"
            >
              <ChevronUp className="size-4" />
            </button>
            <button
              type="button" onClick={() => onMove(index, 1)} disabled={index === total - 1}
              title="Move down" aria-label="Move block down"
              className="rounded p-1 text-gray-400 hover:bg-gray-100 disabled:opacity-25"
            >
              <ChevronDown className="size-4" />
            </button>
            <button
              type="button" onClick={() => onDuplicate(index)}
              title="Duplicate" aria-label="Duplicate block"
              className="rounded p-1 text-gray-400 hover:bg-gray-100"
            >
              <Copy className="size-4" />
            </button>
            <button
              type="button" onClick={() => onDelete(index)}
              title="Delete" aria-label="Delete block"
              className="rounded p-1 text-gray-400 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        </div>

        {!collapsed && <div className="p-3">{children}</div>}
      </div>

      {showAfter && <div className="mt-1 h-0.5 rounded bg-primaryBlue" />}
    </div>
  );
}
