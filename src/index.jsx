import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles/styles.css";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { fetchSong } from "./actions";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
