import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Books from "./pages/Books";
import SelectedBook from "./pages/SelectedBook";
import AddBook from "./pages/AddBook";
import DeleteBook from "./pages/DeleteBook";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/books" element={<Books />} />
          <Route path="/books/details/:id" element={<SelectedBook />} />
          <Route path="/books/delete/:id" element={<DeleteBook />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
