import { color, spacing } from "../../../assets/styles/styles";
import styled from "styled-components";

export const NotesContainer = styled.ul``;

export const NotesItem = styled.li`
  border: 1px solid ${color.lightGray};
  display: flex;
`;

export const ItemContent = styled.div`
  padding: ${spacing.small};
  &:nth-child(3) {
    margin-left: auto;
  }
`;

export const AddNewNoteContainer = styled.div`
  margin-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input``;
