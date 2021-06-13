import { useEffect, useMemo, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { IImages, IWeatherResponse } from '../interfaces';
import { baseWeatherUrl } from '../services/api';
import { getFixedFahrenheit } from '../utils';

export const useGetFixedFahrenheit = (temp?: number): string | null => {
  const CONSTRAINEDTemp = useMemo(() => getFixedFahrenheit(temp), [temp]);
  return CONSTRAINEDTemp;
};

export const useGetImages = (): IImages => {
  const imgData = useStaticQuery(
    graphql`
      query {
        awsImg: file(relativePath: { eq: "aws.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        i11Img: file(relativePath: { eq: "i11.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        juristatImg: file(relativePath: { eq: "juristat.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        profileImg: file(relativePath: { eq: "me_full.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        wwtImg: file(relativePath: { eq: "wwt.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        htmlImg: file(relativePath: { eq: "html5.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        reactImg: file(relativePath: { eq: "react.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        cssImg: file(relativePath: { eq: "css3.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        sassImg: file(relativePath: { eq: "sass.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        bootstrapImg: file(relativePath: { eq: "bootstrap.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        materializeImg: file(relativePath: { eq: "materialize.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        styCompImg: file(relativePath: { eq: "styled_components.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        tsImg: file(relativePath: { eq: "typescript.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        jqueryImg: file(relativePath: { eq: "jquery.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        nodeImg: file(relativePath: { eq: "nodejs.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        pythonImg: file(relativePath: { eq: "python.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        goImg: file(relativePath: { eq: "golang.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        javaImg: file(relativePath: { eq: "java.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        mysqlImg: file(relativePath: { eq: "mysql.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        oracleImg: file(relativePath: { eq: "oracle.png" }) {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
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

  const positionOptions = { timeout: 60000, enableHighAccuracy: true };

  useEffect((): void => {
    const getWeatherByCoords = async (): Promise<void> => {
      const { coords }: GeolocationPosition = await new Promise(
        (resolve): void => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position: GeolocationPosition): void => {
                resolve(position);
              },
              (err: GeolocationPositionError): void => {
                console.debug(
                  `Error code ${err.code} while calling getCurrentPosition: ${err.message}`
                );
              },
              positionOptions
            );
          } else {
            console.debug('Sorry, your browser does not support geolocation!');
          }
        }
      );

      const latitude = coords?.latitude;
      const longitude = coords?.longitude;

      if (latitude && longitude) {
        try {
          const response = await fetch(
            `${baseWeatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=${units}`
          );
          const weather: IWeatherResponse = await response.json();

          setWeatherResponse(weather);
        } catch (err) {
          console.debug(`Error calling weather API: ${(err as Error).message}`);
        }
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
