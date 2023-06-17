import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div>
      <p>Glasses</p>
      <Link href={`/`}>GO HOME</Link>
    </div>
  );
}

export default page;
