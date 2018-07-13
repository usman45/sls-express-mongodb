import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "./store";
import { RootState } from "./state.interface";
import AppWrapper from "../modules/AppWrapper";
import HomeScreen from "../modules/HomeScreen";
import { Header } from "../modules/Header/index";

const store: Store<RootState> = configureStore(undefined as any);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <Header />
          <HomeScreen />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
