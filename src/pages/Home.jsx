import Sidebar from "../components/Sidebar";
import VideoContainer from "../components/VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default Body;
