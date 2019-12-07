import { FluidObject } from "gatsby-image";

export interface ImageProfileData {
  file: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}
