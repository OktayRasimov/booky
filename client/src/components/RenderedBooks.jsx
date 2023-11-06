import { useEffect, useState } from "react";
import axios from "axios";
import EachRenderedBook from "./EachRenderedBook";
import styled from "styled-components";
import LoadingSpinner from "./LoadingSpinner";
import { useSearchParams } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

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

const PaginationContainer = styled.div``;

function RenderedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ items: 0 });

  useEffect(function () {
    setLoading(true);
    axios
      .get("http://localhost:8888/books")
      .then((res) => {
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.log(console.log(err.message));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const itemParams = searchParams.get("items");
  console.log(String(Number(itemParams) + 10));

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
      <PaginationContainer>
        {/* <footer>{books.length}</footer> */}

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
      </PaginationContainer>
    </RenderedBooksContainer>
  );
}

export default RenderedBooks;
