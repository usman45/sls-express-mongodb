import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 768px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
`;

export default ({ children }: { children: ReactNode }) => <Wrapper>{children}</Wrapper>;
