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
const SignUp = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center">
        <Card className="w-[550px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
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
