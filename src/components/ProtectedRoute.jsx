import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const { userData, isLoading: loading } = useSelector((state) => state.user);
  const [authChecked, setAuthChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set a timeout to ensure we don't wait forever for Redux
    const timer = setTimeout(() => {
      setAuthChecked(true);
    }, 1000); // Allow 1 second for Redux to load

    return () => clearTimeout(timer);
  }, []);

  // Wait for both conditions: auth check complete AND Redux not loading
  if (!authChecked || loading) {
    return <div>Checking authentication...</div>;
  }

  if (!userData) {
    // Preserve the intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
