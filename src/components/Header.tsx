import React, { FC } from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { useGetProfileImage } from "../hooks";
import { HeaderProps } from "../interfaces";
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
  @media screen and (min-width: 760px) {
    right: 80px;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledHeaderProfile = styled.header`
  height: ${heights.header * 3.5}px;
  width: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.babyBlue};
  color: ${transparentize(1, colors.white)};
`;

const HomepageLink = styled(Link)`
  @media screen and (max-width: 760px) {
    font-size: 1.275rem;
    padding-top: ${dimensions.containerPadding * 0.75}rem;
  }
  @media screen and (min-width: 760px) {
    font-size: 1.875rem;
    padding-top: ${dimensions.containerPadding * 1.25}rem;
    transition: 0.2s ease-in;
  }
  color: ${colors.white};
  font-family: ${fonts.helvetica};
  font-weight: 700;
  text-transform: uppercase;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const ImgStyled = styled(Img)`
  height: ${heights.header * 2}px;
  img {
    object-fit: scale-down !important;
    padding-top: 40px !important;
  }
`;

const Header: FC<HeaderProps> = ({ headerTitle }): JSX.Element => {
  const imgData = useGetProfileImage();

  return (
    <>
      <StyledHeaderTop>
        <HeaderTop>
          <HomepageLink to="/">{headerTitle}</HomepageLink>
        </HeaderTop>
      </StyledHeaderTop>
      <StyledHeaderProfile>
        <ImgStyled fluid={imgData.file.childImageSharp.fluid} alt="Head Shot" />
      </StyledHeaderProfile>
    </>
  );
};

export default Header;
