import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";
import { BreakpointProvider } from "react-socks";

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BreakpointProvider>
      <App />
    </BreakpointProvider>
  </Provider>,
  document.getElementById("root")
);
