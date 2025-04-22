import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../redux/authSlices/loginSlice";

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
      console.log(error);
    }
  };
  return { getMyProfile };
};
export default useGetMyProfile;
