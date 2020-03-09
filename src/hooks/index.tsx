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

export const useGetWeatherByCoords = (
  units = 'imperial'
): IWeatherResponse | null => {
  const [
    weatherResponse,
    setWeatherResponse
  ] = useState<IWeatherResponse | null>(null);

  useEffect(() => {
    let mounted = true;
    const getWeatherByCoords = async (): Promise<void> => {
      const {
        coords: { latitude, longitude }
      }: Position = await new Promise((resolve, reject): void => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: Position): void => {
              resolve(position);
            },
            (err: PositionError): void => {
              if (err.code === 1) {
                reject('Error: Access is denied!');
              } else if (err.code === 2) {
                reject('Error: Position is unavailable!');
              }
            },
            { timeout: 60000 }
          );
        } else {
          reject('Sorry, browser does not support geolocation!');
        }
      });

      if (mounted) {
        const response = await fetch(
          `${baseWeatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=${units}`
        );
        const weather: IWeatherResponse = await response.json();
        setWeatherResponse(weather);
      }
    };

    getWeatherByCoords();

    return (): void => {
      mounted = false;
    };
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
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};
