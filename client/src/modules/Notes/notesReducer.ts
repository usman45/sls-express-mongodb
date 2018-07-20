import {
  FETCH_NOTES_INIT_DATA_START,
  FETCH_NOTES_INIT_DATA_SUCCESS
} from "./NotesActions";

export function notesIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_NOTES_INIT_DATA_START:
      return action.isLoading;
    default:
      return state;
  }
}
export function notes(state = [], action) {
  switch (action.type) {
    case FETCH_NOTES_INIT_DATA_SUCCESS:
      return action.items;
    default:
      return state;
  }
}
