import { makeAutoObservable, configure } from "mobx";
import { Socket } from "socket.io-client";

configure({ enforceActions: "never" });
class InstantStoreC {
  loading: boolean = false;
  socket: Socket | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Loading
  showLoading = () => (this.loading = true);
  hideLoading = () => (this.loading = false);
  // Socket
  setSocket = (socket: Socket) => (this.socket = socket);
}

const IStore = new InstantStoreC();

export default IStore;
