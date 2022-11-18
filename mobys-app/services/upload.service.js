import axios from "../networking";

const UploadService = async (file) => {
  let formData = new FormData();
  formData.append("file", file);
  let path = await axios.post("upload", formData).then((res) => res.data);
  return path;
};
export default UploadService;
