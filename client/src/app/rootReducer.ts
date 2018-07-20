import { combineReducers, Reducer } from "redux";
import { RootState } from "./state.interface";
import {notes, notesIsLoading} from "../modules/Notes/notesReducer";

export const rootReducer = (): Reducer<RootState> =>
    combineReducers<RootState>({
        notes,
        notesIsLoading,
    });
