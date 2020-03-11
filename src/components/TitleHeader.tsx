import React, { FC } from 'react';
import styled from '@emotion/styled';

import { breakpoints as bp } from '../styles/variables';

const Header = styled.h3`
  margin: 0 auto;
  background-color: rgb(0, 128, 115);
  font-weight: 100;
  padding: 30px 40px;
  margin-bottom: 60px;
  text-transform: uppercase;

  @media (max-width: ${bp.lg}px) {
    padding: 20px 30px;
    margin-bottom: 40px;
  }
`;

const TitleHeader: FC<{ title: string }> = ({ title }): JSX.Element => (
  <>
    <Header className="page-title white-text">{title}</Header>
  </>
);

export default TitleHeader;
