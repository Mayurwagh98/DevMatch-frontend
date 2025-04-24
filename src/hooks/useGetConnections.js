import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addConnections,
  requestConnnections,
} from "../redux/connections/connectionsSlice";

const useGetConnections = () => {
  const dispatch = useDispatch();
  const { connections } = useSelector((state) => state.connections);
  useEffect(() => {
    if (connections) return;
    getMyConnections();
  }, []);
  const getMyConnections = async () => {
    dispatch(requestConnnections());
    try {
      const { data } = await axios.get(BASE_URL + "/user/my_connections", {
        withCredentials: true,
      });
      dispatch(addConnections(data));
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export default useGetConnections;
