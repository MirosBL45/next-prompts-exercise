import Link from 'next/link';

function page() {
  return (
    <div>
      <p>Hello User</p>
      <Link href={`/`}>GO HOME</Link>
    </div>
  );
}

export default page;
