import React, { FC } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import { useGetProfileImage } from "../hooks";
import { TitleProps } from "../interfaces";
import { heights, dimensions, colors, fonts } from "../styles/variables";

const StyledHeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  color: ${colors.white};
  flex: auto;
  text-align: center;
  font-size: 1.5rem;
  background-color: ${colors.babyBlue};
  hr {
    margin: 15px auto 25px;
    max-width: 250px;
    padding: 0;
    border: 0;
    border-top: 4px solid;
  }
`;

const StyledHeaderProfile = styled.div`
  @media screen and (max-width: 480px) {
    width: 60%;
  }
  @media screen and (min-width: 600px) {
    width: 35%;
  }
  @media screen and (min-width: 900px) {
    width: 17%;
  }
  margin: 0 auto;
  padding: 0 ${dimensions.containerPaddingLg}rem;
  padding-top: 40px;
`;

const StyledHeaderText = styled.div`
  color: ${colors.white};
  font-family: ${fonts.helvetica};
  font-size: 2.25rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
`;

const ImgStyled = styled(Img)`
  @media screen and (max-width: 480px) {
    height: ${heights.header * 1.25}px;
  }
  height: ${heights.header * 1.5}px;
  border: 0.4em solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
`;

const Header: FC<TitleProps> = ({ title }): JSX.Element => {
  const imgData = useGetProfileImage();

  return (
    <>
      <Navbar title={title}></Navbar>
      <StyledHeaderContainer>
        <StyledHeaderProfile>
          <ImgStyled
            fluid={imgData.file.childImageSharp.fluid}
            alt="Head Shot"
          />
          <br />
        </StyledHeaderProfile>
        <StyledHeaderText>Andrew W. Hummel</StyledHeaderText>
        <hr />
        <span>Software Engineer based in Chicago, IL</span>
      </StyledHeaderContainer>
    </>
  );
};

export default Header;
