import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import LoadingSpinner from "../components/LoadingSpinner";

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
        .get(`http://localhost:8888/books/${id}`)
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
      .put(`http://localhost:8888/books/${id}`, data)
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
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={author} onChange={(e) => setAuthor(e.target.value)} />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
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
      <h3 onClick={handleEdit}>edit</h3>
      <BackButton />
    </div>
  );
}

export default EditBook;
