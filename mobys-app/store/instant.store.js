import { makeAutoObservable, configure } from "mobx";

configure({ enforceActions: "never" });
class InstantStoreC {
  loading = false;
  user = null;
  token = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Loading
  showLoading = () => (this.loading = true);
  hideLoading = () => (this.loading = false);
  // User
  setUser = (user) => (this.user = user);
  clearUser = () => (this.user = null);
  // User
  setToken = (token) => (this.token = token);
  clearToken = () => (this.token = null);
}

const IStore = new InstantStoreC();

export default IStore;
