import React, { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { fonts, breakpoints as bp } from '../styles/variables';

interface ContainerProps {
  width?: number;
}

const Container = styled.div<ContainerProps>`
  width: 95%;
  font-family: ${fonts.robotoSansSerif};
  font-weight: 300;
  padding: 0 24px;
  max-width: 1280px;
  letter-spacing: 0.25px;

  @media (min-width: ${bp.xxl}px) {
    width: ${(props): number | undefined => props.width}px;
  }
`;

const CardContainer: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  width
}): JSX.Element => (
  <>
    <Container className="container" width={width}>
      {children}
    </Container>
  </>
);

export default CardContainer;
