import React, { forwardRef, FC, RefObject, Ref } from "react";
import styled from "@emotion/styled";
import { dimensions, colors, fonts } from "../styles/variables";

const StyledAboutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
  border: 0;
  display: flex;
  justify-content: center;
`;

const StyledAboutHeader = styled.h2`
  font-family: ${fonts.helvetica};
  font-size: ${dimensions.fontSize.profileText}px;
  font-weight: ${dimensions.fontWeight.bold};
  color: ${colors.profileText};
  margin: 1.5rem 0;
  text-transform: uppercase;
`;

const StyledHr = styled.hr`
  position: relative;
  color: ${colors.profileText};
  margin: 0 auto;
  max-width: 250px;
  border: 0;
  border-top: 4px solid;
  bottom: 15px;
`;

const StyledAboutBodyLeft = styled.div`
  width: 50%;
  float: left;
`;

const StyledAboutBodyRight = styled.div`
  width: 50%;
  float: right;
`;

const StyledAboutText = styled.p`
  font-family: ${fonts.helvetica};
  font-size: ${dimensions.fontSize.large + 2}px;
  color: ${colors.profileText};
`;

const About: FC<{}> = (_, ref: RefObject<HTMLDivElement>): JSX.Element => (
  <div ref={ref}>
    <StyledAboutContainer>
      <StyledAboutHeader>About Me</StyledAboutHeader>
    </StyledAboutContainer>
    <StyledHr />
    <StyledAboutBodyLeft>
      <StyledAboutText>
        I have over 7 years of experience as a full-stack software engineer and
        have worked at both small startups and large organizations. While I'm a
        proficient full-stack developer, my expertise is in building scalable
        backend services (API services, stream processing, and async
        mechanisms).
      </StyledAboutText>
    </StyledAboutBodyLeft>
    <StyledAboutBodyRight>
      <StyledAboutText>
        I have an insatiable interest in learning new technologies as well as a
        strong desire to build modular, maintainable, and well-tested
        applications.
      </StyledAboutText>
    </StyledAboutBodyRight>
  </div>
);

export default forwardRef<HTMLDivElement>(About);
