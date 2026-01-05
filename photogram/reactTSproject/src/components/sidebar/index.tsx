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
const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  const { pathname } = useLocation();
  const { logOut } = useUserAuth();
  return (
    <nav>
      <div>
        <div>PhotoGram</div>
      </div>
      {navItems.map((item) => (
        <div
          key={item.name}
        >
          <Link to={item.link}>
            <span>
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  filter: `${
                    pathname === item.link ? "invert(0)" : "invert(1)"
                  }`,
                }}
              />
            </span>
            <span>{item.name}</span>
          </Link>
        </div>
      ))}
      <div>
        <Link to="/login" onClick={logOut}>
          <span>
            <img
              src={logoutIcon}
              alt="Logout"
              style={{
                filter: `${pathname === "/login" ? "invert(0)" : "invert(1)"}`,
              }}
            />
          </span>
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
