import { useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

function Pagination({ books, itemParams, searchParams, setSearchParams }) {
  useEffect(
    function () {
      console.log(books.length);
    },
    [books]
  );

  return (
    <PaginationContainer>
      <aside>0 to 10 from total of {books.length} books</aside>

      <div>
        <HiChevronDoubleLeft
          onClick={() =>
            setSearchParams((prev) => {
              if (itemParams == 0) return prev;
              prev.set("items", Number(searchParams.get("items")) - 10);
              return prev;
            })
          }
        />
        <HiChevronDoubleRight
          onClick={() =>
            setSearchParams((prev) => {
              if (books.length >= Number(itemParams) + 10) {
                prev.set("items", Number(searchParams.get("items")) + 10);
                return prev;
              }
            })
          }
        />
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
