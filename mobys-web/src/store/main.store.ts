import { makeAutoObservable, configure } from "mobx";
import { create, persist } from "mobx-persist";

configure({ enforceActions: "never" });

const initialLocale = String(window.navigator.language).split("-")[0].toUpperCase();

class MainStoreC {
  @persist token: string | null = null;
  @persist locale: string = initialLocale;
  @persist("object") remember: {
    email: string;
    password: string;
    rememberme: boolean;
  } | null = null;

  constructor() {
    makeAutoObservable(this);
  }
  // Token
  setToken = (token: string) => {
    this.token = token;
  };
  clearToken = () => (this.token = null);
  // i18n
  setLocale = (locale: string) => {
    this.locale = locale;
    window.location.reload();
  };
  // Remember
  setRemember = (remember: { email: string; password: string; rememberme: boolean } | null) =>
    (this.remember = remember);
}

const hydrate = create({});

const MStore = new MainStoreC();

hydrate("MainStore", MStore).then(() => {
  console.log("MainStore hydrated");
});

export default MStore;
