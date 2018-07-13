import * as React from "react";
import styled from "styled-components";
import { spacing, value, color } from "../../assets/styles/styles";
const arrowRight = require("../../assets/images/arrow-right.svg");

export const ContentMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ContentMenuItemWrapper = styled.li`
  display: flex;
  align-items: center;
  min-height: 100%;
  border: 1px solid ${color.lightGray};
  border-radius: ${value.rounding};
  margin: ${value.margin};
  color: ${color.blue};
`;

const ContentMenuTitle = styled.a`
  display: block;
  flex: 1 0 0;
  padding: ${spacing.small};
`;

const RightArrowIcon = styled.span`
  flex: 0 0 auto;  
  width: ${spacing.small};
  height: 1.25rem;
  text-align: center;
  float: right;
  padding: 1rem;
  background: url('${arrowRight}') no-repeat center;
`;

type ContentMenuItemProps = {
  title: string;
};

export const ContentMenuItem = ({ title }: ContentMenuItemProps) => (
  <ContentMenuItemWrapper>
    <ContentMenuTitle href={""}>{title}</ContentMenuTitle>
    <RightArrowIcon />
  </ContentMenuItemWrapper>
);
