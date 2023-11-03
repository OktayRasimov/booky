import axios from "axios";
import { useRef } from "react";
import styled from "styled-components";

const StyledAddBookContainer = styled.div`
  background-color: red;
  /* width: fit-content; */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transform: translateY(-20%);
  button {
    height: 50px;
  }
`;

function AddBook() {
  const title = useRef();
  const author = useRef();
  const description = useRef();
  const rating = useRef();
  function handleAddBook() {
    axios
      .post("http://localhost:8888/books", {
        title: title.current.value,
        author: author.current.value,
        description: description.current.value,
        rating: Number(rating.current.value),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <StyledAddBookContainer>
      <section>
        <h1>Add a book</h1>
        <p>Title</p>
        <input ref={title} placeholder="Book Title..." />
        <p>Author</p>
        <input ref={author} placeholder="Author..." />
        <p>Description</p>
        <input ref={description} placeholder="Description..." />
        <p>Rating</p>
        <select ref={rating} placeholder="Rating...">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">5</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </section>
      <button onClick={handleAddBook}>ADD</button>
    </StyledAddBookContainer>
  );
}

export default AddBook;
