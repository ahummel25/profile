import { useEffect, useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { IImages, IWeatherResponse } from '../interfaces';
import { baseWeatherUrl } from '../services/api';
import { getFixedFahrenheit } from '../utils';

export const useGetFixedFahrenheit = (temp?: number): string | null => {
  const fixedTemp = useMemo(() => getFixedFahrenheit(temp), [temp]);
  return fixedTemp;
};

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

export const useGetWeatherByZip = (
  zipCode = '60607',
  units = 'imperial'
): IWeatherResponse | null => {
  const [
    weatherResponse,
    setWeatherResponse
  ] = useState<IWeatherResponse | null>(null);

  useEffect((): void => {
    const getWeatherByZip = async (): Promise<void> => {
      const response = await fetch(
        `${baseWeatherUrl}/weather?zip=${zipCode},us&appid=5b1d835b5bf579d2b7f14a0380ba99f9&units=${units}`
      );
      const weather: IWeatherResponse = await response.json();
      setWeatherResponse(weather);
    };

    getWeatherByZip();
  }, []);

  return weatherResponse;
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
