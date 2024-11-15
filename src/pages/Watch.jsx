import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSider } from "../redux/navbarSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSider());
  }, []);
  return (
    <div className="p-4">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Watch;
