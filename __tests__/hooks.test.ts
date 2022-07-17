import {
  cleanup,
  renderHook,
  RenderHookResult
} from '@testing-library/react-hooks';
import fetchMock from 'fetch-mock';
import { act } from 'react-test-renderer';

import mockWeatherResponse from '../__mocks__/mock-weather';
import { baseWeatherUrl } from '../src/services/api';
import { useGetWeatherByCoords, useWindowDimensions } from '../src/hooks';
import { IWeatherResponse } from '../src/interfaces';

jest.unmock('../src/hooks');

const latitude1 = -87.66;
const latitude2 = -88.66;
const longitude = 41.89;
const mockWeatherApiUrl1 = `${baseWeatherUrl}/weather?lat=${latitude1}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=imperial`;
const mockWeatherApiUrl2 = `${baseWeatherUrl}/weather?lat=${latitude2}&lon=${longitude}&appid=${process.env.GATSBY_WEATHER_API_KEY}&units=imperial`;
let response:
  | RenderHookResult<
      string,
      IWeatherResponse | { width: number; height: number } | null
    >
  | undefined;

interface WindowDimensions {
  width: number;
  height: number;
}

const mockGeolocation = (
  latitude: number
): { [getCurrentPosition: string]: jest.Mock } => ({
  getCurrentPosition: jest
    .fn()
    // eslint-disable-next-line no-unused-vars
    .mockImplementationOnce((success: (s: Record<string, unknown>) => void) =>
      Promise.resolve(
        success({
          coords: {
            latitude,
            longitude
          }
        })
      )
    )
});

describe('useGetWeatherByCoords', () => {
  afterEach(() => {
    fetchMock.restore();
    cleanup();
  });

  it('should return data with a successful request', async () => {
    // @ts-ignore
    navigator.geolocation = mockGeolocation(latitude1);

    fetchMock.mock(mockWeatherApiUrl1, mockWeatherResponse);

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalled = fetchMock.called(mockWeatherApiUrl1);

    expect(fetchCalled).toBe(true);
    expect(response?.result.current).toStrictEqual(mockWeatherResponse);
  });

  it('should return no data when the call to the weather API fails', async () => {
    // @ts-ignore
    navigator.geolocation = mockGeolocation(latitude2);

    fetchMock.mock(mockWeatherApiUrl2, () => {
      throw new Error('fetch failed');
    });

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalled = fetchMock.called(mockWeatherApiUrl2);

    expect(fetchCalled).toBe(true);
    expect(response?.result.current).toBe(null);
  });

  it('should not fetch weather if navigator getCurrentPosition call fails', async () => {
    navigator.geolocation.getCurrentPosition = jest
      .fn()
      .mockImplementationOnce((
        // eslint-disable-next-line no-unused-vars
        _success: (s: Record<string, unknown>) => void,
        // eslint-disable-next-line no-unused-vars
        error: (err: Record<string, unknown>) => void
      ) =>
        Promise.resolve(
          error({ code: 1, message: 'Geolocation access is denied!' })
        )
      );

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalls = fetchMock.calls();

    expect(fetchCalls.length).toBe(0);
    expect(response?.result.current).toBe(null);
  });

  it('should not fetch weather if geolocation is not supported in the browser', async () => {
    // @ts-ignore
    navigator.geolocation = false;

    await act(async () => {
      response = renderHook(() => useGetWeatherByCoords());
    });

    const fetchCalls = fetchMock.calls();

    expect(fetchCalls.length).toBe(0);
    expect(response?.result.current).toBe(null);
  });

  it('should test useWindowDimensions', async () => {
    await act(async () => {
      response = renderHook(() => useWindowDimensions());
    });

    const keys = Object.keys(
      response?.result.current as WindowDimensions
    ) as Array<keyof WindowDimensions>;

    expect(keys.length).toBe(2);
    expect(keys[0]).toBe('width');
    expect(keys[1]).toBe('height');

    const currentValue = response?.result.current as WindowDimensions;

    keys.forEach((key): void => {
      expect(currentValue[key]).toBeDefined();
      expect(typeof currentValue[key]).toBe('number');
    });
  });
});
