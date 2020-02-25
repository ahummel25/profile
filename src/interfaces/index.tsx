import { MutableRefObject } from "react";
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
    [key: string]: {
      ref: MutableRefObject<HTMLDivElement | null>;
      onClickHandler: () => void;
    };
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

export interface HeaderProps extends ForwardedRefsProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavbarProps extends ForwardedRefsProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface TitleProps extends ForwardedRefsProps {
  title: string;
}

export interface HamburgerProps extends ForwardedRefsProps {}
export interface IndexLayoutProps extends ForwardedRefsProps {}
export interface ProfileProps extends ForwardedRefsProps {}
