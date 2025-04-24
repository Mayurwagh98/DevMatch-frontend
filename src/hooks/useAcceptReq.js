import axios from "axios";
import { BASE_URL } from "../utils/constants";

const useAcceptReq = () => {
  const handleRequest = async (status, requestId) => {
    console.log('requestId:', requestId)
    try {
      const { data } = await axios.post(
        BASE_URL + `/request/review/${status}/${requestId}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return { handleRequest };
};

export default useAcceptReq;
