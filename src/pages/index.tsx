import Head from "next/head";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { ShowCharacters } from "@/components/characters/showCharacters";
import { ShowEpisodes } from "@/components/episodes/showEpisodes";
import { useEpisodesStore } from "@/store/episodesNumberStore";
import { CharactersInfo } from "@/hooks/types";
import { fetchCharactersGet } from "@/api/rickAndMortyApi";

type Props = {
  initialCharacters: CharactersInfo;
  pageCountCharacters: number;
};

const inter = Inter({ subsets: ["latin"] });

export default function Home({ initialCharacters, pageCountCharacters }: Props) {
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
        <div>
          <ShowCharacters
            title='Character #1'
            pageCount={pageCountCharacters}
            initialCharacters={initialCharacters}
            setEpisodesCharacter={setEpisodesCharacter1}
          />
          <ShowCharacters
            title='Character #2'
            pageCount={pageCountCharacters}
            initialCharacters={initialCharacters}
            setEpisodesCharacter={setEpisodesCharacter2}
          />
        </div>
        {episodesCharacter1[0] && episodesCharacter2[0] && (
          <div>
            <ShowEpisodes episodesNum={episodesCharacter1} title='Character #1' />
            <ShowEpisodes
              episodesNum={episodesOfBothCharaters}
              title='Character #1 & #2'
            />
            <ShowEpisodes episodesNum={episodesCharacter2} title='Character #2' />
          </div>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const characters = await fetchCharactersGet();
  return {
    props: { characters, pageCountCharacters: characters.info.pages },
  };
};
