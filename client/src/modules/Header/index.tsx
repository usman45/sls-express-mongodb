import * as React from "react";
import { HeaderDiv, Menu, Item, Submenu } from "./_view/index";

export const Header = () => (
  <HeaderDiv>
    <Menu>
      <Item className="finnair-emblem" />
      <Item className="language" />
    </Menu>
    <Submenu>
      <span className="back-arrow" />
    </Submenu>
  </HeaderDiv>
);
