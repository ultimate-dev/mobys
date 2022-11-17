import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
// Components
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import MStore from "store/main.store";
// Controllers
import AuthController from "controllers/auth.controller";

const DefaultLayout = () => {
  let navigate = useNavigate();
  let [c] = useState(new AuthController(navigate));

  useEffect(() => {
    c.verifyAuth(MStore.token);
  }, []);

  if (MStore.token)
    return (
      <>
        <div id="layout-wrapper">
          <Navbar />
          <Sidebar />
          <div className="main-content">
            <div className="page-content">
              <Container fluid>
                <Outlet />
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  else return null;
};

export default DefaultLayout;
