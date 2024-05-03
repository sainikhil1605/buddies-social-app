import axios from "axios";
// console.log(process.env.EXPO_PUBLIC_API_URL);
const axiosInstance = axios.create({
  baseURL: "http://10.0.2.2:3000",
});

export default axiosInstance;
