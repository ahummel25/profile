import console from 'console';

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
        htmlImg: file(relativePath: { eq: "html5.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        reactImg: file(relativePath: { eq: "react.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cssImg: file(relativePath: { eq: "css3.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sassImg: file(relativePath: { eq: "sass.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 140, maxHeight: 105) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bootstrapImg: file(relativePath: { eq: "bootstrap.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        materializeImg: file(relativePath: { eq: "materialize.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        styCompImg: file(relativePath: { eq: "styled_components.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tsImg: file(relativePath: { eq: "typescript.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jqueryImg: file(relativePath: { eq: "jquery.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nodeImg: file(relativePath: { eq: "nodejs.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pythonImg: file(relativePath: { eq: "python.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        goImg: file(relativePath: { eq: "golang.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        javaImg: file(relativePath: { eq: "java.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mysqlImg: file(relativePath: { eq: "mysql.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oracleImg: file(relativePath: { eq: "oracle.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 100, maxHeight: 100) {
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
  let latitude = 0;
  let longitude = 0;
  const [
    weatherResponse,
    setWeatherResponse
  ] = useState<IWeatherResponse | null>(null);

  const positionOptions = { timeout: 60000, enableHighAccuracy: true };

  useEffect((): void => {
    const getWeatherByCoords = async (): Promise<void> => {
      const { coords }: Position = await new Promise((resolve): void => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: Position): void => {
              resolve(position);
            },
            (err: PositionError): void => {
              if (typeof window !== 'undefined') {
                console.debug(
                  `Error code ${err.code} while calling getCurrentPosition: ${err.message}`
                );
              }
            },
            positionOptions
          );
        } else {
          if (typeof window !== 'undefined') {
            console.debug('Sorry, your browser does not support geolocation!');
          }
        }
      });

      latitude = coords?.latitude;
      longitude = coords?.longitude;

      if (latitude && longitude) {
        const response = await fetch(
          `${baseWeatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=${units}`
        );
        const weather: IWeatherResponse = await response.json();

        setWeatherResponse(weather);
      }
    };

    getWeatherByCoords();
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

  useEffect((): (() => void) => {
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
