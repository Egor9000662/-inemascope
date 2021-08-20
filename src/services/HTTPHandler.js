import axios from "axios";

export const HttpConfig = {
  baseURL: "https://imdb-api.com",
  responseType: "json",
  headers: { accept: "text/plain" },
};

class HttpProvider {
  static api = axios.create(HttpConfig);
  static getBaseURL() {
    return HttpConfig.baseURL;
  }
  static setApi(base_url) {
    console.log("setApi", base_url);
    HttpConfig.baseURL = base_url;
    HttpProvider.api = axios.create(HttpConfig);
  }

  static get(url, headers) {
    return HttpProvider.api.get(url, { headers: headers }).catch(function (e) {
      if (e.response) {
        console.log(e);
      } else if (e.request) {
        console.log(e);
      } else {
        console.log(e);
      }
    });
  }
}

export default HttpProvider;
