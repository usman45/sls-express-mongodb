import { color, spacing } from "../../../assets/styles/styles";
import styled from "styled-components";

export const NotesContainer = styled.ul`
  margin-top: 20px;
  background-color: #fde6f2;
`;

export const NotesItem = styled.li`
  border: 1px solid ${color.lightGray};
  display: flex;
`;

export const StyledSpan = styled.span`
  color: red;
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
  flex-direction: column;
  padding: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input``;
