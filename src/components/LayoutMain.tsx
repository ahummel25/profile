import React, { FC } from "react";
import styled from "@emotion/styled";

import background from "../images/bg.png";

const StyledLayoutMain = styled.main`
  background: url(${background});
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: FC<LayoutMainProps> = ({
  children,
  className
}): JSX.Element => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
