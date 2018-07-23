import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RootState} from "../../app/state.interface";
import {createFetchDataFromBackendAction, createSubmitNotesAction} from "./NotesActions";
import {PrimaryButton} from "../../common/buttons";

export type NotesProps = {
  fetchNotesWithFetch: () => void;
  notes: any;
  handleSubmitNewNote: (title, description) => void;
};

export type ComponentState = {
  isFetching: boolean;
  inputTitle: string;
  inputDescription: string;
};

export class NotesScreen extends React.Component<NotesProps, ComponentState> {
  constructor(props: NotesProps) {
    super(props);
    this.state = { isFetching: false, inputTitle: "", inputDescription: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotesWithFetch();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmitNewNote(
      this.state.inputTitle,
      this.state.inputDescription
    );
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    if (!this.props.notes) {
      return;
    }
    return (
      <div className="App">
        <ul>
          {this.props.notes.map(hit => (
            <li key={hit._id}>
              {hit.title} {hit.description}
            </li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="inputTitle"
            value={this.state.inputTitle}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="inputDescription"
            value={this.state.inputDescription}
            onChange={this.handleChange}
          />
          <PrimaryButton type="submit" value="Submit">
            Add new
          </PrimaryButton>
        </form>
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
    },
    handleSubmitNewNote: (title, description) => {
      dispatch(createSubmitNotesAction(title, description));
    }
  };
};

export default connect(
  notesStateToProps,
  notesScreenDispatchToProps
)(NotesScreen);
