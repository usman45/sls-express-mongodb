import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../app/state.interface";
import { createFetchDataFromBackendAction } from "./NotesActions";

export type NotesProps = {
  fetchNotesWithFetch: () => void;
  notes: any;
};

export type ComponentState = {
  isFetching: boolean;
};

export class NotesScreen extends React.Component<NotesProps, ComponentState> {
  constructor(props: NotesProps) {
    super(props);
    this.state = { isFetching: false };
  }

  componentDidMount() {
    this.props.fetchNotesWithFetch();
  }

  render() {
    if (!this.props.notes) {
      return;
    }
    return (
      <div className="App">
        <ul>
          {this.props.notes.map(hit => (
            <li key={hit.title}>
              {hit.title} {hit.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export const notesStateToProps = (state: RootState) => {
  return {
    notes: state.notes
  };
};
export const notesScreenDispatchToProps = (dispatch: Dispatch<RootState>) => {
  return {
    fetchNotesWithFetch: () => {
      dispatch(createFetchDataFromBackendAction());
    }
  };
};

export default connect(notesStateToProps, notesScreenDispatchToProps)(
  NotesScreen
);
