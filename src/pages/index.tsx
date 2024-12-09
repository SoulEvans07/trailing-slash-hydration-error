import type { GetServerSideProps } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/other">Other</Link>
    </div>
  );
}

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps;
