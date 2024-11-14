import { Route, Routes } from "react-router-dom";
import Body from "../pages/Home";
import Watch from "../pages/Watch";
import MainContainer from "./MainContainer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<MainContainer />} />
        <Route path="watch" element={<Watch />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
