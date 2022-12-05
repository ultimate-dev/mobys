import ax from "axios";

const axios = ax.create({
  baseURL: process.env.SERVICE_URL,
});

axios.interceptors.request.use((config) => {
  return config;
});

const imageService = async (image: string) => {
  try {
    let { data } = await axios.get("/image", { params: { img_url: image } });
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
  return null;
};

export default { imageService };
