import React, { FC } from 'react';
import styled from '@emotion/styled';

import { LayoutMainProps } from '../interfaces';
import background from '../images/bg.png';

interface MainProps {
  paddingLeft: number;
}

const StyledLayoutMain = styled.main<MainProps>`
  background: url(${background});
  display: flex;
  flex-direction: column;
  padding-left: ${(props): number => props.paddingLeft}px;

  @media (max-width: 992px) {
    padding-left: 0;
  }
`;

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  paddingLeft
}): JSX.Element => (
  <StyledLayoutMain paddingLeft={paddingLeft}>{children}</StyledLayoutMain>
);

export default LayoutMain;
