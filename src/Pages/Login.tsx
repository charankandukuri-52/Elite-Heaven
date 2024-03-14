import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/Auth/AuthContext";
import Profile from "./Profile";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // Import signInWithEmailAndPassword from firebase
import { auth } from "@/Auth/firebase";

const Login = () => {
  const { user, googleSignIn, logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password); // Use signInWithEmailAndPassword from firebase
      // Redirect or perform any other actions after successful sign-in
    } catch (e) {
      alert(e);
      // Type assertion for error.message
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {user ? (
        <Profile />
      ) : (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignIn}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between ">
                    <Button type="submit">Login</Button>
                    <Button variant="outline">Register</Button>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              {user ? (
                <Button className="flex gap-2" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    className="flex gap-2 justify-center items-center"
                    onClick={handleGoogleLogin}
                  >
                    {" "}
                    <FaGoogle /> Sign In with Google
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default Login;
