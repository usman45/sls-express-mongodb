import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../app/state.interface";
import {
  createFetchDataFromBackendAction,
  createSubmitNotesAction
} from "./NotesActions";
import { PrimaryButton } from "../../common/buttons";
import { MainContainer } from "../../common/layout";
import styled from "styled-components";
import { i18n } from "../../app/i18n";

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

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  margin: 20px;
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
      <MainContainer>
        <ul>
          {this.props.notes.map(hit => (
            <li key={hit._id}>
              {hit.title} {hit.description}
            </li>
          ))}
        </ul>
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
            {i18n("login.callToAction")}
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
    }
  };
};

export default connect(
  notesStateToProps,
  notesScreenDispatchToProps
)(NotesScreen);
