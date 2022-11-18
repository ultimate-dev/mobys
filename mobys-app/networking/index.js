import { API_URL } from "../configs";
import ax from "axios";
import IStore from "../store/instant.store";

const axios = ax.create({
  baseURL: API_URL,
});

axios.interceptors.request.use((config) => {
  return config;
});
export default axios;
