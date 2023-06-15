import Axios from "axios";

import { API_HOST, API_KEY } from "../constants/constants";

export const axiosInstance = Axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": API_HOST,
  },
});
