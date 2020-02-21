import React from "react";
import styled from "@emotion/styled";

const StyledPage = styled.div`
  display: block;
  height: 100%;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }): JSX.Element => (
  <StyledPage className={className}>{children}</StyledPage>
);

export default Page;
