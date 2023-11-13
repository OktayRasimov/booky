import { useEffect, useState } from "react";
import axios from "axios";
import EachRenderedBook from "./EachRenderedBook";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { useSearchParams } from "react-router-dom";

import Pagination from "./Pagination";

const StyledRenderedBoxUlTitles = styled.ul`
  display: grid;
  grid-template-columns: 10rem 30rem 25rem 28rem 24rem;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px solid var(--color-white-300);
  padding: 1rem 5rem;
`;

const RenderedBooksContainer = styled.div`
  border-radius: 10px;
  border: 1px solid var(--color-white-300);
  /* margin: 1rem; */
  /* &:ul {
    background-color: var(--color-white-100);
  } */
`;

function RenderedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ items: 0 });

  useEffect(
    function () {
      setLoading(true);
      axios
        .get("booky-mern-api.vercel.app/books")
        .then((res) => {
          setBooks(res.data.data);
        })
        .catch((err) => {
          console.log(console.log(err.message));
        })
        .finally(() => {
          setLoading(false);
          if (!searchParams.get("items")) {
            setSearchParams((prev) => {
              prev.set("items", 0);
            });
          }
        });
    },
    [searchParams, setSearchParams]
  );

  const itemParams = searchParams.get("items");

  return (
    <RenderedBooksContainer>
      <StyledRenderedBoxUlTitles>
        <li>NUM</li>
        <li>TITLE</li>
        <li>AUTHOR</li>
        <li>DESCRIPTION</li>
        <li>Completed</li>
      </StyledRenderedBoxUlTitles>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {books
            .slice(itemParams, String(Number(itemParams) + 10))
            .map((el, i) => {
              return (
                <EachRenderedBook
                  i={i + Number(itemParams)}
                  el={el}
                  key={el._id}
                />
              );
            })}
        </ul>
      )}
      <Pagination
        books={books}
        itemParams={itemParams}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </RenderedBooksContainer>
  );
}

export default RenderedBooks;
