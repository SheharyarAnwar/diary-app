import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";

const http: AxiosInstance = axios.create({
  baseURL: "https://api.diaries.com",
});

http.defaults.headers.post["Content-Type"] = "application/json";

http.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  },
  (error: AxiosError) => {
    const {
      response,
      request,
    }: {
      response?: AxiosResponse;
      request?: XMLHttpRequest;
    } = error;
    if (response) {
      if (response.status >= 400 && response.status <= 500) {
        toast(response.data?.message);
        return null;
      }
    } else if (request) {
      toast("Request failed. Please try again.");
      return null;
    }
    return Promise.reject(error);
  }
);

export default http;
