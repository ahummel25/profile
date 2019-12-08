import React, { FC } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import { useGetProfileImage } from "../hooks";
import { TitleProps } from "../interfaces";
import { heights, dimensions, colors } from "../styles/variables";

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.babyBlue};
`;

const StyledHeaderProfile = styled.header`
  @media screen and (max-width: 480px) {
    width: 60%;
  }
  @media screen and (min-width: 600px) {
    width: 35%;
  }
  @media screen and (min-width: 900px) {
    width: 17%;
  }
  height: 100%;
  padding: 0 ${dimensions.containerPadding}rem;
  padding-top: 40px !important;
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
          <br />
        </StyledHeaderProfile>
      </StyledHeaderContainer>
    </>
  );
};

export default Header;
