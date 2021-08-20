import HttpProvider from "./HTTPHandler";
const apiKey = "k_gfavrhed";

export class GlobalService {
  static getTOP250Movies = async () => {
    try {
      const result = await HttpProvider.get(`/API/Top250Movies/${apiKey}`);
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };

  static getTop250MoviesTVs = async () => {
    try {
      const result = await HttpProvider.get(`/API/Top250TVs/${apiKey}`);
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };

  static getComingSoon = async () => {
    try {
      const result = await HttpProvider.get(`/en/API/ComingSoon/${apiKey}`);
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };

  static getMostPopularMovies = async () => {
    try {
      const result = await HttpProvider.get(
        `/en/API/MostPopularMovies/${apiKey}`
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
  static getMostPopularTVs = async () => {
    try {
      const result = await HttpProvider.get(`/en/API/MostPopularTVs/${apiKey}`);
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };

  static newMoviesInTheaters = async () => {
    try {
      const result = await HttpProvider.get(`/en/API/InTheaters/${apiKey}`);
      return { status: result?.status, data: result?.data };
    } catch (error) {
      return {
        status: error?.response?.status,
        message: error?.response?.data?.message,
        error: error.message,
      };
    }
  };

  static getSelectedFilm = async (id) => {
    try {
      const result = await HttpProvider.get(`/en/API/Title/${apiKey}/${id}`);
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
