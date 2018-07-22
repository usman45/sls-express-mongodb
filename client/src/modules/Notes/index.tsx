import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../app/state.interface";
import { createFetchDataFromBackendAction, createSubmitNotesAction } from "./NotesActions";
import { PrimaryButton } from "../../common/buttons";

export type NotesProps = {
  fetchNotesWithFetch: () => void;
  notes: any;
  handleSubmitNewNote: (notes) => void;
};

export type ComponentState = {
  isFetching: boolean;
  inputValue: string;
};

export class NotesScreen extends React.Component<NotesProps, ComponentState> {
  constructor(props: NotesProps) {
    super(props);
    this.state = { isFetching: false, inputValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {
    this.props.fetchNotesWithFetch();
  }

  handleSubmit(event) {
    console.log('Form value: ' + this.state.inputValue);
    event.preventDefault();
    this.props.handleSubmitNewNote(this.state.inputValue);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })

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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <PrimaryButton type="submit" value="Submit">Add new</PrimaryButton>
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
    handleSubmitNewNote: (notes) => {
      dispatch(createSubmitNotesAction(notes));
    },
  };
};

export default connect(notesStateToProps, notesScreenDispatchToProps)(
  NotesScreen
);
