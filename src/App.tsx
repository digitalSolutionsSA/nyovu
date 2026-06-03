import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import About from "./pages/About";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}
