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
`;

export const Item = styled.li`
  display: block;
  color: ${color.white};
  margin: ${spacing.small};
  flex: 0 0 auto;

  &:nth-child(1) {
    margin-right: auto;
  }
`;

export const StyledLinkTag = styled.a`
  text-decoration: none;
  color: ${color.white};
`;
