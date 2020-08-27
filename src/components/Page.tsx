import React from 'react';
import styled from '@emotion/styled';

const StyledPage = styled.div`
  display: contents;
`;

const Page: React.FC<{}> = ({ children }): JSX.Element => (
  <StyledPage>{children}</StyledPage>
);

export default Page;
