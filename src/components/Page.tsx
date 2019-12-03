import React from 'react';
import styled from '@emotion/styled';

import { IChildrenProp } from '../interfaces';

const StyledPage = styled.div`
  display: contents;
`;

const Page: React.FC<IChildrenProp> = ({ children }): JSX.Element => (
  <StyledPage>{children}</StyledPage>
);

export default Page;
