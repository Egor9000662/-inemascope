import HttpProvider from "./HTTPHandler";

const apiKey = "k_jm5k9op5";

export class SearchService {
  static search = async (expression) => {
    try {
      const result = await HttpProvider.get(
        `/API/SearchTitle/${apiKey}/${expression}`
      );
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };
}
