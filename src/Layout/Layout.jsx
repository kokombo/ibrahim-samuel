import { Outlet } from "react-router-dom";
import { Navbar, Footer, Sidebar, Icons } from "../components";

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
