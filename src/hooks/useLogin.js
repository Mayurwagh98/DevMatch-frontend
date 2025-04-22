import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, requestLogin } from "../redux/authSlices/loginSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const login = async (loginData) => {
    try {
      dispatch(requestLogin());
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        loginData,
        { withCredentials: true }
      );
      console.log("data:", data);
      dispatch(addUser(data));
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  };
  return { login };
};

export default useLogin;
