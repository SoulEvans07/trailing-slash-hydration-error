import type { GetServerSideProps } from "next";
import Link from "next/link";

export default function OtherPage() {
  return (
    <div>
      <h1>Othe Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
}

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps;
