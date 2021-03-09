import { MutableRefObject } from 'react';
import { FluidObject } from 'gatsby-image';
export interface IImages {
  [key: string]: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

export interface IWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
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
  // eslint-disable-next-line no-unused-vars
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavbarProps {
  // eslint-disable-next-line no-unused-vars
  setDrawerWidth: (drawerWidth: number) => void;
}

export interface NavListProps {
  // eslint-disable-next-line no-unused-vars
  setOpen?: (open: boolean) => void;
}
