import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useCharacters } from "@/hooks/getCharactersPerPage";
import { CharactersInfo } from "@/lib/types";
import { CharacterCard } from "@/ui-kit/cards";
import { SubTitle } from "@/ui-kit/typography";
import { TextField } from "@/ui-kit/textfields";

interface Props {
  title: string;
  pageCount: number;
  initialCharacters: CharactersInfo;
  setEpisodesCharacter: (episodesCharacter: number[]) => void;
}

export const ShowCharacters = ({
  title,
  pageCount,
  initialCharacters,
  setEpisodesCharacter,
}: Props) => {
  const [characterNameValue, setCharacterNameValue] = useState("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { data: characters } = useCharacters(
    pageNumber,
    characterNameValue,
    initialCharacters
  );

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
      <SubTitle>{title}</SubTitle>
      <div>
        <TextField
          type='text'
          placeholder='Search character'
          onChange={handleCharacterName}
        />
      </div>
      <div>
        {characters &&
          characters.results.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              onClick={() => handleSetEpisodes(character.episode)}
            />
          ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel='< Previous'
          nextLabel='Next >'
          pageCount={pageCount}
          pageRangeDisplayed={1}
          onPageChange={({ selected }) => setPageNumber(selected + 1)}
          containerClassName='pagination'
          previousLinkClassName='pagination__link'
          nextLinkClassName='pagination__link'
          disabledClassName='pagination__link--disabled'
          activeClassName='pagination__link--active'
        />
      </div>
    </>
  );
};
