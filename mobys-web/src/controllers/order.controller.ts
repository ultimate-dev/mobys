import i18n from "i18n";
import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";
import toast from "react-hot-toast";
// Services
import IStore from "store/instant.store";

configure({ enforceActions: "never" });

class SupplierController {
  orders: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  get = async () => {
    try {
      IStore.showLoader();
      let { data } = await axios.get(
        APIS.ORDERS.rawValue + (IStore.user.company.type == "CUSTOMER" ? "?customer=true" : "")
      );
      IStore.hideLoader();
      if (!data.error) this.orders = <any[]>data.orders;
    } catch (err) {}
    return [];
  };
}

export default SupplierController;
