import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../redux/authSlices/loginSlice";
import errorHandler from "../helpers/errorHandler";

const useGetMyProfile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const getMyProfile = async () => {
    if (userData) return;
    try {
      const { data } = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(data));
    } catch (error) {
      errorHandler(error).message;
    }
  };
  return { getMyProfile };
};
export default useGetMyProfile;
