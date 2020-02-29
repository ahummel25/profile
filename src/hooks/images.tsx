import { graphql, useStaticQuery } from "gatsby";

import { ImageProfileData } from "../interfaces";

export const useGeti11Image = (): ImageProfileData => {
  const imgData = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "i11.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return imgData;
};
