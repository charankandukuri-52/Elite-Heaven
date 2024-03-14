import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProfileAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the children
  return <>{children}</>;
};

export default ProfileAuth;
