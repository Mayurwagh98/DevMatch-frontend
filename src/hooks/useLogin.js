import axios from "axios";

const useLogin = () => {
  const login = async (loginData) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/auth/login",
        loginData,
        { withCredentials: true }
      );
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  };
  return { login };
};

export default useLogin;
