import Head from "next/head";
import { Inter } from "next/font/google";
import { ShowCharacters } from "@/components/characters/showCharacters";
import { CharacterEpisodes } from "@/components/episodes/characterEpisodes";
import { useEpisodesStore } from "@/store/episodesNumberStore";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    episodesCharacter1,
    episodesCharacter2,
    setEpisodesCharacter1,
    setEpisodesCharacter2,
  } = useEpisodesStore();

  const episodesOfBothCharaters: number[] = [];
  const uniqueNumbersSet = new Set(episodesCharacter1);
  episodesCharacter2.forEach((num) => {
    if (uniqueNumbersSet.has(num)) episodesOfBothCharaters.push(num);
  });

  return (
    <>
      <Head>
        <title>Chapters and characters</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
          <ShowCharacters setEpisodesCharacter={setEpisodesCharacter1} />
          <ShowCharacters setEpisodesCharacter={setEpisodesCharacter2} />
        </div>
        <div>
          <CharacterEpisodes episodesNum={episodesCharacter1} title='Character #1' />
          <CharacterEpisodes
            episodesNum={episodesOfBothCharaters}
            title='Character #1 & #2'
          />
          <CharacterEpisodes episodesNum={episodesCharacter2} title='Character #2' />
        </div>
      </main>
    </>
  );
}
