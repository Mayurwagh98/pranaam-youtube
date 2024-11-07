import { Route, Routes } from "react-router-dom";
import Body from "../pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
    </Routes>
  );
};

export default AllRoutes;
