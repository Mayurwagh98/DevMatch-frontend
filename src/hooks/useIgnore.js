import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../redux/feedSlices/feedSlice";

const useIgnore = () => {
  const dispatch = useDispatch();
  const handleIgnore = async (status, recevierId) => {
    try {
      const { data } = await axios.post(
        BASE_URL + `/request/send/${status}/${recevierId}`,
        {},
        { withCredentials: true }
      );
      console.log("data:", data);
      dispatch(removeUserFromFeed(recevierId));
    } catch (error) {
      console.log("error:", error);
    }
  };

  return { handleIgnore };
};

export default useIgnore;
