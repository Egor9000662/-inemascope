/* eslint-disable import/no-anonymous-default-export */
import { GlobalService } from "../../services/global.service";
import { SearchService } from "../../services/serch.service";
const initialState = {
  isFetching: false,
  top250: {
    items: [],
    allItemsLoaded: false,
  },
  top250TVs: {
    items: [],
    allItemsLoaded: false,
  },
  comingSoon: {
    items: [],
    allItemsLoaded: false,
  },
  mostPopular: {
    items: [],
    allItemsLoaded: false,
  },
  mostPopularTVs: {
    items: [],
    allItemsLoaded: false,
  },
  newInTheaters: {
    items: [],
    allItemsLoaded: false,
  },
  selectedFilm: null,
  foundFilms: [],
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_IS_FETCHING":
      return { ...state, isFetching: true };
    case "FETCH_FILMS_TOP_250":
      return {
        ...state,
        isFetching: false,
        top250: { ...state.top250, items: payload, allItemsLoaded: true },
      };
    case "FETCH_FILMS_TOP_250_TVs":
      return {
        ...state,
        isFetching: false,
        top250TVs: { ...state.top250TVs, items: payload, allItemsLoaded: true },
      };
    case "FETCH_FILMS_COMING_SOON":
      return {
        ...state,
        isFetching: false,
        comingSoon: {
          ...state.comingSoon,
          items: payload,
          allItemsLoaded: true,
        },
      };
    case "FETCH_FILMS_MOST_POPULAR":
      return {
        ...state,
        isFetching: false,
        mostPopular: {
          ...state.mostPopular,
          items: payload,
          allItemsLoaded: true,
        },
      };
    case "FETCH_FILMS_MOST_POPULAR_TVs":
      return {
        ...state,
        isFetching: false,
        mostPopularTVs: {
          ...state.mostPopularTVs,
          items: payload,
          allItemsLoaded: true,
        },
      };
    case "FETCH_FILMS_NEW_IN_THEATERS":
      return {
        ...state,
        isFetching: false,
        newInTheaters: {
          ...state.newInTheaters,
          items: payload,
          allItemsLoaded: true,
        },
      };
    case "FETCH_SELECTED_FILM":
      return { ...state, isFetching: false, selectedFilm: payload };
    case "CLEAR_SELECTED_FILM":
      return { ...state, selectedFilm: null };
    case "SEARCH_FILMS":
      return { ...state, isFetching: false, foundFilms: payload };

    default:
      return state;
  }
};

export const setIsFetching = () => ({
  type: "SET_IS_FETCHING",
});

export const getTopMovies250 = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getTOP250Movies();
  dispatch({ type: "FETCH_FILMS_TOP_250", payload: result.data.items });
};
export const getTOP250MoviesTVs = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getTop250MoviesTVs();
  dispatch({ type: "FETCH_FILMS_TOP_250_TVs", payload: result.data.items });
};
export const getComingSoon = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getComingSoon();
  dispatch({ type: "FETCH_FILMS_COMING_SOON", payload: result.data.items });
};
export const getMostPopularMovies = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getMostPopularMovies();
  dispatch({ type: "FETCH_FILMS_MOST_POPULAR", payload: result.data.items });
};
export const getMostPopularTVs = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getMostPopularTVs();
  dispatch({
    type: "FETCH_FILMS_MOST_POPULAR_TVs",
    payload: result.data.items,
  });
};
export const newMoviesInTheaters = () => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.newMoviesInTheaters();
  dispatch({ type: "FETCH_FILMS_NEW_IN_THEATERS", payload: result.data.items });
};

export const getFilm = (id) => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await GlobalService.getSelectedFilm(id);
  dispatch({ type: "FETCH_SELECTED_FILM", payload: result.data });
};
export const resetSelectedFilm = () => ({
  type: "CLEAR_SELECTED_FILM",
});

export const searchFilms = (phrase) => async (dispatch) => {
  dispatch(setIsFetching());
  const result = await SearchService.search(phrase);
  dispatch({ type: "SEARCH_FILMS", payload: result.data.results });
};
