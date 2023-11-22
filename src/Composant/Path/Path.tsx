import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

interface PathProps {
  data: { title: string; id: string }[];
}

const Path = ({ data }: PathProps) => {
  return (
    <Routes>
      <Route path="/" element={<Home data={data} />} />
    </Routes>
  );
};

export default Path;
