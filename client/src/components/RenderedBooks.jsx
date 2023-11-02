import { useEffect, useState } from "react";
import axios from "axios";
import EachRenderedBook from "./EachRenderedBook";
import styled from "styled-components";

const StyledRenderedBoxUlTitles = styled.ul`
  display: grid;
  grid-template-columns: 0rem 30rem 25rem 28rem 24rem;
  justify-content: space-between;
  list-style: none;

  border-bottom: 1px solid var(--color-white-300);
  padding: 2rem 5rem;
`;

const RenderedMovieContainer = styled.div`
  border-radius: 10px;
  border: 1px solid var(--color-white-300);
  margin: 6rem;
  /* &:ul {
    background-color: var(--color-white-100);
  } */
`;

function RenderedBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <RenderedMovieContainer>
      <main>
        <StyledRenderedBoxUlTitles>
          <li>NUM</li>
          <li>TITLE</li>
          <li>AUTHOR</li>
          <li>DESCRIPTION</li>
          <li>RATING</li>
        </StyledRenderedBoxUlTitles>
      </main>

      <ul>
        {books.map((el, i) => (
          <EachRenderedBook i={i} el={el} key={el._id} />
        ))}
      </ul>
    </RenderedMovieContainer>
  );
}

export default RenderedBooks;
