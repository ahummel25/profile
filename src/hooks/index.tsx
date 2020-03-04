import { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { IImages } from '../interfaces';

export const useGetImages = (): IImages => {
  const imgData = useStaticQuery(
    graphql`
      query {
        awsImg: file(relativePath: { eq: "aws.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        i11Img: file(relativePath: { eq: "i11.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        juristatImg: file(relativePath: { eq: "juristat.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 60, maxHeight: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        profileImg: file(relativePath: { eq: "me_full.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wwtImg: file(relativePath: { eq: "wwt.png" }) {
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

export const useWindowDimensions = (): { width: number; height: number } => {
  const getWindowDimensions = (): { width: number; height: number } => {
    let width = 0;
    let height = 0;
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      width = innerWidth;
      height = innerHeight;
    }

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
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
