import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SqlProducts from "./pages/SqlProducts";
import MongoProducts from "./pages/MongoProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sql" element={<SqlProducts />} />
        <Route path="/mongo" element={<MongoProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;