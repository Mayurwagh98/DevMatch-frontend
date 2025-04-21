const useLogin = () => {
  const login = async (loginData) => {
    try {
      const { data } = await axios.post("/login", loginData);
      console.log("data:", data);
    } catch (error) {
      console.log("error:", error);
      throw new Error(error);
    }
  };
  return { login };
};

export default useLogin;
