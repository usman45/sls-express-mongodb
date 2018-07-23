import * as React from "react";
import { HeaderDiv, Menu, Item } from "./_view/index";

export const Header = () => (
  <HeaderDiv>
    <Menu>
      <Item className="finnair-emblem" />
      <Item className="language" />
    </Menu>
  </HeaderDiv>
);
