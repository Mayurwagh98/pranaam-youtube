const VideoCard = ({ info }) => {
  return (
    <div className="p-2 shadow-lg w-[30%] rounded-lg">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="poster"
        className="w-full rounded-md"
      />
      <div className="flex justify-start items-center mt-2">
        <img
          src={info?.snippet?.thumbnails?.default?.url}
          alt="icon"
          className="w-[35px] h-[35px] rounded-full mr-2"
        />
        <div>
          <h3 className="text-sm font-bold">{info?.snippet?.title}</h3>
          <p className="text-gray-500 text-sm">
            {info?.snippet?.channelTitle} . {info?.statistics?.viewCount} view .{" "}
            {info?.snippet?.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
