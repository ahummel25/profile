import React, { FC } from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";

import Navbar from "../components/Navbar";
import { useGetProfileImage } from "../hooks";
import { HeaderProps } from "../interfaces";

const ImgStyled = styled(({ ...rest }) => <Img {...rest} />)`
  @media (max-width: 599px) {
    margin-top: 60px;
  }
  @media (min-width: 992px) {
    margin-top: 0;
  }
  margin-top: 64px;
  display: inline-block;
`;

const Header: FC<HeaderProps> = ({ setDrawerWidth }): JSX.Element => {
  const imgData = useGetProfileImage();

  return (
    <section id="header" className="scrollspy" style={{ display: "contents" }}>
      <Navbar setDrawerWidth={setDrawerWidth} />
      <ImgStyled
        fluid={imgData.file.childImageSharp.fluid}
        alt="Profile Shot"
      />
    </section>
  );
};

export default Header;
