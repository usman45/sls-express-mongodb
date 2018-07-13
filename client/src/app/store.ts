import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Store,
  StoreEnhancer
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { RootState } from "./state.interface";

const middlewares: Middleware[] = [thunk];
const storeEnhancers: StoreEnhancer<RootState>[] = [];

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }
}

if (typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function") {
  storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

storeEnhancers.unshift(applyMiddleware(...middlewares));

export default function configureStore(
  initialState: RootState
): Store<RootState> {
  return createStore(rootReducer, initialState, compose(...storeEnhancers));
}
