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
import { Box, Container, Grid, Divider, Stack, Typography } from "@mui/material";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <Box sx={{ bgcolor: 'grey.800', width: '100%', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 3, height: '100%', display: 'flex' }}>
        <Grid container spacing={4} sx={{ alignItems: 'center', height: '100%' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
              <Box
                component="img"
                src={image2}
                sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
              />
              <Box
                component="img"
                src={image1}
                sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
              />
              <Box
                component="img"
                src={image4}
                sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
              />
              <Box
                component="img"
                src={image3}
                sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 500, mx: 'auto' }}>
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
                  <Stack spacing={3}>
                    <Button variant="outline" onClick={handleGoogleSignIn} fullWidth>
                      <Icons.google style={{ marginRight: '8px', height: '16px', width: '16px' }} />
                      Google
                    </Button>
                    <Divider>
                      <Typography variant="body2" color="text.secondary">
                        Or
                      </Typography>
                    </Divider>
                    <Box>
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
                    </Box>
                    <Box>
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
                    </Box>
                  </Stack>
                </CardContent>
                <CardFooter sx={{ flexDirection: 'column', alignItems: 'stretch', gap: 2 }}>
                  <Button type="submit" fullWidth>
                    Login
                  </Button>
                  <Typography variant="body2" textAlign="center">
                    Don't have an account ? <Link to="/signup" style={{ color: '#1976d2' }}>Sign up</Link>
                  </Typography>
                </CardFooter>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
