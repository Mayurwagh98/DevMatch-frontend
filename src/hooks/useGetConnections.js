import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const useGetConnections = () => {
  useEffect(() => {
    getMyConnections();
  }, []);
  const getMyConnections = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/user/my_connections", {
        withCredentials: true,
      });
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export default useGetConnections;
