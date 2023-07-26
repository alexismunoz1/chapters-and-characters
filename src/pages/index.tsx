import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { ShowCharacters } from "@/components/characters/showCharacters";
import { ShowEpisodes } from "@/components/episodes/showEpisodes";
import { useEpisodesStore } from "@/store/episodesNumberStore";
import { useEpisodesOfBothCharacters } from "@/store/commonEpisodesStore";
import { fetchCharacters } from "@/lib/api";
import { CharactersInfo } from "@/lib/types";

interface Props {
  initialCharacters: CharactersInfo;
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({ initialCharacters }: Props) {
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
      <main className={`${inter.className} mainContainer`}>
        <div className='charactersContainer'>
          <ShowCharacters
            title='Character #1'
            initialCharacters={initialCharacters}
            setEpisodesCharacter={setCharacter1Episodes}
          />
          <ShowCharacters
            title='Character #2'
            initialCharacters={initialCharacters}
            setEpisodesCharacter={setCharacter2Episodes}
          />
        </div>
        {/* {character1Episodes[0] && character2Episodes[0] && ( */}
        <div className='charactersContainer'>
          <ShowEpisodes title='Character #1' episodesNum={character1Episodes} />
          <ShowEpisodes
            title='Character #1 & #2'
            episodesNum={episodesOfBothCharacters}
          />
          <ShowEpisodes title='Character #2' episodesNum={character2Episodes} />
        </div>
        {/* )} */}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const characters = await fetchCharacters();
  return {
    props: { initialCharacters: characters },
  };
};
