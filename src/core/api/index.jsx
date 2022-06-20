import axios from "axios";

const axiosConfig = {
  baseURL: "https://gorest.co.in/public/v2/",
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

const API = instance;

export { API };
