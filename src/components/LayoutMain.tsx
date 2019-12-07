import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
