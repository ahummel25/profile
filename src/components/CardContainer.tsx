import React, { FC } from 'react';
import styled from '@emotion/styled';

import { IChildrenProp } from '../interfaces';
import { fonts, breakpoints as bp } from '../styles/variables';

interface ContainerProps extends IChildrenProp {
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

const CardContainer: FC<ContainerProps> = ({
  children,
  width
}): JSX.Element => (
  <>
    {width ? (
      <Container className="container" width={width}>
        {children}
      </Container>
    ) : (
      <Container className="container">{children}</Container>
    )}
  </>
);

export default CardContainer;
