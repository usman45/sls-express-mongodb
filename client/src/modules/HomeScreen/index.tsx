import * as React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from '../../common/buttons';
import { Centered } from '../../common/layout';
import { Ingress, PageTitle } from '../../common/type';

const IngressWithMargins = styled(Ingress)`
  margin-top: 2em;
  margin-bottom: 2em;
`;

export const TEXTS = {
  title: 'Welcome to your app',
  ingress:
    'This portal gives you quick access to view and edit your profile.',
  login: 'Login',
};

export default () => (
  <Centered>
    <PageTitle>{TEXTS.title}</PageTitle>
    <IngressWithMargins>{TEXTS.ingress}</IngressWithMargins>
    <PrimaryButton>{TEXTS.login}</PrimaryButton>
  </Centered>
);