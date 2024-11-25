import { RxAvatar } from "react-icons/rx";

const ChatList = ({ name, comment }) => {
  return (
    <div className="flex bg-white justify-start items-center my-2 p-2">
      <RxAvatar className="text-2xl" />
      <p className="ml-2">
        {name}: <span>{comment}</span>
      </p>
    </div>
  );
};

export default ChatList;
