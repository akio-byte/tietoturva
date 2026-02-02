import React from 'react';
import type { ContentItem } from '../contentRegistry';

type Category = ContentItem['category'];

type CategoryIconConfig = {
  className?: string;
};

const categoryColorMap: Record<Category, string> = {
  kyber: 'text-blue-400',
  ai: 'text-emerald-400',
  mobile: 'text-purple-400',
  crisis: 'text-red-400',
  privacy: 'text-indigo-400',
  routines: 'text-slate-400',
};

const getIconClassName = (category: Category, className?: string) => {
  const sizeClass = className ?? 'w-8 h-8';
  return `${sizeClass} ${categoryColorMap[category]}`;
};

export const getCategoryIcon = (
  category: Category,
  { className }: CategoryIconConfig = {}
) => {
  switch (category) {
    case 'ai':
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    case 'crisis':
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      );
    case 'mobile':
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      );
    case 'routines':
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case 'privacy':
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3zm0 0c-3.314 0-6 2.239-6 5v3h12v-3c0-2.761-2.686-5-6-5z"
          />
        </svg>
      );
    case 'kyber':
    default:
      return (
        <svg
          className={getIconClassName(category, className)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      );
  }
};
