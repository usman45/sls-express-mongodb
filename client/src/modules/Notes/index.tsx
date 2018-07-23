import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../app/state.interface";
import {
  createFetchDataFromBackendAction,
  createSubmitNotesAction
} from "./NotesActions";
import { PrimaryButton } from "../../common/buttons";

export type NotesProps = {
  fetchNotes: () => void;
  notes: any;
  handleSubmitNewNote: (title: string, description: string) => void;
};

export type ComponentState = {
  isLoading: boolean;
  title: string;
  description: string;
};

export class NotesScreen extends React.Component<NotesProps, ComponentState> {
  constructor(props: NotesProps) {
    super(props);
    this.state = { isLoading: false, title: "", description: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault();
    this.props.handleSubmitNewNote(this.state.title, this.state.description);
  }

  handleChange(evt: any) {
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
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
    fetchNotes: () => {
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
