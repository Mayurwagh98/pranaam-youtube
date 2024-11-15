const VideoCard = ({ info }) => {
  const getTimeAgo = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const now = new Date();

    const diffInMs = now - publishedDate;
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));

    if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
    }

    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
    }

    return "just now";
  };

  return (
    <div className="p-3 shadow-lg w-[100%] rounded-lg m-2 mb-4">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="poster"
        className="w-full rounded-md"
      />
      <div className="flex justify-start items-start mt-2">
        <img
          src={info?.snippet?.thumbnails?.default?.url}
          alt="icon"
          className="w-[35px] h-[35px] rounded-full mr-2"
        />
        <div>
          <h3 className="text-sm font-bold">{info?.snippet?.title}</h3>
          <p className="text-gray-500 text-[0.7rem]">
            {info?.snippet?.channelTitle} <span> . </span>
            {info?.statistics?.viewCount} views <span> . </span>
            {getTimeAgo(info?.snippet?.publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
