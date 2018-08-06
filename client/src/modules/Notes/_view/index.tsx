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
  display: flex;
  min-height: 100px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 10px #000000;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px;
`;

export const StyledInput = styled.input``;
