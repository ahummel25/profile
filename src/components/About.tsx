import React, { forwardRef, FC, RefObject } from "react";
import styled from "@emotion/styled";
import { fonts } from "../styles/variables";

const AboutHeader = styled.h3`
  background-color: rgb(0, 128, 115);
  font-weight: 100;
  padding: 30px 40px;
  margin: 0;
  text-transform: uppercase;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 95%;
  font-family: ${fonts.roboto};
  font-weight: 300;
  padding: 0 24px;

  @media (min-width: 600px) {
    line-height: 2.88rem;
  }
`;

const BlockQuote = styled.blockquote`
  border-left: 5px solid rgb(121, 85, 72);
  color: rgb(121, 85, 72);
  font-weight: 400;
  font-size: 125%;
  margin: 20px 0;
  padding-left: 24px;

  h2 {
    font-size: inherit;
    line-height: inherit;
  }
`;

const About: FC<{}> = (_, ref: RefObject<HTMLDivElement>): JSX.Element => (
  <>
    <section id="about" className="scrollspy" ref={ref}>
      <AboutHeader className="page-title white-text">About</AboutHeader>
      <AboutContainer className="container flow-text">
        <BlockQuote>
          <h2>
            Highly motivated, full stack software developer with a passion for
            delivering high quality, requirements driven software.
          </h2>
        </BlockQuote>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
      </AboutContainer>
    </section>
    <section id="experience" className="section scrollspy" ref={ref}>
      <AboutHeader className="page-title white-text">Experience</AboutHeader>
      <AboutContainer className="container flow-text">
        <BlockQuote>
          <h2>
            Highly motivated, full stack software developer with a passion for
            delivering high quality, requirements driven software.
          </h2>
        </BlockQuote>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
        <p>
          I have over 7 years of experience as a full-stack software engineer
          and have worked at both small startups and large organizations. While
          I'm a proficient full-stack developer, my expertise is in building
          scalable backend services (API services, stream processing, and async
          mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
      </AboutContainer>
    </section>
  </>
);

export default forwardRef<HTMLDivElement, {}>(About);
