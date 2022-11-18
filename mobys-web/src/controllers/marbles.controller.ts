import i18n from "i18n";
import { configure, makeAutoObservable } from "mobx";
// Networking
import axios, { APIS } from "networking";
import toast from "react-hot-toast";
import UploadService from "services/upload.service";
// Services
import IStore from "store/instant.store";

configure({ enforceActions: "never" });

class SupplierController {
  marbleBlocks: any[] = [];
  marbleBlock: any = null;
  constructor() {
    makeAutoObservable(this);
  }
  setMarbleBlock = (marbleBlock: any) => (this.marbleBlock = marbleBlock);
  get = async () => {
    try {
      IStore.showLoader();
      let { data } = await axios.get(APIS.MARBLES.rawValue);
      IStore.hideLoader();
      if (!data.error) this.marbleBlocks = <any[]>data.marbleBlocks;
    } catch (err) {}
    return [];
  };

  create = async (marbleBlock: any, cb?: () => void) => {
    try {
      IStore.showLoader();
      let images: any = {};
      images.top = await UploadService(marbleBlock.top);
      images.bottom = await UploadService(marbleBlock.bottom);
      images.left = await UploadService(marbleBlock.left);
      images.right = await UploadService(marbleBlock.right);
      images.front = await UploadService(marbleBlock.front);
      images.back = await UploadService(marbleBlock.back);

      await axios
        .put(APIS.MARBLES.rawValue, {
          x: marbleBlock.x,
          y: marbleBlock.y,
          z: marbleBlock.z,
          weight: marbleBlock.weight,
          images,
        })
        .finally(() => toast.success(i18n.t("success.CREATED")));
      cb && cb();
      IStore.hideLoader();
    } catch (err) {}
  };
  update = async (marbleBlock: any, cb?: () => void) => {
    try {
      IStore.showLoader();
      let images: any = {};
      images.top = await UploadService(marbleBlock.top);
      images.bottom = await UploadService(marbleBlock.bottom);
      images.left = await UploadService(marbleBlock.left);
      images.right = await UploadService(marbleBlock.right);
      images.front = await UploadService(marbleBlock.front);
      images.back = await UploadService(marbleBlock.back);
      await axios
        .post(APIS.MARBLE.value(marbleBlock.id), {
          x: marbleBlock.x,
          y: marbleBlock.y,
          z: marbleBlock.z,
          weight: marbleBlock.weight,
          images,
        })
        .finally(() => toast.success(i18n.t("success.UPDATED")));
      cb && cb();
      IStore.hideLoader();
    } catch (err) {}
  };
  delete = async (marbleBlock: any, cb?: () => void) => {
    try {
      IStore.showLoader();
      await axios
        .delete(APIS.MARBLE.value(marbleBlock.id))
        .finally(() => toast.success(i18n.t("success.DELETED")));
      cb && cb();
      IStore.hideLoader();
    } catch (err) {}
  };
}

export default SupplierController;
