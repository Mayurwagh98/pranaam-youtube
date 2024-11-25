import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSider } from "../redux/navbarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSider());
  }, []);
  return (
    <div className="p-4 w-full">
      <div className="flex">
        <div>
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="w-full border h-[500px] ml-3 rounded-lg overflow-y-auto bg-gray-100"></div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default Watch;
