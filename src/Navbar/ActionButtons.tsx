import { useAuth } from "@/Auth/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const Avatars = () => {
  const { logout } = useAuth();
  const handleUserLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem onClick={handleUserLogout}>Log Out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
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
  return <Button variant={"outline"}>SignUp</Button>;
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
