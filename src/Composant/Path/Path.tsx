import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import PageLocation from "../PageLocation/PageLocation";

interface PathProps {
  data: [];
}

const Path = ({ data }: PathProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
      <Route path="/:id" element={<PageLocation data={data} />} />
    </Routes>
  );
};

export default Path;
