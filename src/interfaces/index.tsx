import { RefObject } from "react";
import { FluidObject } from "gatsby-image";
export interface ImageProfileData {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface ForwardedRefsProps {
  refsToForward: {
    [key: string]: RefObject<HTMLDivElement>;
  };
}

export interface LinkProps {
  text: string;
  ref: RefObject<HTMLDivElement>;
}

export interface DropDownListProps {
  listRoot: string;
  listItemRoot: string;
  links: LinkProps[];
}

export interface TitleProps extends ForwardedRefsProps {
  title: string;
}

export interface HamburgerProps extends ForwardedRefsProps {}
export interface HeaderProps extends TitleProps {}
export interface NavbarProps extends TitleProps {}
export interface NavbarLinksProps extends ForwardedRefsProps {}
export interface IndexLayoutProps extends ForwardedRefsProps {}
export interface ProfileProps extends ForwardedRefsProps {}
