import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { TitleProps } from "../interfaces";
import { heights, dimensions, colors, fonts } from "../styles/variables";
import Container from "./Container";
import Hamburger from "./Mobile/Hamburger";
import SocialIcons from "./SocialIcons";

const StyledHeaderTop = styled.nav`
  @media screen and (max-width: 760px) {
    height: ${heights.header * 0.425}px;
  }
  @media screen and (min-width: 760px) {
    height: ${heights.header * 0.75}px;
    transition: 0.2s ease-in;
  }
  background-color: ${colors.darkBlue};
  //border-color: rgba(111, 111, 111, 0.2) transparent transparent;
  border-bottom: 1.25px solid #3f6380;
  padding: 0 ${dimensions.containerPadding}rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const HeaderTop = styled(Container)`
  @media screen and (max-width: 760px) {
    right: 5px;
  }
  @media screen and (min-width: 760px) {
    float: left;
  }
  display: flex;
  flex-direction: row;
`;

const HomepageLink = styled(Link)`
  @media screen and (max-width: 374px) {
    font-size: 1rem;
    margin-top: 5px;
    padding-top: ${dimensions.containerPaddingLg * 0.25}rem;
  }
  @media screen and (min-width: 375px) and (max-width: 410px) {
    font-size: 1rem;
    margin-top: 5px;
  }
  @media screen and (min-width: 481px) and (max-width: 800px) {
    font-size: 1.75rem;
    padding-top: ${dimensions.containerPaddingLg * 1.35}rem;
    padding-left: ${dimensions.containerPaddingLg * 1}rem;
    transition: 0.2s ease-in;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPaddingLg * 1.25}rem;
    padding-left: ${dimensions.containerPaddingLg * 1.5}rem;
    transition: 0.2s ease-in;
  }
  @media screen and (min-width: 1025px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPaddingLg * 1.25}rem;
    padding-left: ${dimensions.containerPaddingLg * 5}rem;
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

const Navbar: FC<TitleProps> = ({ title }): JSX.Element => (
  <StyledHeaderTop>
    <HeaderTop>
      <HomepageLink to="/">{title}</HomepageLink>
      <SocialIcons />
      <Hamburger />
    </HeaderTop>
  </StyledHeaderTop>
);

export default Navbar;
