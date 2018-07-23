import styled from "styled-components";
import { spacing, value, color } from "../../../assets/styles/styles";

export const HeaderDiv = styled.div`
  margin-bottom: 100px;
  width: 100%;
  align-items: center;
  border: 1px solid grey;
  background: ${color.blue};
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: ${value.headerHeight};
  justify-content: space-between;
  align-items: center;
`;

export const Item = styled.li`
  text-decoration: none;
  display: block;
  color: ${color.white};
  margin: ${spacing.small};
`;