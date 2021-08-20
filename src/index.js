import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ConfigureStore from "./redux/store";
import App from "./App";

const store = ConfigureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
