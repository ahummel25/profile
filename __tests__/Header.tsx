jest.mock('../src/hooks', () => ({
  useGetFixedFahrenheit: (temp: number): string => `${temp.toFixed()}`,
  useGetImages: (): IImages => ({
    profileImg: {
      childImageSharp: {
        fluid: {
          aspectRatio: 1.5664414414414414,
          base64:
            'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEj',
          src:
            '/static/a68ec0a3134b8610c476cd0fa3c0cf7e/2f1b1/my_mock_image.jpg',
          srcSet: `/static/a68ec0a3134b8610c476cd0fa3c0cf7e/fd013/my_mock_image.jpg 200w,
				  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/25252/my_mock_image.jpg 400w,
				  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/2f1b1/my_mock_image.jpg 800w,
				  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/0ff54/my_mock_image.jpg 1200w,
				  /static/a68ec0a3134b8610c476cd0fa3c0cf7e/6d185/my_mock_image.jpg 1391w`,
          sizes: '(max-width: 800px) 100vw, 800px'
        }
      }
    }
  }),
  useWindowDimensions: (): { width: number; height: number } => ({
    height: 100,
    width: 100
  }),
  useGetWeatherByCoords: (): IWeatherResponse => ({
    coord: {
      lon: -87.66,
      lat: 41.89
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n'
      }
    ],
    base: 'stations',
    main: {
      temp: 52.48,
      feels_like: 48.56,
      temp_min: 48.99,
      temp_max: 55.99,
      pressure: 1004,
      humidity: 82
    },
    visibility: 16093,
    wind: {
      speed: 5.82,
      deg: 240,
      gust: 10
    },
    clouds: {
      all: 90
    },
    dt: 1584060065,
    sys: {
      type: 1,
      id: 4505,
      country: 'US',
      sunrise: 1584014806,
      sunset: 1584057231
    },
    timezone: -18000,
    id: 4887398,
    name: 'Chicago',
    cod: 200
  })
}));

import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/Header';
import { IImages, IWeatherResponse } from '../src/interfaces';

describe('Header', () => {
  const setDrawerWidth = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<Header setDrawerWidth={setDrawerWidth} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
