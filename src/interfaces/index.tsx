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
  refsToForward?: {
    [key: string]: RefObject<HTMLDivElement>;
  };
}

export interface LayoutMainProps {
  paddingLeft: number;
}

export interface LinkProps {
  text: string;
  onClickHandler: () => void;
}

export interface DropDownListProps {
  listRoot: string;
  listItemRoot: string;
  links: LinkProps[];
}

export interface HeaderProps extends TitleProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavbarProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface TitleProps extends ForwardedRefsProps {
  title: string;
}

export interface HamburgerProps extends ForwardedRefsProps {}
export interface NavbarLinksProps extends ForwardedRefsProps {}
export interface IndexLayoutProps extends ForwardedRefsProps {}
export interface ProfileProps extends ForwardedRefsProps {}
