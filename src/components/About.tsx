import React, { FC } from 'react';
import styled from '@emotion/styled';

import { fonts } from '../styles/variables';

import TitleHeader from './TitleHeader';

const Section = styled.section`
  margin-bottom: 20px;
`;

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
    <Section id="about" className="scrollspy">
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
          I&apos;m a proficient full-stack developer, my expertise is in
          building scalable backend services (API services, stream processing,
          and async mechanisms).
        </p>
        <p>
          I have an insatiable interest in learning new technologies as well as
          a strong desire to build modular, maintainable, and well-tested
          applications.
        </p>
      </Container>
    </Section>
  </>
);

export default About;
