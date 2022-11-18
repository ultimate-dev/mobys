import i18n from "i18n";
import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";
import toast from "react-hot-toast";
// Services
import IStore from "store/instant.store";

configure({ enforceActions: "never" });

class SupplierController {
  marbleBlocks: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  get = async () => {
    try {
      IStore.showLoader();
      let { data } = await axios.get(APIS.MARBLES.rawValue);
      IStore.hideLoader();
      if (!data.error) this.marbleBlocks = <any[]>data.marbleBlocks;
    } catch (err) {}
    return [];
  };
}

export default SupplierController;
