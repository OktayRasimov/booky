import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
