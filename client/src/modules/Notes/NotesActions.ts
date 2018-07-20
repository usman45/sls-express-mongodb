import { Dispatch } from "react-redux";
import { RootState } from "../../app/state.interface";

export const FETCH_NOTES_INIT_DATA_START = "FETCH_NOTES_INIT_DATA_START";
export const FETCH_NOTES_INIT_DATA_SUCCESS =
  "FETCH_NOTES_INIT_DATA_SUCCESS";
const QUOTE_SERVICE_URL = "http://localhost:3000/api/notes";

async function getNotes() {
  const response = await fetch(QUOTE_SERVICE_URL);
  return await response.json();
}

export function createFetchDataFromBackendAction() {
  return async (dispatch: Dispatch<RootState>, getState: () => RootState) => {
    dispatch(fetchConsentInitDataStart());
    const notes: any = await getNotes();
    dispatch(fetchNotesInitDataSuccess(notes));
  };
}

export const fetchConsentInitDataStart = () => ({
  type: FETCH_NOTES_INIT_DATA_START,
  payload: undefined
});

export const fetchNotesInitDataSuccess = notes => ({
  type: FETCH_NOTES_INIT_DATA_SUCCESS,
  payload: notes
});
