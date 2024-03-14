import { useAuth } from "@/Auth/AuthContext";
import { useState, useEffect } from "react";

const Profile = () => {
  const { user } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      setUserName(user.displayName);
    }
  }, [user]);

  return (
    <>
      <h1>Hello, {userName}</h1>
    </>
  );
};

export default Profile;
