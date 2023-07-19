import Head from "next/head";
import { Inter } from "next/font/google";
import { ShowCharacters } from "../components/showCharacters";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Chapters and characters</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}>
        <div>Hola mundo</div>
        <ShowCharacters />
      </main>
    </>
  );
}
