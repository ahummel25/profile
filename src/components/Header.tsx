import React, { FC } from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { useGetProfileImage } from "../hooks";
import { heights, dimensions, colors, fonts } from "../styles/variables";
import Container from "./Container";

const StyledHeaderTop = styled.header`
  height: ${heights.header * 1.25}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.darkBlue};
  color: ${transparentize(1, colors.white)};
`;

const HeaderTop = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: left;
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
  color: ${colors.white};
  font-family: ${fonts.helvetica};
  font-size: 1.875rem;
  font-weight: 700;
  padding-top: ${dimensions.containerPadding * 2}rem;
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

interface HeaderProps {
  headerTitle: string;
}

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
