import React, { FC } from 'react';
import styled from '@emotion/styled';

import { fonts } from '../styles/variables';

import TitleHeader from './TitleHeader';

const Section = styled.section`
  margin-bottom: 20px;
  height: 100vh;
`;

const Container = styled.div`
  width: 95%;
  font-family: ${fonts.roboto};
  font-size: 16px;
  font-weight: 400;
  padding: 0 24px;

  p {
    margin: 30px 0;
  }

  a:not(.btn-floating) {
    position: relative;
    left: 20px;
  }

  .hoverline {
    border-bottom: 3px solid transparent !important;
    padding: 3px 3px 3px 3px;
    transition: 0.25s all;
    -moz-transition: 0.25s all;
    -webkit-transition: 0.25s all;

    &:hover {
      border-bottom: 3px solid rgb(0, 150, 136) !important;
    }
  }
`;

const Contact: FC<{}> = (): JSX.Element => (
  <>
    <Section id="contact" className="section scrollspy">
      <TitleHeader title="Contact" />
      <Container className="container">
        <p>
          <a
            aria-label="Email Andrew"
            href="mailto:ahummel25@gmail.com"
            className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            data-position="top"
            data-tooltip="Email Andrew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <a
            aria-label="Email Andrew"
            href="mailto:ahummel25@gmail.com"
            className="teal-text hoverline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ahummel25@gmail.com
          </a>
        </p>
        <p>
          <a
            aria-label="View Andrew on GitHub"
            href="https://github.com/ahummel25"
            className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            data-position="top"
            data-tooltip="View Andrew on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            aria-label="Andrew on Github"
            href="https://github.com/ahummel25"
            className="teal-text hoverline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/ahummel25
          </a>
        </p>
        <p>
          <a
            aria-label="View Andrew on LinkedIn"
            href="https://www.linkedin.com/in/andrew-hummel-7b618719"
            className="btn-floating btn-large waves-effect waves-light brown tooltipped"
            data-position="top"
            data-tooltip="View Andrew on LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            aria-label="Andrew on LinkedIn"
            href="https://www.linkedin.com/in/andrew-hummel-7b618719"
            className="teal-text hoverline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/andrew-hummel
          </a>
        </p>
      </Container>
    </Section>
  </>
);

export default Contact;
