import { BASE_URL } from "../utils/constants";
import axios from "axios";

const useChat = (receiverId) => {
  const getChat = async (setChatMsg) => {
    try {
      const { data } = await axios.get(BASE_URL + `/chat/${receiverId}`, {
        withCredentials: true,
      });

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
      setChatMsg(chatMessages);
    } catch (error) {
      throw new Error(error);
    }
  };

  return { getChat };
};

export default useChat;
