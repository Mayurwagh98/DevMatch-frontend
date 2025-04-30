import { useEffect, useState } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { receiverId } = useParams();
  const { userData } = useSelector((state) => state.user);
  const [chatMsg, setChatMsg] = useState([]);
  console.log("chatMsg:", chatMsg);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (!userData) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: userData?.firstName,
      userId: userData?._id,
      receiverId: receiverId,
    });

    socket.on("messageReceived", ({ firstName, message }) => {
      console.log(firstName, message);
      setChatMsg((prev) => [...prev, { firstName, message }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userData]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: userData?.firstName,
      userId: userData?._id,
      receiverId: receiverId,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="border border-teal-600 w-[50%] h-[60vh] mx-auto my-[6%] rounded-md flex flex-col justify-between p-2">
      <div className="border-b border-b-teal-400 py-2 px-3">
        <h2 className="text-xl">Chat with Mayur</h2>
      </div>
      {chatMsg?.map((msg, index) => (
        <div className="chat chat-start" key={index}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={userData?.photoUrl}
              />
            </div>
          </div>
          <div className="chat-header">
            {msg?.firstName}
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">{msg?.message}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      ))}
      {/* <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={userData?.photoUrl}
            />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">{newMessage}</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div> */}

      <form
        className="w-full py-3 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="border border-purple-500 rounded-md p-2 mx-2 w-[85%] text-sm"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-purple-600 text-white rounded-md p-2 mx-2"
          onClick={sendMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
