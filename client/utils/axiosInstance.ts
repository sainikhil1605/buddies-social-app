import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncLocalStorage } from "async_hooks";
import axios from "axios";
import { useEffect } from "react";
import { Platform } from "react-native";
// console.log(process.env.EXPO_PUBLIC_API_URL);
let token="";
AsyncStorage.getItem("token").then((authToken)=>{
  token=authToken||"";
})
console.log(token);
const axiosInstance = axios.create({
  baseURL: Platform.OS==="android"?"http://10.0.2.2:3000":"http://localhost:3000",
  
});
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
