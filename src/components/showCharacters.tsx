import { useState } from "react";
import { useCharacters } from "../hooks/getCharacters";
import ReactPaginate from "react-paginate";

export const ShowCharacters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const characters = useCharacters(pageNumber);

  return (
    <>
      <h1>Characters</h1>
      <ul>
        {characters.data?.results.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <br />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
        <ReactPaginate
          previousLabel='Anterior'
          nextLabel='Siguiente'
          pageCount={characters.data?.info.pages}
          onPageChange={(data) => setPageNumber(data.selected + 1)}
        />
      </div>
    </>
  );
};
