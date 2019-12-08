import React, { FC } from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";
import { SocialIcon } from "react-social-icons";
import { TitleProps } from "../interfaces";
import { heights, dimensions, colors, fonts } from "../styles/variables";
import Container from "./Container";

const StyledHeaderTop = styled.header`
  @media screen and (max-width: 760px) {
    height: ${heights.header * 0.425}px;
  }

  @media screen and (min-width: 760px) {
    height: ${heights.header * 0.75}px;
    transition: 0.2s ease-in;
  }
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.darkBlue};
  color: ${transparentize(1, colors.white)};
`;

const HeaderTop = styled(Container)`
  @media screen and (max-width: 760px) {
    right: 5px;
  }
  @media screen and (min-width: 760px) {
    float: left;
  }
  padding: 0 ${dimensions.containerPadding}rem;
  display: flex;
  flex-direction: row;
`;

const HomepageLink = styled(Link)`
  @media screen and (max-width: 480px) {
    font-size: 0.75rem;
  }
  @media screen and (max-width: 760px) {
    padding-top: ${dimensions.containerPadding * 0.65}rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPadding * 1.25}rem;
    transition: 0.2s ease-in;
  }
  color: ${colors.white};
  font-family: ${fonts.helvetica};
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const GitIconWrapper = styled.div`
  @media screen and (max-width: 760px) {
    padding-top: 15px;
  }
  @media screen and (min-width: 760px) {
    padding-top: 35px;
  }
  display: flex;
  flex-direction: row;
  padding-left: 20px;
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

const Navbar: FC<TitleProps> = ({ title }): JSX.Element => (
  <StyledHeaderTop>
    <HeaderTop>
      <HomepageLink to="/">{title}</HomepageLink>
      <GitIconWrapper>
        <SocialIcon url="https://www.linkedin.com/in/andrew-hummel-7b618719/"></SocialIcon>
        <SocialIcon url="https://github.com/ahummel25"></SocialIcon>
        <SocialIcon url="https://stackoverflow.com/"></SocialIcon>
      </GitIconWrapper>
    </HeaderTop>
  </StyledHeaderTop>
);

export default Navbar;
