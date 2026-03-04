// src/Insights/portableTextComponents.js
import React from "react";

export const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primaryBlue mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-extrabold text-primaryBlue mt-10 mb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-extrabold text-primaryBlue mt-8 mb-3 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg sm:text-xl font-extrabold text-primaryBlue mt-6 mb-2 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed my-4 text-base sm:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primaryOrange/60 pl-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="my-4 pl-6 list-disc space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 pl-6 list-decimal space-y-2 text-gray-700 text-base sm:text-lg">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },

  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-bold text-primaryBlue underline decoration-primaryOrange/50 underline-offset-4 hover:decoration-primaryOrange"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong className="text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="text-gray-800">{children}</em>,
  },

  // For now: unknown custom blocks won't crash—just ignore.
  types: {},
};