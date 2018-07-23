import * as React from "react";
import {MainContainer} from "../../common/layout";



const HomeScreen = () => (
  <MainContainer>
    {/*<HeroImage title={i18n('welcome')} ingress={i18n('ingress')} />
        <NavigationList />*/}
    <ul>
      <li>
        <a href="/notes">Notes</a>
      </li>
    </ul>
  </MainContainer>
);

export default HomeScreen;
