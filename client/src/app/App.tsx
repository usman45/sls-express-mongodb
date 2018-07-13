import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "./store";
import { RootState } from "./state.interface";

const store: Store<RootState> = configureStore(undefined as any);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
