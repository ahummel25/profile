jest.mock('../src/hooks', () => ({
  useGetWeatherByCoords: jest.fn()
}));

import fetchMock, { FetchMockStatic } from 'fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';

import mockWeatherResponse from '../__mocks__/mock-weather';
import { useGetWeatherByCoords } from '../src/hooks';
import { baseWeatherUrl } from '../src/services/api';

interface IMockWeatherResponse extends FetchMockStatic {
  routes?: {
    response: {
      status: number;
      error: string;
    };
    url: string;
    identifier: string;
    usesBody: boolean;
  }[];
}

const mockUseGetWeatherByCoords = mocked(useGetWeatherByCoords, true);

describe('useGetWeatherByCoords', () => {
  const latitude = -87.66;
  const longitude = 41.89;
  const mockWeatherApiUrl = `${baseWeatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=imperial`;

  afterEach(() => {
    fetchMock.restore();
  });

  it('should return data with a successful request', () => {
    mockUseGetWeatherByCoords.mockImplementation(() => mockWeatherResponse);
    const response = renderHook(() => useGetWeatherByCoords());

    fetchMock.mock(mockWeatherApiUrl, mockWeatherResponse);
    expect(mockUseGetWeatherByCoords).toHaveBeenCalled();
    expect(response.result.current).toEqual(mockWeatherResponse);
  });

  it('should return no data with an error', () => {
    mockUseGetWeatherByCoords.mockImplementation(() => null);
    const response = renderHook(() => useGetWeatherByCoords());

    const mockErrorResponse: IMockWeatherResponse = fetchMock.mock(
      mockWeatherApiUrl,
      {
        status: 500,
        error: 'Something went wrong!'
      }
    );

    expect(mockUseGetWeatherByCoords).toHaveBeenCalled();
    expect(response.result.current).toBe(null);

    if (mockErrorResponse.routes) {
      expect(mockErrorResponse.routes[0].response.status).toBe(500);
      expect(mockErrorResponse.routes[0].response.error).toBe(
        'Something went wrong!'
      );
    }
  });
});
