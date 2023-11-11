import { useEffect } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  aside {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 4rem;
  }
  main {
    span {
      color: black;
      font-weight: 900;
      border-bottom: 1px solid;
    }
  }
`;

function Pagination({ books, itemParams, searchParams, setSearchParams }) {
  const numFinished = books?.filter((el) => el.completed === true);
  const numUnfinished = books?.filter((el) => el.completed === false);

  return (
    <PaginationContainer>
      <main>
        <span>{numFinished.length}</span> finished and{" "}
        <span>{numUnfinished.length}</span> unfinished from total of{" "}
        <span>{books.length}</span> books
      </main>

      <div>
        <aside
          onClick={() =>
            setSearchParams((prev) => {
              if (itemParams == 0) return prev;
              prev.set("items", Number(searchParams.get("items")) - 10);
              return prev;
            })
          }
        >
          <HiChevronDoubleLeft />
          <p>Previous</p>
        </aside>
        <aside
          onClick={() =>
            setSearchParams((prev) => {
              if (books.length >= Number(itemParams) + 10) {
                prev.set("items", Number(searchParams.get("items")) + 10);
                return prev;
              }
            })
          }
        >
          <p>Next</p>
          <HiChevronDoubleRight />
        </aside>
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
