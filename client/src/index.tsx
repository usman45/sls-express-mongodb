import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
import "./index.css";
import { setGlobalUiLocaleFromQueryString } from "./app/i18n";

setGlobalUiLocaleFromQueryString(document.location.search);

const rootElem = document.getElementById("root") as HTMLElement;

ReactDOM.render(<App />, rootElem);

declare global {
  interface NodeModule {
    hot?: {
      accept: Function;
    };
  }
}

if (module.hot) {
  module.hot.accept("./app/App", () => {
    const NextApp = require("./app/App").default;
    ReactDOM.render(<NextApp />, rootElem);
  });
}
