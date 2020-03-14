jest.mock('../../src/hooks', () => ({
  useGetFixedFahrenheit: jest.fn(),
  useGetImages: jest.fn(),
  useWindowDimensions: jest.fn().mockImplementationOnce(() => ({
    width: 0,
    height: 0
  })),
  useGetWeatherByCoords: jest.fn()
}));

import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { mocked } from 'ts-jest/utils';

import Navbar from '../../src/components/Navbar';
import { useWindowDimensions } from '../../src/hooks';

const mockUseWindowDimensions = mocked(useWindowDimensions, true);

describe('Navbar', () => {
  const setDrawerWidth = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar setDrawerWidth={setDrawerWidth} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mobile version of drawer', () => {
    let tree;
    // const toggleDrawer = jest.fn().mockImplementation();

    mockUseWindowDimensions.mockImplementation(() => ({
      width: 799,
      height: 799
    }));

    act(() => {
      tree = renderer.create(<Navbar setDrawerWidth={setDrawerWidth} />);
    });

    // @ts-ignore
    expect(tree.root.props.setDrawerWidth).toBe(setDrawerWidth);
    // @ts-ignore
    expect(tree.toJSON().children[0].children[0].props.onClick).toBeTruthy();
  });

  it('renders correctly with full version of drawer', () => {
    let tree;

    mockUseWindowDimensions.mockImplementation(() => ({
      width: 1200,
      height: 1200
    }));

    act(() => {
      tree = renderer.create(<Navbar setDrawerWidth={setDrawerWidth} />);
    });

    // @ts-ignore
    expect(tree.root.props.setDrawerWidth).toBe(setDrawerWidth);
    // @ts-ignore
    expect(tree.toJSON().children[0].children[0].props).toStrictEqual({
      className: 'name-title'
    });
    // @ts-ignore
    expect(tree.toJSON().children[0].children[0].props.onClick).toBeFalsy();
  });
});
