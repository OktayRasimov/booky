import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { firstLetterCapital } from "../utils/firstLetterCapital";
import LoadingSpinner from "../components/LoadingSpinner";

function SelectedBook() {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      axios
        .get(`booky-mern-api.vercel.app/books/${id}`)
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1>{selectedBook?.title}</h1>
          <h1>{selectedBook?.author}</h1>
          <h1>{selectedBook?.description}</h1>
          <h1>{firstLetterCapital(selectedBook?.completed)}</h1>
          <BackButton />
        </>
      )}
    </div>
  );
}

export default SelectedBook;
