import i18n from "i18n";
import { UserRole } from "./statuses";
// Layouts
import AuthLayout from "layouts/auth.layout";
import DefaultLayout from "layouts/default.layout";
// Pages
import ErrorPage from "pages/error.page";
import LoginPage from "pages/Auth/login.page";
import RegisterPage from "pages/Auth/register.page";
import AccountPage from "pages/account.page";

import DashboardPage from "pages/dashboard.page";

const ROUTES: any[] = [
  {
    path: "/auth",
    element: AuthLayout,
    props: {},
    outlets: [
      {
        path: "/login",
        element: LoginPage,
        props: {},
      },
      {
        path: "/register",
        element: RegisterPage,
        props: {},
      },
    ],
  },
  {
    path: "",
    element: DefaultLayout,
    props: {},
    outlets: [
      {
        path: "/",
        element: DashboardPage,
        props: {},
        roles: [],
      },
      {
        path: "/account",
        element: AccountPage,
        props: {},
        roles: [],
      },
    ],
  },
  {
    path: "/*",
    element: ErrorPage,
    props: { code: 404, text: i18n.t("error.404") },
  },
];

export default ROUTES;
