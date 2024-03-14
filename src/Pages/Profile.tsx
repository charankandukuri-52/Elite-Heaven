import { useAuth } from "@/Auth/AuthContext";
import { useState, useEffect } from "react";
import photo from "../assets/menu-background.jpeg";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const { user } = useAuth();
  const [userName, setUserName] = useState<string | null>(null);
  console.log(user);
  const [intro, setIntro] = useState("");

  useEffect(() => {
    if (user) {
      const indexOfAtSymbol = user.email.indexOf("@"); // Find the index of '@' symbol in the email
      if (indexOfAtSymbol !== -1) {
        // If '@' symbol exists in the email
        const username = user.email.substring(0, indexOfAtSymbol); // Extract username from email
        setUserName(username);
      }
    }
  }, [user]);

  return (
    <>
      <div className="Profile-page grid grid-cols-2">
        <div className="left-content border-r-gray-300 h-[80vh] mt-20 border-r-2 border-opacity-50">
          <h1 className="text-3xl justify-center flex items-center">
            About Me
          </h1>
          <div className="left-top mx-10 flex items-center gap-10">
            <div className="w-40 h-40 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover"
                src={photo}
                alt="Avatar"
              />
            </div>
            <div className="Intros">
              <h1 className="text-3xl">I am , {userName}</h1>
              <div className=" mt-10 w-[60%] min-h-[60%] text-wrap">
                <h1>{intro}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="Intro-change mt-20 w-[60%] mx-10">
            <Label htmlFor="intro" className="text-3xl">
              About{" "}
            </Label>
            <Textarea
              id="intro"
              placeholder="Edit Your Intro Here"
              className="mt-10"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
