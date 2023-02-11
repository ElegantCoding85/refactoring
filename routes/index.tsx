import { Head } from "aleph/react";

export default function Index() {
  return (
    <div
      className="w-screen flex flex-col items-center justify-center"
      style={{
        height: "calc(100vh - 2 * 80px)",
      }}
    >
      <Head>
        <title>Refactoring</title>
        <meta name="description" content="Simplify refactoring" />
      </Head>
      <h1 className="text-3xl font-bold mt-2">
        Simplify refactoring for everyone
      </h1>
      <nav className="mt-8">

      </nav>
    </div>
  );
}
