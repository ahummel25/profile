import { MutableRefObject } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IChildrenProp {
  children?: React.ReactNode;
}
export interface IImages {
  [key: string]: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
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

export interface LayoutMainProps extends IChildrenProp {
  paddingLeft: number;
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
