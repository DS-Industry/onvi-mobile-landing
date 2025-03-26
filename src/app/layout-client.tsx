"use client";


export default function LayoutClient({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {/* This is a client component wrapper that can contain client-side logic */}
      {children}
    </>
  );
}
