import { graphql, useStaticQuery } from "gatsby";
import { ImageProfileData } from "../interfaces";

export const useGetProfileImage = (): ImageProfileData => {
  const imgData = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "me.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return imgData;
};
