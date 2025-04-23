import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlices/feedSlice";

const useGetMyFeed = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((state) => state.feed);

  useEffect(() => {
    if (feed) return;
    getMyFeed();
  }, []);
  const getMyFeed = async () => {
    try {
      const { data } = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(data));
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  };
};

export default useGetMyFeed;
