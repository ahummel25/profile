import React from "react";
import styled from "@emotion/styled";

const StyledLayoutRoot = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({
  children,
  className
}): JSX.Element => (
  <>
    {/* <Global styles={() => css(normalize)} /> */}
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
