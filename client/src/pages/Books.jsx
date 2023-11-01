import { useEffect } from "react";
import axios from "axios";

function Books() {
  useEffect(function () {
    axios.get("http://localhost:8888/books").then((res) => {
      console.log(res);
    });
  }, []);

  return <div>BOOOOOOOOK</div>;
}

export default Books;
