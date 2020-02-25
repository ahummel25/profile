import { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ImageProfileData } from "../interfaces";

export const useGetProfileImage = (): ImageProfileData => {
  const imgData = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "me_full.jpg" }) {
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

export const useWindowDimensions = (): { width: number; height: number } => {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};
