import { API_URL } from "constants/configs";
import ax from "axios";
import toast from "react-hot-toast";
// @ts-ignore
import { Service } from "axios-middleware";
// APIS
import APIS from "./API";
// Store
import MStore from "store/main.store";
// i18N
import i18n from "i18n";

const service = new Service(ax);

service.register({
  onRequest(config: any) {
    return config;
  },
  onSync(promise: any) {
    return promise;
  },
  onResponse(response: any) {
    const data = JSON.parse(response.data);
    if (data.error == true) {
      toast.error(i18n.t("error.UNEXPECTED"), { id: "error" });
    }

    return response;
  },
});

const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(
  (config: any) => {
    config.headers.common["authorization"] = `Bearer ${MStore.token}`;
    return config;
  },
  (error: any) => {
    toast.error(i18n.t("error.UNEXPECTED"), { id: "error" });
    return Promise.reject(error);
  }
);
export { APIS };
export default axios;
