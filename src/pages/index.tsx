import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { ShowCharacters } from "@/components/characters/showCharacters";
import { ShowEpisodes } from "@/components/episodes/showEpisodes";
import { useEpisodesStore } from "@/store/episodesNumberStore";
import { useEpisodesOfBothCharacters } from "@/store/commonEpisodesStore";
import { fetchCharactersGet } from "@/lib/api";
import { CharactersInfo } from "@/lib/types";

interface Props {
  initialCharacters: CharactersInfo;
  pageCountCharacters: number;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ initialCharacters, pageCountCharacters }: Props) {
  const {
    character1Episodes,
    character2Episodes,
    setCharacter1Episodes,
    setCharacter2Episodes,
  } = useEpisodesStore();
  const { episodesOfBothCharacters, setEpisodesOfBothCharacters } =
    useEpisodesOfBothCharacters();

  useEffect(() => {
    setEpisodesOfBothCharacters(character1Episodes, character2Episodes);
  }, [character1Episodes, character2Episodes]);

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
            setEpisodesCharacter={setCharacter1Episodes}
          />
          <ShowCharacters
            title='Character #2'
            pageCount={pageCountCharacters}
            initialCharacters={initialCharacters}
            setEpisodesCharacter={setCharacter2Episodes}
          />
        </div>
        {character1Episodes[0] && character2Episodes[0] && (
          <div>
            <ShowEpisodes episodesNum={character1Episodes} title='Character #1' />
            <ShowEpisodes
              episodesNum={episodesOfBothCharacters}
              title='Character #1 & #2'
            />
            <ShowEpisodes episodesNum={character2Episodes} title='Character #2' />
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
