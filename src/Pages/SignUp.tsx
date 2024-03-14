import BrandName from "@/Navbar/BrandName";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoCaretBackOutline } from "react-icons/io5";
const SignUp = () => {
  return (
    <>
      <div className="mt-10 cursor-pointer flex md:gap-5 py-5 mx-10">
        <a href="/" className="">
          <IoCaretBackOutline size={"37px"} />
        </a>
        <a href="/">
          <BrandName />
        </a>
      </div>
      <div className="w-[100vw] h-[80vh] flex justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" placeholder="John Doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="password.123"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirm-password"
                    placeholder="password.123"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Login</Button>
            <Button variant="outline">Register</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default SignUp;
