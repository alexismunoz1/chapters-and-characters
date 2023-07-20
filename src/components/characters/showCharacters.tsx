import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useCharacters } from "@/hooks/getCharactersPerPage";

export const ShowCharacters = ({ setEpisodesCharacter }: any) => {
  const [characterNameValue, setCharacterNameValue] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const characters = useCharacters(pageNumber, characterNameValue);

  const handleSetEpisodes = (episodesUrls: string[]) => {
    const episodesNumbersOfUrls: number[] = episodesUrls.map((url) => {
      const parts = url.split("/");
      const number = Number(parts[parts.length - 1]);
      return number;
    });
    setEpisodesCharacter(episodesNumbersOfUrls);
  };

  const handleCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCharacterNameValue(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <h1>Characters #1</h1>
      <div style={{ padding: "10px" }}>
        <input
          type='text'
          placeholder='Search character'
          onChange={handleCharacterName}
        />
      </div>
      <div style={{ padding: "10px" }}>
        {characters.data?.results.map((character: any) => (
          <div
            key={character.id}
            onClick={() => handleSetEpisodes(character.episode)}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}>
            <h5>{character.name}</h5>
            <p>{character.status}</p>
            <p>{character.species}</p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <ReactPaginate
          previousLabel='Anterior'
          nextLabel='Siguiente'
          pageCount={characters.data?.info.pages}
          onPageChange={({ selected }) => setPageNumber(selected + 1)}
        />
      </div>
    </div>
  );
};
