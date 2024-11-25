import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSider } from "../redux/navbarSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "../components/CommentsContainer";
import ChatList from "../components/ChatContainer";
import { addMessage } from "../redux/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    dispatch(closeSider());

    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          comment: generateRandomText(10),
        }),
      );
    }, 2000);

    return () => clearInterval(timer);
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
        <div className="w-full border h-[500px] ml-3 rounded-lg overflow-y-auto bg-gray-100 flex flex-col-reverse">
          {chatMessages?.map((item, index) => (
            <ChatList name={item.name} comment={item.comment} key={index} />
          ))}
        </div>
      </div>

      <CommentsContainer />
    </div>
  );
};

export default Watch;
