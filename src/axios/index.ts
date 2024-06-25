import axios from "axios";
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  AxiosError,
} from "axios";
const request: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
request.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config;
});

request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      const {
        data: { code },
      } = response;
      // 根据不同的响应码作出不同的操作
      if (code) {
        switch (code) {
          case 0: {
          }
          default: {
          }
        }
      }
    }
    return response;
  },
  (error: AxiosError) => {}
);

export default request;
