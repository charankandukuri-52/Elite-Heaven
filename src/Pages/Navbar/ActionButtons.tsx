import { useAuth } from "@/Auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Avatars = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { logout } = useAuth();
  const handleUserLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@EliteHeaven"
              />
              <AvatarFallback>EH</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem onClick={handleUserLogout}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage
                src="https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_16.png"
                alt="@EliteHeaven"
              />
              <AvatarFallback>EH</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => navigate("/register")}>
              Sign Up
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => navigate("/login")}>
              Log In
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};

const Loginbtn = () => {
  return (
    <Button>
      <a href="/login">Login</a>
    </Button>
  );
};
const SignUpbtn = () => {
  return (
    <Button variant={"outline"}>
      {" "}
      <a href="/register">Sign Up</a>
    </Button>
  );
};

const ActionButtons = () => {
  return (
    <div className="md:flex gap-2 hidden ">
      <SignUpbtn />
      <Loginbtn />
      <Avatars />
    </div>
  );
};
export default ActionButtons;
