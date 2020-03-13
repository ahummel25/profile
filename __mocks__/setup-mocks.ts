jest.mock('../src/hooks', () => ({
  useGetFixedFahrenheit: (temp: number): string => `${temp.toFixed()}`,
  useGetImages: (): IImages => ({
    ...mockImagesResponse
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

import { IImages, IWeatherResponse } from '../src/interfaces';
import mockImagesResponse from './mock-images';
