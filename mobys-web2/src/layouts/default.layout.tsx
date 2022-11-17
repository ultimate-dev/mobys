import { Outlet } from "react-router-dom";
// Components
import Footer from "components/Footer";
import Navbar from "components/Navbar";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default DefaultLayout;
