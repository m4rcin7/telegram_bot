const axios = require("axios");
const MY_TOKEN = process.env.MY_TOKEN;

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

function getAxiosInstance() {
  return axios.get(`/${method}`, {
    baseURL: BASE_URL,
    params,
  });
}
