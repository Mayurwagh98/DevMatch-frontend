import { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { receiverId } = useParams();
  const { userData } = useSelector((state) => state.user);
  const [chatMsg, setChatMsg] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    startSocket();
  }, [userData]);

  const startSocket = () => {
    if (!userData) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: userData?.firstName,
      userId: userData?._id,
      receiverId: receiverId,
    });
  };

  return (
    <div className="border border-teal-600 w-[50%] h-[60vh] mx-auto my-[6%] rounded-md flex flex-col justify-between">
      <div className="border-b border-b-teal-400 py-2 px-3">
        <h2 className="text-xl">Chat with Mayur</h2>
      </div>
      <form
        className="w-full py-3 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="border border-purple-500 rounded-md p-2 mx-2 w-[85%] text-sm"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value.trim())}
        />
        <button className="bg-purple-600 text-white rounded-md p-2 mx-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
