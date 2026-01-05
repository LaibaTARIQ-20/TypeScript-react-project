import Layout from "@/components/layout";
import * as React from "react";
import { Box, Typography } from "@mui/material";

interface IProfileProps {}

const Profile: React.FunctionComponent<IProfileProps> = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Profile</Typography>
      </Box>
    </Layout>
  );
};

export default Profile;
