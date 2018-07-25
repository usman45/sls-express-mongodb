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
import styled from "styled-components";
import { i18n } from "../../app/i18n";
import { color, spacing } from "../../assets/styles/styles";

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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  margin: 20px;
`;

export const NotesContainer = styled.ul``;

export const NotesItem = styled.li`
  border: 1px solid ${color.lightGray};
  display: flex;
`;

const ItemContent = styled.div`
  padding: ${spacing.small};
  &:nth-child(3) {
    margin-left: auto;
  }
`;

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
    console.log(note._id);
    this.props.handleDeleteNote(note._id);
  };

  render() {
    if (!this.props.notes) {
      return;
    }
    return (
      <MainContainer>
        <NotesContainer>
          {this.props.notes.map(hit => (
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
          ))}
        </NotesContainer>
        <StyledForm onSubmit={this.handleSubmit}>
          <StyledInput
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <StyledInput
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <PrimaryButton type="submit" value="Submit">
            {i18n("button.callToAction")}
          </PrimaryButton>
        </StyledForm>
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

export default connect(
  notesStateToProps,
  notesScreenDispatchToProps
)(NotesScreen);
