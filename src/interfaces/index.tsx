import { FluidObject } from "gatsby-image";

export interface HeaderProps {
  headerTitle: string;
}
export interface ImageProfileData {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
