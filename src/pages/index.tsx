import { useEffect } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { GetStaticProps } from "next";
import { Layout } from "@/components/layout/layout";
import { ShowCharacters } from "@/components/characters/showCharacters";
import { ShowEpisodes } from "@/components/episodes/showEpisodes";
import { useEpisodesStore } from "@/store/episodesNumberStore";
import { useEpisodesOfBothCharacters } from "@/store/commonEpisodesStore";
import { useSelectedCharacterStore } from "@/store/selectedCharacterStore";
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

  const { characterName1, characterName2, setCharacterName1, setCharacterName2 } =
    useSelectedCharacterStore();

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
        <Layout>
          <div className='charactersContainer'>
            <ShowCharacters
              title='Character #1'
              initialCharacters={initialCharacters}
              setEpisodesCharacter={setCharacter1Episodes}
              setCharacter={setCharacterName1}
            />
            <ShowCharacters
              title='Character #2'
              initialCharacters={initialCharacters}
              setEpisodesCharacter={setCharacter2Episodes}
              setCharacter={setCharacterName2}
            />
          </div>
          {character1Episodes[0] && character2Episodes[0] && (
            <div className='episodesContainer'>
              <ShowEpisodes
                title={`Character #1: ${characterName1}`}
                episodesNum={character1Episodes}
              />
              <ShowEpisodes
                title='Character #1 & #2 - Shared Episodes'
                episodesNum={episodesOfBothCharacters}
              />
              <ShowEpisodes
                title={`Character #2: ${characterName2}`}
                episodesNum={character2Episodes}
              />
            </div>
          )}
        </Layout>
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
