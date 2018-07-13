import { combineReducers, Reducer } from "redux";
import { RootState } from "./state.interface";

const INITIAL_STATE: RootState = {};

export const rootReducer: Reducer<RootState> = (
  state: RootState = INITIAL_STATE
) => combineReducers<RootState>({});
