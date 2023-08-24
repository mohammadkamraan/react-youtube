import Axios from "axios";

import { API_KEY } from "../constants/constants";

export const axiosInstance = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: API_KEY,
  },
});
