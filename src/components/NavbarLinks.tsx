import React, { FC } from "react";
import styled from "@emotion/styled";

import { handleScrollTo } from "../utils";
import { LinkProps, NavbarLinksProps } from "../interfaces";
import { colors } from "../styles/variables";

const StyledNavbarLinksContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (min-width: 901px) and (max-width: 1179px) {
    justify-content: right;
  }
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  @media screen and (min-width: 481px) and (max-width: 900px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 901px) and (max-width: 1024px) {
    padding-bottom: 10px;
  }
  @media screen and (min-width: 1025px) {
    padding-bottom: 10px;
  }
  white-space: nowrap;
`;

const StyledLi = styled.li`
  color: ${colors.white};
  cursor: pointer;
  display: inline;
  padding: 10px 15px;
  position: relative;
  text-transform: uppercase;
`;

const NavbarLinks: FC<NavbarLinksProps> = ({ refsToForward }): JSX.Element => {
  const links = [
    {
      text: "About Me",
      ref: refsToForward.aboutRef
    },
    {
      text: "Interests",
      ref: refsToForward.aboutRef
    },
    {
      text: "Contact",
      ref: refsToForward.aboutRef
    }
  ];

  return (
    <StyledNavbarLinksContainer>
      <StyledUl>
        {links.map(
          (link: LinkProps): JSX.Element => (
            <StyledLi
              key={link.text}
              onClick={(): void => {
                handleScrollTo(link.ref);
              }}
            >
              {link.text}
            </StyledLi>
          )
        )}
      </StyledUl>
    </StyledNavbarLinksContainer>
  );
};

export default NavbarLinks;
