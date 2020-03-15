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
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import renderer, { act } from 'react-test-renderer';
import { mocked } from 'ts-jest/utils';

import Navbar from '../../src/components/Navbar';
import { useWindowDimensions } from '../../src/hooks';

const mockUseWindowDimensions = mocked(useWindowDimensions, true);

describe('Navbar', () => {
  const DRAWER_WIDTH = 190;
  const setDrawerWidth = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    mockUseWindowDimensions.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar setDrawerWidth={setDrawerWidth} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with mobile version of drawer', () => {
    let tree;

    mockUseWindowDimensions.mockImplementation(() => ({
      width: 799,
      height: 799
    }));

    act(() => {
      tree = renderer.create(<Navbar setDrawerWidth={setDrawerWidth} />);
    });

    // @ts-ignore
    expect(tree.root.props.setDrawerWidth.mock.calls[0][0]).toBe(DRAWER_WIDTH);

    // @ts-ignore
    const lis = tree.root.findAllByType('li');
    expect(lis.length).toBe(0);

    // @ts-ignore
    const mobileAppBar = tree.root.findAllByType(AppBar);

    expect(mobileAppBar.length).toBe(1);
    expect(mobileAppBar[0].props.color).toBe('inherit');
    expect(mobileAppBar[0].props.position).toBe('fixed');

    // @ts-ignore
    const mobileDrawer = tree.root.findAllByType(Drawer);
    expect(mobileDrawer.length).toBe(1);
    expect(mobileDrawer[0].props.onClose).toBeTruthy();
    expect(mobileDrawer[0].props.open).toBe(false);
    expect(mobileDrawer[0].props.children[2].props.setOpen).toBeTruthy();

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
    expect(tree.root.props.setDrawerWidth.mock.calls[0][0]).toBe(DRAWER_WIDTH);

    // @ts-ignore
    const lis = tree.root.findAllByType('li');
    expect(lis.length).toBe(5);

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
