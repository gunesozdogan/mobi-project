'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-center pt-20">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <p className="mt-4 text-lg">Sorry, the page is not found!</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Return Home
      </Link>
    </div>
  );
}
