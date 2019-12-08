import { FluidObject } from "gatsby-image";

export interface TitleProps {
  title: string;
}
export interface ImageProfileData {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
