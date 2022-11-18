import i18n from "i18n";
import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";
// Services
import IStore from "store/instant.store";

configure({ enforceActions: "never" });

class SupplierController {
  suppliers: any[] = [];
  supplier: any = null;
  constructor() {
    makeAutoObservable(this);
  }
  get = async () => {
    try {
      IStore.showLoader();
      let { data } = await axios.get(APIS.SUPPLIERS.rawValue);
      IStore.hideLoader();
      if (!data.error) this.suppliers = <any[]>data.suppliers;
    } catch (err) {}
    return [];
  };
  getSupplier = async (id: number) => {
    try {
      IStore.showLoader();
      let { data } = await axios.get(APIS.SUPPLIER.value(id));
      IStore.hideLoader();
      if (!data.error) this.supplier = <any[]>data.supplier;
    } catch (err) {}
    return null;
  };
}

export default SupplierController;
