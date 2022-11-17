import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
// Moment
import moment from "moment";
import "moment/locale/tr";
import TR from "antd/es/locale/tr_TR";
import "moment/locale/de";
import DE from "antd/es/locale/de_DE";
import "moment/locale/da";
import DA from "antd/es/locale/da_DK";
import "moment/locale/es";
import ES from "antd/es/locale/es_ES";
import "moment/locale/fr";
import FR from "antd/es/locale/fr_FR";
import "moment/locale/ar";
import AR from "antd/es/locale/ar_EG";
import "moment/locale/fa";
import FA from "antd/es/locale/fr_CA";
import "moment/locale/en-gb";
import EN from "antd/es/locale/en_GB";

// Locale
import i18n from "i18n";
// Contants
import ROUTES from "constants/routes";
// Store
import IStore from "store/instant.store";
import MStore from "store/main.store";
// Components
import Loading from "components/Loading";
import { ConfigProvider } from "antd";
import RouteElementAuthourity from "components/common/RouteElementAuthourity";

const AntdLocales: any = {
  TR,
  DE,
  DA,
  ES,
  FR,
  AR,
  FA,
  EN,
};

function App() {
  let handle = useFullScreenHandle();

  useEffect(() => {
    if (MStore.locale) {
      i18n.locale = MStore.locale;
      moment.locale(MStore.locale);
      document.documentElement.lang = MStore.locale;
    }
  }, [MStore.locale]);

  useEffect(() => {
    IStore.setFullScreen(handle);
  }, []);

  return (
    <FullScreen handle={handle}>
      <ConfigProvider locale={AntdLocales[MStore.locale]}>
        <Loading />
        <Toaster />
        <ToastContainer />
        <div className="bg-body h-100 w-100">
          <Router>
            <Routes>
              {ROUTES.map((route: any, index: number) => (
                <Route key={index} path={route.path} element={<route.element {...route.props} />}>
                  {route.outlets &&
                    route.outlets.map((outlet: any, index: number) => (
                      <Route
                        key={index}
                        path={route.path + outlet.path}
                        element={<RouteElementAuthourity route={outlet} />}
                      />
                    ))}
                </Route>
              ))}
            </Routes>
          </Router>
        </div>
      </ConfigProvider>
    </FullScreen>
  );
}

export default App;
