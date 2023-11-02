import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function SelectedBook() {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(
    function () {
      setLoading(true);
      axios
        .get(`http://localhost:8888/books/${id}`)
        .then((res) => {
          setSelectedBook(res.data);
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

  return (
    <div>
      <h1>{selectedBook?.title}</h1>
      <BackButton />
    </div>
  );
}

export default SelectedBook;
