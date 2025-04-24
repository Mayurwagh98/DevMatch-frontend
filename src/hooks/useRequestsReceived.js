import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addConnectionRequests,
  requestConnectionRequests,
} from "../redux/requests/requestsSlice";

const useRequestsReceived = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    requestsReceived();
  }, []);
  const requestsReceived = async () => {
    try {
      dispatch(requestConnectionRequests());
      const { data } = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log("data:", data);
      dispatch(addConnectionRequests(data));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export default useRequestsReceived;
