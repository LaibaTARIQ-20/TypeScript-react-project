import * as React from "react";
import Sidebar from "../sidebar";
import UserList from "../userList";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <div>{children}</div>
      <aside>
        <UserList />
      </aside>
    </div>
  );
};

export default Layout;
