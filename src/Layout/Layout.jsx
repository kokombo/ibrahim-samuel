import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, Icons } from "../components";
import { Footer } from "../container";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Icons />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
