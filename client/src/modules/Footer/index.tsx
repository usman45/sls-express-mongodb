import * as React from "react";
import styled from "styled-components";
import { breakPoint, color, spacing, value } from "../../assets/styles";

const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  background: ${color.white};
  bottom: 0;
  border-top: 1px solid ${color.lightGray};

  a {
    text-decoration: none;
    color: ${color.blue};
  }
`;

const StyledSpan = styled.div`
  text-transform: uppercase;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${value.appWrapperMaxWidth};
  margin: 0 auto;
`;

const StyledList = styled.ul`
  list-style: none;
  line-height: 1.2rem;
  color: ${color.darkGray};
  font-size: 14px;
  padding: ${spacing.large} ${spacing.medium};
  margin: 0;
  
  @media (min-width: ${breakPoint.largeScreenMin}) {
    margin-left: 0;
    padding: ${spacing.large} 0
`;

class Footer extends React.Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    return (
      <StyledFooter>
        <FooterWrapper>
          <StyledList>
            <li>
              <StyledSpan>© {this.getYear()} Notes</StyledSpan>
            </li>
            <li>Policy</li>
          </StyledList>
        </FooterWrapper>
      </StyledFooter>
    );
  }
}

export default Footer;
