"use client";

import { useEffect, useState } from 'react';

export default function LayoutClient({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* This is a client component wrapper that can contain client-side logic */}
      {children}
    </>
  );
}