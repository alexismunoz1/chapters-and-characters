import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useCharacters } from "@/hooks/getCharactersPerPage";

interface Props {
  title: string;
  setEpisodesCharacter: (episodesCharacter: number[]) => void;
}

export const ShowCharacters = ({ title, setEpisodesCharacter }: Props) => {
  const [characterNameValue, setCharacterNameValue] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const characters = useCharacters(pageNumber, characterNameValue);

  const handleCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCharacterNameValue(e.target.value);
  };

  const handleSetEpisodes = (episodesUrls: string[]) => {
    const episodesNumbersOfUrls: number[] = episodesUrls.map((url) => {
      const parts = url.split("/");
      const number = Number(parts[parts.length - 1]);
      return number;
    });
    setEpisodesCharacter(episodesNumbersOfUrls);
  };

  return (
    <>
      <h1>{title}</h1>
      <div>
        <input
          type='text'
          placeholder='Search character'
          onChange={handleCharacterName}
        />
      </div>
      <div>
        {characters.data?.results.map((character: any) => (
          <div key={character.id} onClick={() => handleSetEpisodes(character.episode)}>
            <h5>{character.name}</h5>
            <p>{character.status}</p>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel='Anterior'
          nextLabel='Siguiente'
          pageCount={characters.data?.info.pages}
          onPageChange={({ selected }) => setPageNumber(selected + 1)}
        />
      </div>
    </>
  );
};
