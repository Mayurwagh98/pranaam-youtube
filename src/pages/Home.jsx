import MainContainer from "../components/MainContainer";
import Sidebar from "../components/Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
