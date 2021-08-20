import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";
import rootReducers from "./modules";
const ConfigureStore = (reducers = {}, preLoadedState = {}, middlewares = []) =>
  createStore(
    combineReducers({
      ...rootReducers,
      ...reducers,
    }),
    preLoadedState,
    compose(applyMiddleware(...middlewares, thunk, reduxLogger))
  );
export default ConfigureStore;
