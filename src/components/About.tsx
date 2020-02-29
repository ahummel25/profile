import React, { FC } from "react";
import styled from "@emotion/styled";

import TitleHeader from "./TitleHeader";
import { fonts } from "../styles/variables";

const Container = styled.div`
  width: 95%;
  font-family: ${fonts.roboto};
  font-weight: 300;
  padding: 0 24px;
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

const About: FC<{}> = (): JSX.Element => (
  <>
    <section id="about" className="scrollspy">
      <TitleHeader title="About" />
      <Container className="container flow-text">
        <BlockQuote>
          <h2>
            Highly motivated, full stack software developer with a passion for
            delivering high quality, requirements-driven software.
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
      </Container>
    </section>
  </>
);

export default About;
