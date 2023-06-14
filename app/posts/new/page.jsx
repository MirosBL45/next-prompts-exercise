import Link from 'next/link';

function page() {
  return (
    <div>
      <p>NEW POST</p>

      <Link href={`/`}>GO HOME</Link>
    </div>
  );
}

export default page;
