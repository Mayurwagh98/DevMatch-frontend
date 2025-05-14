import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeRequest } from "../redux/requests/requestsSlice";
import errorHandler from "../helpers/errorHandler";

const useAcceptReq = () => {
  const dispatch = useDispatch();
  const handleRequest = async (status, requestId) => {
    try {
      const { data } = await axios.post(
        BASE_URL + `/request/review/${status}/${requestId}`,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(requestId));
    } catch (error) {
      errorHandler(error).message;
    }
  };

  return { handleRequest };
};

export default useAcceptReq;
