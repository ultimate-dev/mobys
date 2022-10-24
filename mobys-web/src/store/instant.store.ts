import { makeAutoObservable, configure } from "mobx";
import { Socket } from "socket.io-client";

configure({ enforceActions: "never" });
class InstantStoreC {
  loading: boolean = false;
  socket: Socket | null = null;
  user: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Loading
  showLoading = () => (this.loading = true);
  hideLoading = () => (this.loading = false);
  // Socket
  setSocket = (socket: Socket) => (this.socket = socket);
  // User
  setUser = (user: any) => (this.user = user);
  clearUser = () => (this.user = null);
}

const IStore = new InstantStoreC();

export default IStore;
