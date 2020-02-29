import React, { FC } from "react";
import styled from "@emotion/styled";

import { fonts } from "../styles/variables";

const Container = styled.div`
  width: 95%;
  font-family: ${fonts.roboto};
  font-weight: 300;
  padding: 0 24px;

  @media (min-width: 1200px) {
    width: 860px;
  }
`;

const CardContainer: FC<{}> = ({ children }): JSX.Element => (
  <>
    <Container className="container">{children}</Container>
  </>
);

export default CardContainer;
