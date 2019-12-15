import { RefObject } from "react";
import { FluidObject } from "gatsby-image";

export interface DropDownListProps {
  listRoot: string;
  listItemRoot: string;
}
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

export interface TitleProps extends ForwardedRefsProps {
  title: string;
}

export interface NavbarProps extends TitleProps {}
export interface HeaderProps extends TitleProps {}
export interface IndexLayoutProps extends ForwardedRefsProps {}
export interface NavbarLinksProps extends ForwardedRefsProps {}
export interface ProfileProps extends ForwardedRefsProps {}
