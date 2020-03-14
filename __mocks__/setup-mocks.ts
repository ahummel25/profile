jest.mock('../src/hooks', () => ({
  useGetFixedFahrenheit: (temp: number): string => `${temp.toFixed()}`,
  useGetImages: (): IImages => ({ ...mockImagesResponse }),
  useWindowDimensions: (): { width: number; height: number } => ({
    height: 799,
    width: 799
  }),
  useGetWeatherByCoords: (): IWeatherResponse => ({ ...mockWeatherResponse })
}));

import { IImages, IWeatherResponse } from '../src/interfaces';
import mockImagesResponse from './mock-images';
import mockWeatherResponse from './mock-weather';
