jest.mock('../src/hooks', () => ({
  useGetWeatherByCoords: jest.fn()
}));

import { renderHook } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';

import mockWeatherResponse from '../__mocks__/mock-weather';
import { useGetWeatherByCoords } from '../src/hooks';

const mockUseGetWeatherByCoords = mocked(useGetWeatherByCoords, true);

describe('useGetWeatherByCoords', () => {
  afterEach(() => {
    mockUseGetWeatherByCoords.mockReset();
  });

  it('should return data with a successful request', () => {
    mockUseGetWeatherByCoords.mockImplementation(() => mockWeatherResponse);
    const response = renderHook(() => useGetWeatherByCoords());

    expect(mockUseGetWeatherByCoords).toHaveBeenCalledTimes(1);
    expect(response.result.current).toEqual(mockWeatherResponse);
  });

  it('should return no data when an non-successful response occurs', () => {
    mockUseGetWeatherByCoords.mockImplementation(() => null);
    const response = renderHook(() => useGetWeatherByCoords());

    expect(mockUseGetWeatherByCoords).toHaveBeenCalledTimes(1);
    expect(response.result.current).toBe(null);
  });
});
