import Link from 'next/link';
import Layout from './layout';

function page() {
  return (
    <div>
      <p>POSTS</p>

      <Link href={`/`}>GO HOME</Link>
      <br />
      <Link href={`/posts/new`}>GO to new post</Link>
      <Layout />
    </div>
  );
}

export default page;
