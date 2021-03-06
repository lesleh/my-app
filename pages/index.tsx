import Head from "next/head";
import Counter from "./components/counter";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
    </div>
  );
}
