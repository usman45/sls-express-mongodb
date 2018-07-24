import * as React from "react";
import styled from "styled-components";
import { spacing, value, color } from "../../assets/styles/styles";
const arrowRight = require("../../common/arrow-right.svg");
import { Link } from "react-router-dom";

export const Nav = styled.ul`
  display: flex;
`;

export const NavMenuItemWrapper = styled.li`
  border: 1px solid ${color.lightGray};
  border-radius: ${value.rounding};
  color: ${color.blue};
  flex: 1 0 auto;
`;

const ContentMenuLink = styled(Link)`
  width: 100%;
  color: ${color.blue};
`;

const ContentMenuTitle = styled.div`
  padding: ${spacing.small};
`;

const RightArrowIcon = styled.span`
  width: ${spacing.small};
  padding: 1rem;
  background: url('${arrowRight}') no-repeat center;
`;

type ContentMenuItemProps = {
  title: string;
  href: string;
};

export const NavComponent = ({ title, href }: ContentMenuItemProps) => (
  <Nav>
    <NavMenuItemWrapper>
      <ContentMenuLink to={href}>
        <ContentMenuTitle>{title}</ContentMenuTitle>
        <RightArrowIcon />
      </ContentMenuLink>
    </NavMenuItemWrapper>
  </Nav>
);
