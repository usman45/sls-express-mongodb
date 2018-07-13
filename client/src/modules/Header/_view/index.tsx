import styled from "styled-components";
import { value, color } from "../../../assets/styles/styles";

export const HeaderDiv = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  align-items: center;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: inline-flex;
  align-items: center;
  height: 40px;
  box-shadow: 0 2px 4px 0 rgba(100, 100, 100, 0.49);
`;

export const Item = styled.li`
  height: 100%;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  border: 1px solid ${color.lightGray};
`;

export const Submenu = styled.div`
  top: 0;
  height: ${value.breadCrumbHeight};
  width: 100%;
  background: ${color.lightBlue};
`;
