import * as React from "react";
import homeIcon from "@/assets/icons/home.svg";
import addIcon from "@/assets/icons/add.svg";
import directIcon from "@/assets/icons/direct.svg";
import logoutIcon from "@/assets/icons/logout.svg";
import myphotoIcon from "@/assets/icons/myphotos.svg";
import settingsIcon from "@/assets/icons/settings.svg";
import notificationIcon from "@/assets/icons/notification.svg";
import profileIcon from "@/assets/icons/profile.svg";
import { Link, useLocation } from "react-router-dom";
import { useUserAuth } from "@/context/userAuthContext";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

interface ISidebarProps {}

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: homeIcon,
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: addIcon,
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: myphotoIcon,
  },
  {
    name: "Profile",
    link: "/profile",
    icon: profileIcon,
  },
  {
    name: "Notifications",
    link: "#",
    icon: notificationIcon,
  },
  {
    name: "Direct",
    link: "#",
    icon: directIcon,
  },
  {
    name: "Settings",
    link: "#",
    icon: settingsIcon,
  },
];
const Sidebar: React.FunctionComponent<ISidebarProps> = () => {
  const { pathname } = useLocation();
  const { logOut } = useUserAuth();
  return (
    <Box component="nav" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
          PhotoGram
        </Typography>
      </Box>
      <List sx={{ flex: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              selected={pathname === item.link}
            >
              <ListItemIcon>
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.name}
                  sx={{
                    width: 24,
                    height: 24,
                    filter: pathname === item.link ? "invert(0)" : "invert(1)",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/login" onClick={logOut}>
            <ListItemIcon>
              <Box
                component="img"
                src={logoutIcon}
                alt="Logout"
                sx={{
                  width: 24,
                  height: 24,
                  filter: pathname === "/login" ? "invert(0)" : "invert(1)",
                }}
              />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;
