'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded focus:outline-none focus:ring text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {current === 'dark' ? (
        <span className="text-xl">🌞</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
    </button>
  );
}