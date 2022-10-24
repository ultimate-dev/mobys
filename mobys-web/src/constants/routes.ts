import i18n from "i18n";
// Layouts
import AuthLayout from "layouts/auth.layout";
import DefaultLayout from "layouts/default.layout";
// Pages
import ErrorPage from "pages/error.page";
import LoginPage from "pages/login.page";
import HomePage from "pages/home.page";
import BlankPage from "pages/blank.page";

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
    ],
  },
  {
    path: "",
    element: DefaultLayout,
    props: {},
    outlets: [
      {
        path: "/",
        element: HomePage,
        props: {},
      },
      {
        path: "/blank",
        element: BlankPage,
        props: {},
      },
    ],
  },
  {
    path: "/*",
    element: ErrorPage,
    props: { code: 404, text: 404 },
  },
];

export default ROUTES;
