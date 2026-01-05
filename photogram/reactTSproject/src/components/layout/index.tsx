import * as React from "react";
import Sidebar from "../sidebar";
import UserList from "../userList";
import { Box } from "@mui/material";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Box component="aside" sx={{ width: 250, borderRight: 1, borderColor: 'divider' }}>
        <Sidebar />
      </Box>
      <Box component="main" sx={{ flex: 1, overflow: 'auto' }}>
        {children}
      </Box>
      <Box component="aside" sx={{ width: 300, borderLeft: 1, borderColor: 'divider' }}>
        <UserList />
      </Box>
    </Box>
  );
};

export default Layout;
