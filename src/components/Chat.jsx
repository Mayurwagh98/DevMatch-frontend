import { useEffect, useState, useRef } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useChat from "../hooks/useChat";

const Chat = () => {
  const { receiverId } = useParams();
  const { getChat } = useChat(receiverId);
  const { userData } = useSelector((state) => state.user);
  const [chatMsg, setChatMsg] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getChat(setChatMsg);
  }, [receiverId]);

  useEffect(() => {
    scrollToBottom();
  }, [chatMsg]);

  useEffect(() => {
    if (!userData) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", {
      firstName: userData?.firstName,
      userId: userData?._id,
      receiverId: receiverId,
    });

    socket.on(
      "messageReceived",
      ({ firstName, lastName, photoUrl, message, createdAt }) => {
        console.log(firstName, message);
        setChatMsg((prev) => [
          ...prev,
          { firstName, lastName, photoUrl, message, createdAt },
        ]);
      }
    );

    return () => {
      socket.disconnect();
    };
  }, [userData]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      firstName: userData?.firstName,
      lastName: userData?.lastName,
      userId: userData?._id,
      photoUrl: userData?.photoUrl,
      receiverId: receiverId,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className="border border-teal-600 w-[50%] h-[60vh] mx-auto my-[4%] rounded-md flex flex-col justify-between p-2">
      <div className="border-b border-b-teal-400 py-2 px-3">
        <h2 className="text-xl">Chat</h2>
      </div>
      <div className="h-full overflow-y-auto">
        {chatMsg?.map((msg, index) => (
          <div
            className={`chat ${
              msg?.firstName === userData?.firstName ? "chat-end" : "chat-start"
            } my-3`}
            key={index}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src={msg?.photoUrl}
                />
              </div>
            </div>
            <div className="chat-header">
              {msg?.firstName} {msg?.lastName}
            </div>
            <div className="chat-bubble">{msg?.message}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        className="w-full py-3 mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Type your message"
          className="border border-purple-500 rounded-md p-2 mx-2 w-[85%] text-sm outline-none"
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
