import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideos();
  }, []);

  const getAllVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const jsonData = await data.json();
      console.log(jsonData.items);
      setVideos(jsonData.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-wrap m-2">
      {videos?.map((video) => (
        <VideoCard info={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
