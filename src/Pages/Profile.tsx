// Profile.tsx
import React from "react";
import { auth } from "../Auth/firebase";

const Profile: React.FC = () => {
  const user = auth.currentUser;
  console.log(user?.displayName);

  return (
    <div>
      <h2>Welcome, {user?.displayName || user?.email?.substring(0, 3)}</h2>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default Profile;
