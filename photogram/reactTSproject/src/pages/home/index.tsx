import Layout from "@/components/layout";
import * as React from "react";
import { Box, Typography } from "@mui/material";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Home</Typography>
      </Box>
    </Layout>
  );
};

export default Home;
