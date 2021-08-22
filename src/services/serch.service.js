import HttpProvider from "./HTTPHandler";
import { apiKey } from "./apiKey";

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
