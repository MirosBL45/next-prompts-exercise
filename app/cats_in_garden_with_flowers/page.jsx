import Link from 'next/link';

function page() {
  return (
    <div>
      <p>Cats are in garden</p>
      <Link href={`/`}>GO HOME</Link>
    </div>
  );
}

export default page;
