import * as React from "react";
import styled from "@emotion/styled";

import { widths } from "../styles/variables";
import { getEmSize } from "../styles/mixins";

interface ContainerProps {
  className?: string;
}

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`;

const Container: React.FC<ContainerProps> = ({
  children,
  className
}): JSX.Element => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
