import i18n from "i18n";
import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";
import toast from "react-hot-toast";
// Services
import UploadService from "services/upload.service";
import IStore from "store/instant.store";

configure({ enforceActions: "never" });
class ChangeType {
  current: string;
  new: string;
  newTry: string;
}
class AccountController {
  constructor() {
    makeAutoObservable(this);
  }

  update = async (account: any, cb?: (err: boolean) => void) => {
    try {
      IStore.showLoader();
      let { data } = await axios.post(APIS.ACCOUNT.rawValue, { ...account }).then((res) => {
        !res.data.error && toast.success(i18n.t("success.UPDATED"));
        return res;
      });
      cb && cb(data.error);
      IStore.hideLoader();
    } catch (err) {}
  };
  updateEmail = async (values: ChangeType, cb?: (err: boolean) => void) => {
    try {
      IStore.showLoader();
      let { data } = await axios.post(APIS.ACCOUNT_EMAIL.rawValue, { ...values }).then((res) => {
        !res.data.error && toast.success(i18n.t("success.UPDATED"));
        return res;
      });
      cb && cb(data.error);
      IStore.hideLoader();
    } catch (err) {}
  };
  updatePassword = async (values: ChangeType, cb?: (err: boolean) => void) => {
    try {
      IStore.showLoader();
      let { data } = await axios.post(APIS.ACCOUNT_PASSWORD.rawValue, { ...values }).then((res) => {
        !res.data.error && toast.success(i18n.t("success.UPDATED"));
        return res;
      });
      cb && cb(data.error);
      IStore.hideLoader();
    } catch (err) {}
  };
}

export default AccountController;
