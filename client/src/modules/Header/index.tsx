import * as React from "react";
import { HeaderDiv, Menu, Item, StyledLinkTag } from "./_view/index";

export const Header = () => (
  <HeaderDiv>
    <Menu>
      <Item>Branding</Item>
      <Item>
        <StyledLinkTag href="/">Home</StyledLinkTag>
      </Item>
      <Item>About</Item>
      <Item>Contact</Item>
    </Menu>
  </HeaderDiv>
);
