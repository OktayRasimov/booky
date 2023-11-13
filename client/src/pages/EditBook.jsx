import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import LoadingSpinner from "../components/LoadingSpinner";
import styled from "styled-components";

const EditBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--color-white-100);
  padding: 1rem 2rem;
  border-radius: 10px;
  width: 50rem;
  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      border-radius: 5px;
      padding: 0 0.6rem;
      transition: all 0.6s;
      cursor: pointer;
      &:hover {
        background-color: var(--color-blue-200);
        color: var(--color-white-100);
      }
    }
  }
`;

function EditBook() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [description, setDescription] = useState([]);
  const [completed, setCompleted] = useState();

  useEffect(
    function () {
      setLoading(true);
      axios
        .get(`booky-mern-api.vercel.app/books/${id}`)
        .then((res) => {
          setTitle(res.data.title);
          setAuthor(res.data.author);
          setDescription(res.data.description);
          setCompleted(res.data.completed);
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [id]
  );

  function handleEdit() {
    const data = {
      title,
      author,
      description,
      completed,
    };

    axios
      .put(`booky-mern-api.vercel.app/books/${id}`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        navigate(-1);
      });
  }

  return (
    <EditBookContainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h3>Title</h3>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <h3>Author</h3>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <h3>Description</h3>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <h3>Completed</h3>
          <select
            value={completed}
            placeholder="Completed..."
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
          {/* <input value={completed} onChange={(e) => setCompleted(e.target.value)} /> */}
        </>
      )}
      <aside>
        <BackButton />
        <h3 onClick={handleEdit}>Edit</h3>
      </aside>
    </EditBookContainer>
  );
}

export default EditBook;
