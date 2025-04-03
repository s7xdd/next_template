import { useAuthStore } from "@/store/auth/auth-store";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const createServerConnectAPI = () => {
  const headers = {
    Accept: "application/json",
  };

  const requestOptions: any = {
    baseURL: baseURL,
    headers: headers,
  };

  const apiClient = axios.create(requestOptions);

  apiClient.interceptors.request.use(requestInterceptor);
  return apiClient;
};

const requestInterceptor = (config: any) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
};