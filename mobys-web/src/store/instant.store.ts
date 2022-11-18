import { makeAutoObservable, configure } from "mobx";
import { Socket } from "socket.io-client";

configure({ enforceActions: "never" });
class InstantStoreC {
  loading: boolean = false;
  loader: number | boolean = false;
  fullScreen: any = null;
  user: any | null = null;
  socket: Socket | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Loading
  showLoading = () => (this.loading = true);
  hideLoading = () => (this.loading = false);
  showLoader = (int?: number) => (this.loader = int ? int : true);
  hideLoader = () => (this.loader = false);
  // App
  setFullScreen = (handle: any) => (this.fullScreen = handle);
  // User
  setUser = (user: any) => (this.user = user);
  clearUser = () => (this.user = null);
  // Socket
  setSocket = (socket: Socket) => (this.socket = socket);
}

const IStore = new InstantStoreC();

export default IStore;
