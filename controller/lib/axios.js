const axios = require("axios");
const MY_TOKEN = process.env.MY_TOKEN;

const BASE_URL = `https://api.telegram.org/bot${MY_TOKEN}`;

const axiosInstance = axios.create({ baseURL: BASE_URL });

function get(method, params) {
  return axiosInstance.get(`/${method}`, { params });
}

function post(method, data) {
  return axiosInstance.post(`/${method}`, data);
}

module.exports = { get, post };
