import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Books from "./pages/Books";
import SelectedBook from "./pages/SelectedBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/books" element={<Books />} />
          <Route path="/books/details/:id" element={<SelectedBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
