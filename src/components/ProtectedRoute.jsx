import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { userData } = useSelector((state) => state.user);
  if (userData) return children;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
