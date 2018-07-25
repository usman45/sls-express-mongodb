import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../app/state.interface";
import {
  createDeleteNotesAction,
  createFetchDataFromBackendAction,
  createSubmitNotesAction
} from "./NotesActions";
import { PrimaryButton } from "../../common/buttons";
import { MainContainer } from "../../common/layout";
import { i18n } from "../../app/i18n";
import {AddNewNoteContainer, ItemContent, NotesContainer, NotesItem, StyledForm, StyledInput} from "./_view";

export type NotesProps = {
    fetchNotes: () => void;
    notes: any;
    handleSubmitNewNote: (title: string, description: string) => void;
    handleDeleteNote: (id: string) => void;
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

  handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    this.props.handleSubmitNewNote(this.state.title, this.state.description);
  };

  handleChange = (evt: any) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  deleteNote = note => {
    this.props.handleDeleteNote(note._id);
  };

  render() {
    if (!this.props.notes) {
      return;
    }
    return (
      <MainContainer>
        <AddNewNoteContainer>
          <StyledForm onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <StyledInput
              type="text"
              name="title"
              placeholder={"Title"}
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label>Description:</label>
            <StyledInput
              type="text"
              name="description"
              placeholder={"Description"}
              value={this.state.description}
              onChange={this.handleChange}
            />
            <PrimaryButton type="submit" value="Submit">
              {i18n("button.callToAction")}
            </PrimaryButton>
          </StyledForm>
        </AddNewNoteContainer>
        <NotesContainer>
          {this.props.notes.length ? this.props.notes.map(hit => (
            <NotesItem key={hit._id}>
              <ItemContent>{hit.title}</ItemContent>
              <ItemContent>{hit.description}</ItemContent>
              <ItemContent>
                <button
                  onClick={() => this.deleteNote(hit)}
                  type="button"
                  className="close"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </ItemContent>
            </NotesItem>
          )): <h1>No data</h1>}
        </NotesContainer>
      </MainContainer>
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
    },
    handleDeleteNote: id => {
      dispatch(createDeleteNotesAction(id));
    }
  };
};

export default connect(notesStateToProps, notesScreenDispatchToProps)(
  NotesScreen
);
