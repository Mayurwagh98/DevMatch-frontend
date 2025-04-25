import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addConnectionRequests,
  requestConnectionRequests,
} from "../redux/requests/requestsSlice";
import errorHandler from "../helpers/errorHandler";

const useRequestsReceived = () => {
  const dispatch = useDispatch();
  const { requests } = useSelector((state) => state.requests);
  useEffect(() => {
    requestsReceived();
  }, []);
  const requestsReceived = async () => {
    try {
      dispatch(requestConnectionRequests());
      const { data } = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addConnectionRequests(data));
    } catch (error) {
      errorHandler(error).message;
    }
  };

  return { requests };
};

export default useRequestsReceived;
