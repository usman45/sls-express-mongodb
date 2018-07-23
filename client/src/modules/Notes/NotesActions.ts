import { Dispatch } from "react-redux";
import { RootState } from "../../app/state.interface";

export const FETCH_NOTES_INIT_DATA_START = "FETCH_NOTES_INIT_DATA_START";
export const FETCH_NOTES_INIT_DATA_SUCCESS = "FETCH_NOTES_INIT_DATA_SUCCESS";

export const START_NOTES_REQUEST = "START_NOTES_REQUEST";
export const SUCCESS_NOTES_REQUEST = "SUCCESS_NOTES_REQUEST";
export const FAILED_NOTES_REQUEST = "FAILED_NOTES_REQUEST";
const NOTE_SERVICE_URL = "http://localhost:3000/api/notes";

async function getNotes() {
  const response = await fetch(NOTE_SERVICE_URL);
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

export const setNotesStart = () => ({
  type: START_NOTES_REQUEST,
  payload: undefined
});

export const setNotesSuccess = () => ({
  type: SUCCESS_NOTES_REQUEST,
  payload: undefined
});

export const setNotesFailed = () => ({
  type: FAILED_NOTES_REQUEST,
  payload: undefined
});

export const sendNotesToApi = async (title, description): Promise<void> => {
  const apiResponse = await fetch(NOTE_SERVICE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: title,
      description: description
    })
  });
  if (apiResponse.status !== 200) {
    throw new Error(
      `Request failed: non-200-response from API: [${apiResponse.status}]`
    );
  }
};

export function createSubmitNotesAction(title, description) {
  return async (dispatch: Dispatch<RootState>, getState: () => RootState) => {
    try {
      dispatch(setNotesStart());
      await sendNotesToApi(title, description);
      dispatch(setNotesSuccess());
    } catch (err) {
      // tslint:disable-next-line:no-console
      console.error(err);
      dispatch(setNotesFailed());
    }
  };
}
