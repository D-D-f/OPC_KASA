import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import PageLocation from "../PageLocation/PageLocation";
import About from "../About/About";
import ErrorPage from "../ErrorPage/ErrorPage";

interface PathProps {
  data: [];
}

const Path = ({ data }: PathProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/:id" element={<PageLocation data={data} />} />
      <Route path="/about" element={<About />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Path;
