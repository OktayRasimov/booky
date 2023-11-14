import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineXCircle } from "react-icons/hi";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const StyledCancelContainer = styled.div`
  background-color: var(--color-white-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  width: 38rem;
  gap: 1.4rem;
  position: relative;
  border-radius: 5px;

  p {
    text-align: center;
    color: grey;
    span {
      font-weight: 900;
      color: black;
    }
  }
  aside {
    display: flex;
    gap: 1rem;
    button {
      &:first-child {
        color: var(--color-white-100);
        background-color: var(--color-white-200);
        border: none;
        font-size: 3rem;
        padding: 0.8rem 1rem;
      }
      &:last-child {
        background-color: red;
        color: var(--color-white-100);
        border: none;
        font-size: 3rem;
        padding: 0.8rem 1rem;
      }
    }
  }
`;
const CloseButton = styled.p`
  position: absolute;
  top: 0;
  right: 8px;
  cursor: pointer;
`;

const DeleteIcon = styled.p`
  font-size: 8.8rem;
`;

function DeleteBookConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      axios
        .get(`https://booky-mern-36cb894449f3.herokuapp.com/books/${id}`)
        .then((res) => {
          setSelectedBook(res.data);
        })
        .catch((err) => {
          console.log(`something went wrong :${err.message}`);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [id]
  );

  function handleDeleteBook() {
    axios
      .delete(`https://booky-mern-36cb894449f3.herokuapp.com/books/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => navigate(-1));
  }

  return (
    <StyledCancelContainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <DeleteIcon>
            <HiOutlineXCircle style={{ color: "red" }} />
          </DeleteIcon>
          <h1>Are you sure?</h1>
          <p>
            Do you really want to delete this book{" "}
            <span>:{selectedBook.title}</span>? This process cannot be undone.
          </p>
          <aside>
            <button onClick={() => navigate(-1)}>Cancel</button>
            <button onClick={handleDeleteBook}>Delete</button>
          </aside>
          <CloseButton onClick={() => navigate(-1)}>x</CloseButton>
        </>
      )}
    </StyledCancelContainer>
  );
}

export default DeleteBookConfirmation;
