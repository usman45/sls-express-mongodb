import {
  FETCH_NOTES_INIT_DATA_START,
  FETCH_NOTES_INIT_DATA_SUCCESS
} from "./NotesActions";
import { NotesState } from "./notesState";

export function notesIsLoading(
  state: NotesState = { title: "", description: "", _id: "" },
  action: any
) {
  switch (action.type) {
    case FETCH_NOTES_INIT_DATA_START:
      return action;
    default:
      return state;
  }
}
export function notes(state: NotesState[] = [], action: any) {
  switch (action.type) {
    case FETCH_NOTES_INIT_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
