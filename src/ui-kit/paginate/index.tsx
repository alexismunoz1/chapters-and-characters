import ReactPaginate from "react-paginate";

interface Props {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
}

export const PaginateCharacters = ({ pageCount, onPageChange }: Props) => {
  return (
    <ReactPaginate
      previousLabel='< Previous'
      nextLabel='Next >'
      pageCount={pageCount}
      pageRangeDisplayed={1}
      onPageChange={onPageChange}
      containerClassName='pagination'
      previousLinkClassName='pagination__link'
      nextLinkClassName='pagination__link'
      disabledClassName='pagination__link--disabled'
      activeClassName='pagination__link--active'
    />
  );
};
