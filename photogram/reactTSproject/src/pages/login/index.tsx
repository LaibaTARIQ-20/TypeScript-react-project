import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { useUserAuth } from "@/context/userAuthContext";
import { UserLogIn } from "@/types";
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import { Label } from "@/components/ui/label";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

interface ILoginProps {}
const initialValue: UserLogIn = {
  email: "",
  password: "",
};

const Login: React.FunctionComponent<ILoginProps> = () => {
  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();
  const [userLogInInfo, setuserLogInInfo] =
    React.useState<UserLogIn>(initialValue);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("The user info is : ", userLogInInfo);
      await logIn(userLogInInfo.email, userLogInInfo.password);
      navigate("/");
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <img
                src={image2}
              />
              <img
                src={image1}
              />
              <img
                src={image4}
              />
              <img
                src={image3}
              />
            </div>
          </div>
          <div>
            <Card>
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle>
                    PhotoGram
                  </CardTitle>
                  <CardDescription>
                    Enter your email below to create your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <Button variant="outline" onClick={handleGoogleSignIn}>
                      <Icons.google style={{ marginRight: '8px', height: '16px', width: '16px' }} />
                      Google
                    </Button>
                  </div>
                  <div>
                    <div>
                      <span />
                    </div>
                    <div>
                      <span>
                        Or
                      </span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="dipesh@example.com"
                      value={userLogInInfo.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setuserLogInInfo({
                          ...userLogInInfo,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={userLogInInfo.password}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setuserLogInInfo({
                          ...userLogInInfo,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">
                    Login
                  </Button>
                  <p>
                    Don't have an account ? <Link to="/signup">Sign up</Link>
                  </p>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
