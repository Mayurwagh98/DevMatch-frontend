import axios from "axios";
import { useDispatch } from "react-redux";
import {
  addLoginError,
  addUser,
  requestLogin,
} from "../redux/authSlices/loginSlice";
import { useNavigate } from "react-router-dom";
import errorHandler from "../helpers/errorHandler";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async (signupData) => {
    try {
      dispatch(requestLogin());
      const { data } = await axios.post(
        "http://localhost:8000/auth/signup",
        signupData,
        { withCredentials: true }
      );
      console.log("data:", data);
      dispatch(addUser(data.newUser));
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      dispatch(addLoginError(error.response.data || "something went wrong"));
      errorHandler(error).message;
    }
  };
  return { signup };
};

export default useSignup;
