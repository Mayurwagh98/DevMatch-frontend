import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { userData, isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    // Only redirect if we're not loading AND there's no user data
    if (!isLoading && !userData) {
      navigate("/login");
    }
  }, [userData, isLoading, navigate]);

  // Show loading while we're still determining auth state
  if (isLoading || (!userData && !isLoading)) {
    return <div>Loading...</div>;
  }

  return children;
};

export default ProtectedRoute;
