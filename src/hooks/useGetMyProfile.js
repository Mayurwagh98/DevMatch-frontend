import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addUser, requestLogin } from "../redux/authSlices/loginSlice";

import { useNavigate } from "react-router-dom";

const useGetMyProfile = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const getMyProfile = async () => {
    if (userData) return;
    try {
      dispatch(requestLogin());
      const { data } = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
    }
  };
  return { getMyProfile };
};
export default useGetMyProfile;
