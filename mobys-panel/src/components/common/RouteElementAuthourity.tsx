import i18n from "i18n";
import { observer } from "mobx-react-lite";
import ErrorPage from "pages/error.page";
import IStore from "store/instant.store";

const RouteElementAuthourity = ({ route }: { route: any }) => {
  if (!route.roles || (route.roles && IStore.user)) {
    if (!route.roles || route.roles.length == 0 || route.roles.includes(IStore.user?.role))
      return <route.element {...route.props} />;
    else return <ErrorPage code={404} text={i18n.t("error.404")} />;
  } else return null;
};

export default observer(RouteElementAuthourity);
