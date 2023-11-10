import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackButton from "../components/BackButton";

const StyledAddBookContainer = styled.form`
  background-color: var(--color-white-100);
  /* width: fit-content; */
  padding: 1rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 50rem;
  transform: translateY(-20%);
  section {
    p {
      font-size: 2.4rem;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 0.6rem 0.4rem;
      border-radius: 5px;
      border: 1px solid;
    }
  }
  aside {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
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
      .finally(() => navigate(-1));
  }

  return (
    <StyledAddBookContainer onSubmit={handleAddBook}>
      <section>
        <h1>Add a book</h1>
        <p>Title</p>
        <input ref={title} placeholder="Book Title..." required />
        <p>Author</p>
        <input ref={author} placeholder="Author..." required />
        <p>Description</p>
        <input ref={description} placeholder="Description..." />
        <p>Completed</p>
        <select ref={completed} placeholder="Completed...">
          <option value="false">false</option>
          <option value="true">true</option>
        </select>
      </section>
      <aside>
        <BackButton />
        <button type="submit">ADD</button>
      </aside>
    </StyledAddBookContainer>
  );
}

export default AddBook;
