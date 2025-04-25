import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../redux/authSlices/loginSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import errorHandler from "../helpers/errorHandler";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      await axios.post(
        BASE_URL + "/auth/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (error) {
      errorHandler(error).message;
    }
  };

  return { logoutUser };
};

export default useLogout;
