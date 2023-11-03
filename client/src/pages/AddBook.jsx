import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  const completed = useRef();

  const navigate = useNavigate();

  function handleAddBook() {
    axios
      .post("http://localhost:8888/books", {
        title: title.current.value,
        author: author.current.value,
        description: description.current.value,
        completed: completed.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(navigate(-1));
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
        <p>Completed</p>
        <select ref={completed} placeholder="Completed...">
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </section>
      <button onClick={handleAddBook}>ADD</button>
    </StyledAddBookContainer>
  );
}

export default AddBook;
