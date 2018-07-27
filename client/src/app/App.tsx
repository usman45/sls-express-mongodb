import * as React from "react";
import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore from "./store";
import { RootState } from "./state.interface";
import AppWrapper from "../modules/AppWrapper";
import HomeScreen from "../modules/HomeScreen";
import { Header } from "../modules/Header/index";
import { Redirect, Route, RouteProps, Router, Switch } from "react-router";
import NotesScreen from "../modules/Notes";
import createHistory from "history/createBrowserHistory";
import Footer from "../modules/Footer";
const store: Store<RootState> = configureStore();

const history = createHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWrapper>
          <Header />
          <Router history={history}>
            <Route
              render={({ location }: RouteProps) => (
                <Switch location={location}>
                  <Route exact={true} path="/notes" component={NotesScreen} />

                  <Route exact={true} path="/" component={HomeScreen} />
                  <Route path="/" render={() => <Redirect to="/" />} />
                </Switch>
              )}
            />
          </Router>
          <Footer />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
