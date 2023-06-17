import Link from 'next/link';

function page() {
  return (
    <div>
      <p>Hello monitor</p>
      <br />
      <Link href={`/`}>GO HOME</Link>
    </div>
  );
}

export default page;
