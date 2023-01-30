import axios, { Axios, AxiosInstance, AxiosStatic } from "axios";

export class AxiosClient {
  $axios: AxiosInstance;
  constructor(axios: AxiosStatic) {
    this.$axios = axios.create({
      baseURL: "https://dull-gray-sparrow.cyclic.app/",
    });
  }
  postFile(url: string, payload: FormData) {
    return this.$axios.post(url, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  get(url: string, params?: object): Promise<any> {
    return this.$axios.get(url, { params: params
     }
      );
  }

  post(url: string, payload?: Object, params?: object): Promise<any> {
    return this.$axios.post(url, payload, { params: params });
  }
}
