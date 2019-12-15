import React, { createRef, FC, RefObject } from "react";
import styled from "@emotion/styled";

import { NavbarLinksProps } from "../interfaces";
import { heights, dimensions, colors, fonts } from "../styles/variables";

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
  //   @media screen and (min-width: 481px) and (max-width: 900px) {
  //     padding: 10px 15px;
  //   }
  color: ${colors.white};
  cursor: pointer;
  display: inline;
  padding: 10px 15px;
  position: relative;
  text-transform: uppercase;
`;

const handleScrollTo = (elRef: RefObject<HTMLDivElement>): void => {
  if (elRef.current) {
    //Scroll the element into view
    elRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

const NavbarLinks: FC<NavbarLinksProps> = ({ refsToForward }): JSX.Element => {
  const links = [
    {
      text: "About Me",
      onClickHandler: () => {
        handleScrollTo(refsToForward.aboutRef);
      }
    },
    {
      text: "Interests",
      onClickHandler: () => {
        handleScrollTo(refsToForward.aboutRef);
      }
    },
    {
      text: "Contact",
      onClickHandler: () => {
        handleScrollTo(refsToForward.aboutRef);
      }
    }
  ];

  return (
    <StyledNavbarLinksContainer>
      <StyledUl>
        {links.map(
          (link: { text: string; onClickHandler: () => void }): JSX.Element => (
            <StyledLi
              key={link.text}
              onClick={(): void => {
                link.onClickHandler();
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
