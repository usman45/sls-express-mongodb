import * as React from "react";
import { MainContainer } from "../../common/layout";
import { NavComponent } from "../MainNavigation";

const HomeScreen = () => (
  <MainContainer>
    <NavComponent title="Notes" href={"/notes"} />
    <NavComponent title="Home" href={"/"} />
  </MainContainer>
);

export default HomeScreen;
