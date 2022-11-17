import axios, { APIS } from "networking";

const UploadService = async (file: any) => {
  let formData = new FormData();
  formData.append("file", file);
  let path = await axios.post(APIS.UPLOAD.rawValue, formData).then((res) => res.data);
  return path;
};
export default UploadService;
