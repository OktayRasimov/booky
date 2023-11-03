import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineXCircle } from "react-icons/hi";
import axios from "axios";

const StyledCancelContainer = styled.div`
  background-color: var(--color-white-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 4rem;
  width: 38rem;
  gap: 3rem;
  position: relative;
  border-radius: 5px;

  p {
    text-align: center;
    color: grey;
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

function DeleteBookConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDeleteBook() {
    axios
      .delete(`http://localhost:8888/books/${id}`)
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
      <HiOutlineXCircle />
      <h1>Are you sure?</h1>
      <p>
        Do you really want to delete these records? This process cannot be
        undone.
      </p>
      <aside>
        <button onClick={() => navigate(-1)}>Cancel</button>
        <button onClick={handleDeleteBook}>Delete</button>
      </aside>
      <CloseButton onClick={() => navigate(-1)}>x</CloseButton>
    </StyledCancelContainer>
  );
}

export default DeleteBookConfirmation;
