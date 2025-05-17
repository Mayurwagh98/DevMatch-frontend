import { useEffect, useState, useRef, useCallback } from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useChat from "../hooks/useChat";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { receiverId } = useParams();
  const { getChat } = useChat(receiverId);
  const { userData } = useSelector((state) => state.user);
  const [chatMsg, setChatMsg] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const messagesContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const loadMessages = useCallback(
    async (pageNum) => {
      try {
        setLoading(true);
        const limit = 2;
        const { data } = await axios.get(
          BASE_URL + `/chat/${receiverId}?page=${pageNum}&limit=${limit}`,
          {
            withCredentials: true,
          }
        );

        const chatMessages = data?.messages.map((msg) => {
          const { sender, message } = msg;
          return {
            firstName: sender?.firstName,
            lastName: sender?.lastName,
            photoUrl: sender?.photoUrl,
            createdAt: sender?.createdAt,
            message,
          };
        });

        console.log("chatMessages:", chatMessages);
        setChatMsg((prev) => [...chatMessages, ...prev]);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error(error);
      }
    },
    [receiverId]
  );

  useEffect(() => {
    loadMessages(1);
  }, [receiverId]);

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

  // Handle scroll events for infinite loading
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop === 0 && !loading && page < totalPages) {
        // At top of container and more pages to load
        setPage((prev) => {
          const newPage = prev + 1;
          loadMessages(newPage);
          return newPage;
        });
      } else if (
        container.scrollToBottom === 0 &&
        !loading &&
        page < totalPages
      ) {
        setPage((prev) => {
          const newPage = prev + 1;
          loadMessages(newPage);
          return newPage;
        });
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [loading, page, totalPages, loadMessages]);

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
      <div className="h-full overflow-y-auto" ref={messagesContainerRef}>
        {loading && page > 1 && (
          <div className="flex justify-center py-2">
            <div className="loading loading-spinner text-primary"></div>
          </div>
        )}

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
            <div className="chat-bubble text-[0.9rem]">{msg?.message}</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        className="w-full py-3 mx-auto flex"
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
