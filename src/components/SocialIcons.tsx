import React, { FC } from 'react';
import styled from '@emotion/styled';
import { SocialIcon } from 'react-social-icons';

import { colors } from '../styles/variables';

const GitIconWrapper = styled.div`
  @media screen and (min-width: 376px) and (max-width: 480px) {
    font-size: 1rem;
    margin: 0;
    padding-right: 60px;
  }
  @media screen and (max-width: 760px) {
    padding-top: 15px;
  }
  @media screen and (min-width: 760px) {
    padding-top: 35px;
  }
  @media screen and (min-width: 1000px) {
    padding-left: 20px;
  }
  display: flex;
  .social-icon {
    box-sizing: content-box !important;
    height: 45px !important;
    width: 45px !important;
  }
  .social-container {
    border: 2px solid ${colors.white} !important;
    border-radius: 100%;
    height: 65% !important;
    width: 65% !important;

    .social-svg {
      stroke: ${colors.white};
      stroke-width: 1;
    }
    .social-svg-icon {
      fill: ${colors.white} !important;
    }
    .social-svg-mask {
      fill: ${colors.darkBlue} !important;
    }

    &:hover {
      .social-svg {
        stroke: ${colors.babyBlue};
        stroke-width: 1;
      }
      .social-svg-icon {
        fill: ${colors.babyBlue} !important;
      }
      .social-svg-mask {
        fill: ${colors.white} !important;
      }
    }
  }
`;

const SocialIcons: FC<{}> = (): JSX.Element => (
  <GitIconWrapper>
    <SocialIcon url="https://www.linkedin.com/in/andrew-hummel-7b618719/"></SocialIcon>
    <SocialIcon url="https://github.com/ahummel25"></SocialIcon>
    <SocialIcon url="https://stackoverflow.com/"></SocialIcon>
  </GitIconWrapper>
);

export default SocialIcons;
