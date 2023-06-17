'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click me
      </button>
      <Link href="/user">Go to user</Link>
      <Link href="/posts">Go to posts</Link>
      <Link href="/glasses">Go to glasses</Link>
      <Link href="/cats_in_garden_with_flowers">Cats in garden</Link>
    </main>
  );
}
