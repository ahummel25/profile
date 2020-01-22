import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { NavbarProps } from "../interfaces";
import { heights, dimensions, colors, fonts } from "../styles/variables";
import Container from "./Container";
import Hamburger from "./Mobile/Hamburger";
import NavbarLinks from "./NavbarLinks";
import SocialIcons from "./SocialIcons";

const HeaderNav = styled.nav`
  @media screen and (max-width: 760px) {
    height: ${heights.header * 0.425}px;
  }
  @media screen and (min-width: 761px) {
    height: ${heights.header * 1.2}px;
  }
  @media screen and (min-width: 900px) {
    height: ${heights.header * 0.8}px;
  }
  background-color: ${colors.darkBlue};
  border-bottom: 1.25px solid ${colors.navbarBorder};
  font-family: ${fonts.helvetica};
  font-size: 20px;
  font-weight: bold;
  padding: 0 ${dimensions.containerPadding}rem;
  position: sticky;
  top: 0;
  transition: 0.2s ease-in;
  width: 100%;
  z-index: 1;
`;

const ChildHeaderContainer = styled(Container)`
  @media screen and (max-width: 760px) {
    right: 5px;
  }
  @media screen and (min-width: 760px) {
    float: left;
  }
  display: flex;
  align-items: center;
`;

const HomepageLink = styled(Link)`
  @media screen and (max-width: 375px) {
    font-size: 1rem;
    margin-top: 5px;
  }
  @media screen and (min-width: 376px) and (max-width: 480px) {
    font-size: 1rem;
    padding-top: ${dimensions.containerPaddingLg * 0.2}rem;
    padding-right: ${dimensions.containerPaddingLg * 0.5}rem;
  }
  @media screen and (min-width: 481px) and (max-width: 800px) {
    font-size: 1.75rem;
    padding-top: ${dimensions.containerPaddingLg}rem;
    padding-left: ${dimensions.containerPaddingLg * 1}rem;
    padding-right: ${dimensions.containerPaddingLg * 1}rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPaddingLg * 1}rem;
    padding-left: ${dimensions.containerPaddingLg * 1.5}rem;
    padding-right: ${dimensions.containerPaddingLg * 1}rem;
  }
  @media screen and (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPaddingLg * 1.1}rem;
    padding-left: ${dimensions.containerPaddingLg * 2}rem;
  }
  @media screen and (min-width: 1281px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPaddingLg * 1.1}rem;
    padding-left: ${dimensions.containerPaddingLg * 10}rem;
  }
  color: ${colors.white};
  font-family: ${fonts.helvetica};
  font-size: 19px;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.2s ease-in;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Navbar: FC<NavbarProps> = ({ title, refsToForward }): JSX.Element => (
  <HeaderNav>
    <ChildHeaderContainer>
      <HomepageLink to="/">{title}</HomepageLink>
      <SocialIcons />
      <Hamburger refsToForward={refsToForward} />
    </ChildHeaderContainer>
    <NavbarLinks refsToForward={refsToForward} />
  </HeaderNav>
);

export default Navbar;
