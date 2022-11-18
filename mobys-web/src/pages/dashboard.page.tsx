import Breadcrumb from "components/common/Breadcrumb";
import i18n from "i18n";

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb title={i18n.t("routes.dashboard")} />
    </>
  );
};
export default DashboardPage;
