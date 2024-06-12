"use client"
import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, initialValue: object) {
  const [value, setValue] = useState(() => {
    const storedValue = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};