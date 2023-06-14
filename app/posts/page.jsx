import Link from 'next/link';

function page() {
  return (
    <div>
      <p>POSTS</p>

      <Link href={`/`}>GO HOME</Link>
      <br />
      <Link href={`/posts/new`}>GO to new post</Link>
    </div>
  );
}

export default page;
