import {
  cleanup,
  renderHook,
  RenderHookResult
} from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';

import mockWeatherResponse from '../__mocks__/mock-weather';
import { baseWeatherUrl } from '../src/services/api';
import { useGetWeatherByCoords } from '../src/hooks';

jest.unmock('../src/hooks');

describe('useGetWeatherByCoords', () => {
  const latitude = -87.66;
  const longitude = 41.89;
  const mockWeatherApiUrl = `${baseWeatherUrl}/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=imperial`;
  let response: RenderHookResult<string, unknown> | undefined;

  afterEach(() => {
    fetchMock.restore();
    cleanup();
  });

  it('should return data with a successful request', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce(
          (success: (s: Record<string, unknown>) => void) =>
            Promise.resolve(
              success({
                coords: {
                  latitude,
                  longitude
                }
              })
            )
        )
    };

    // @ts-ignore
    navigator.geolocation = mockGeolocation;

    fetchMock.mock(mockWeatherApiUrl, mockWeatherResponse);

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalled = fetchMock.called(mockWeatherApiUrl);

    expect(fetchCalled).toBe(true);
    expect(response?.result.current).toStrictEqual(mockWeatherResponse);
  });

  it('should not fetch weather if navigator getCurrentPosition call fails', async () => {
    const mockGeolocation = {
      getCurrentPosition: jest
        .fn()
        .mockImplementationOnce(
          (
            _success: (s: Record<string, unknown>) => void,
            error: (err: Record<string, unknown>) => void
          ) =>
            Promise.resolve(
              error({ code: 1, message: 'Geolocation access is denied!' })
            )
        )
    };

    // @ts-ignore
    navigator.geolocation = mockGeolocation;

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalled = fetchMock.called(mockWeatherApiUrl);

    expect(fetchCalled).toBe(false);
  });

  it('should not fetch weather if geolocation is not supported in the browser', async () => {
    // @ts-ignore
    navigator.geolocation = false;

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalled = fetchMock.called(mockWeatherApiUrl);

    expect(fetchCalled).toBe(false);
  });
});
