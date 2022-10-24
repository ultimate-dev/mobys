import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { observer } from "mobx-react-lite";
// Moment
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/de";
import "moment/locale/da";
import "moment/locale/es";
import "moment/locale/fr";
import "moment/locale/ar";
import "moment/locale/fa";
import "moment/locale/en-gb";
// Store
import MStore from "store/main.store";
import IStore from "store/instant.store";
// Constants
import ROUTES from "constants/routes";
// i18n
import i18n from "i18n";
// Components
import Loading from "components/Loading";
// Hooks
import useNetworkConnection from "hooks/useNetworkConnection";
// Services
import { socket } from "services/socket.service";

function App() {
  IStore.setSocket(socket);
  useEffect(() => {
    if (MStore.locale) {
      i18n.locale = MStore.locale;
      moment.locale(MStore.locale);
      document.documentElement.lang = MStore.locale;
    }
  }, [MStore.locale]);

  let { isOnline } = useNetworkConnection();
  useEffect(() => {
    if (!isOnline) console.log("Offline");
    else console.log("Online");
  }, [isOnline]);

  IStore.socket?.on("connect", () => {
    console.log("Connected");
  });
  IStore.socket?.on("disconnect", () => {
    console.log("Disconnected");
  });

  return (
    <div>
      <Loading />
      <Toaster />
      <ToastContainer />
      <div>
        <Router>
          <Routes>
            {ROUTES.map((route: any, index: number) => (
              <Route key={index} path={route.path} element={<route.element {...route.props} />}>
                {route.outlets &&
                  route.outlets.map((outlet: any, index: number) => (
                    <Route
                      key={index}
                      path={route.path + outlet.path}
                      element={<outlet.element {...outlet.props} />}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default observer(App);
