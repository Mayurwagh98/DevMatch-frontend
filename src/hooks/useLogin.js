import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, requestLogin } from "../redux/authSlices/loginSlice";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const login = async (loginData) => {
    try {
      dispatch(requestLogin());
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        loginData,
        { withCredentials: true }
      );
      dispatch(addUser(data.sanitizedUser));
      if (data.success) {
        navigate("/");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return { login };
};

export default useLogin;
