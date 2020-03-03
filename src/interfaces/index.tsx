import { MutableRefObject } from 'react';
import { FluidObject } from 'gatsby-image';
export interface IImages {
  [key: string]: {
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

export interface HeaderProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavbarProps {
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavListProps {
  setOpen?: (open: boolean) => void;
}
