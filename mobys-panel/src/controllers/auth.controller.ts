import { configure, makeAutoObservable } from "mobx";
import toast from "react-hot-toast";
// Locale
import i18n from "i18n";
// Networking
import axios, { APIS } from "networking";
// Store
import MStore from "store/main.store";
import IStore from "store/instant.store";

const initialLogin = {
  email: "",
  password: "",
  rememberme: false,
};

configure({ enforceActions: "never" });

class AuthController {
  navigate: any;
  login: { email: string; password: string; rememberme: boolean } =
    MStore.remember || initialLogin;

  constructor(navigate: any) {
    this.navigate = navigate;
    makeAutoObservable(this);
  }

  setLogin = (login: { email: string; password: string; rememberme: boolean }) =>
    (this.login = login);

  controlRememberMe = () => {
    if (
      MStore.remember &&
      MStore.remember.email == this.login.email &&
      MStore.remember.password == this.login.password
    )
      return true;
    else return false;
  };
  onRememberMe = () => {
    if (this.login.rememberme) MStore.setRemember(this.login);
    else if (!this.login.rememberme && MStore.remember) MStore.setRemember(null);
  };

  onLogin = async (login: { email: string; password: string }) => {
    try {
      IStore.showLoading();
      let { data } = await axios.post(APIS.AUTH_LOGIN.rawValue, { ...login });
      IStore.hideLoading();
      if (!data.error) {
        MStore.setToken(data.token);
        IStore.setUser(data.user);
        this.onRememberMe();
        this.navigate("/");
      } else {
        toast.error(i18n.t("auth.notFoundUser"));
      }
    } catch (err) {}
  };

  enterDown = (e: any) =>
    (e.code === "Enter" || e.code === "NumpadEnter") && this.onLogin(this.login);

  verifyAuth = async (token: string | null) => {
    try {
      let { data } = await axios.post(APIS.AUTH_VERIFY.rawValue, { token });
      if (!data.error) {
        IStore.setUser(data.user);
      } else {
        this.navigate("/auth/login");
      }
    } catch (err) {}
  };
}

export default AuthController;
