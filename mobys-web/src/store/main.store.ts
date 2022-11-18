import { makeAutoObservable, configure } from "mobx";
import { create, persist } from "mobx-persist";
// i18n
import { browserLocale } from "i18n";

configure({ enforceActions: "never" });

class MainStoreC {
  @persist token: string | null = null;
  @persist locale: string = browserLocale;
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
