import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useCharacters } from "@/hooks/getCharactersPerPage";
import { CharactersInfo } from "@/lib/types";
import { CharacterCard } from "@/ui-kit/cards";
import { SubTitle } from "@/ui-kit/typography";
import { TextField } from "@/ui-kit/textfields";

interface Props {
  title: string;
  initialCharacters: CharactersInfo;
  setEpisodesCharacter: (episodesCharacter: number[]) => void;
  setCharacter: (character: string) => void;
}

export const ShowCharacters = ({
  title,
  initialCharacters,
  setEpisodesCharacter,
  setCharacter,
}: Props) => {
  const [characterName, setCharacterName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { data: characters } = useCharacters(
    pageNumber,
    characterName,
    initialCharacters
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPageNumber(selected + 1);
  };

  const handleChangeCharacterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageNumber(1);
    setCharacterName(e.target.value);
  };

  const handleSetEpisodes = (episodesUrls: string[], characterName: string) => {
    const episodesNumbers = episodesUrls.map((url) => {
      const parts = url.split("/");
      const number = Number(parts[parts.length - 1]);
      return number;
    });
    setEpisodesCharacter(episodesNumbers);
    setCharacter(characterName);
  };

  return (
    <div className='showCharactersContainer'>
      <div className='showCharactersTitleAndInput'>
        <SubTitle style={{ marginBottom: "10px" }}>{title}</SubTitle>
        <TextField
          type='text'
          placeholder='Search character'
          onChange={handleChangeCharacterName}
        />
      </div>
      <div className='charactersList'>
        {characters &&
          characters.results.map((character) => (
            <CharacterCard
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              onClick={() => handleSetEpisodes(character.episode, character.name)}
            />
          ))}
      </div>
      <div>
        <ReactPaginate
          previousLabel='< Previous'
          nextLabel='Next >'
          pageCount={initialCharacters.info.pages}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName='pagination'
          previousLinkClassName='pagination__link'
          nextLinkClassName='pagination__link'
          disabledClassName='pagination__link--disabled'
          activeClassName='pagination__link--active'
        />
      </div>
    </div>
  );
};
