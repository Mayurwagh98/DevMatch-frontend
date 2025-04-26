import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addLoginError,
  addUser,
  requestLogin,
} from "../redux/authSlices/loginSlice";
import { useNavigate } from "react-router-dom";
import errorHandler from "../helpers/errorHandler";
import { BASE_URL } from "../utils/constants";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (loginData) => {
    try {
      dispatch(requestLogin());
      const { data } = await axios.post(BASE_URL + "/auth/login", loginData, {
        withCredentials: true,
      });
      dispatch(addUser(data.sanitizedUser));
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      dispatch(addLoginError(error.response.data || "something went wrong"));
      errorHandler(error).message;
    }
  };
  return { login };
};

export default useLogin;
