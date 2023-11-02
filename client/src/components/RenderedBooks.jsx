import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <ul>
        {books.map((el) => (
          <li key={el._id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default RenderedBooks;
