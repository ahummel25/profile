jest.mock('../../src/hooks', () => ({
  useGetFixedFahrenheit: jest.fn(),
  useGetImages: jest.fn(),
  useWindowDimensions: jest.fn().mockImplementationOnce(() => ({
    width: 0,
    height: 0
  })),
  useGetWeatherByCoords: jest.fn()
}));

jest.mock('react-dom', () => {
  const reactDom = jest.requireActual('react-dom');
  return {
    ...reactDom,
    createPortal: (element: ReactNode): ReactNode => element
  };
});

jest.mock('@material-ui/core/Fade');

import React, { ReactNode, ReactHTMLElement } from 'react';
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

  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar setDrawerWidth={setDrawerWidth} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('Mobile Navbar', () => {
    afterEach(() => {
      expect(mockUseWindowDimensions).toHaveBeenCalled();
      mockUseWindowDimensions.mockClear();
    });
    it('renders correctly with mobile version of drawer', () => {
      mockUseWindowDimensions.mockImplementation(() => ({
        width: 799,
        height: 799
      }));

      const tree = renderer.create(<Navbar setDrawerWidth={setDrawerWidth} />, {
        createNodeMock: (node: ReactHTMLElement<HTMLElement>): HTMLElement =>
          document.createElement(node.type)
      });

      expect(tree.root.props.setDrawerWidth).toHaveBeenCalledWith(DRAWER_WIDTH);
      expect(tree.root.props.setDrawerWidth.mock.calls[0][0]).toBe(
        DRAWER_WIDTH
      );

      let lis = tree.root.findAllByType('li');
      expect(lis.length).toBe(0);

      const mobileAppBar = tree.root.findAllByType(AppBar);
      expect(mobileAppBar.length).toBe(1);
      expect(mobileAppBar[0].props.color).toBe('inherit');
      expect(mobileAppBar[0].props.position).toBe('fixed');

      const mobileDrawer = tree.root.findAllByType(Drawer);
      expect(mobileDrawer.length).toBe(1);
      expect(mobileDrawer[0].props.onClose).toBeTruthy();
      expect(mobileDrawer[0].props.open).toBe(false);
      expect(mobileDrawer[0].props.children[2].props.setOpen).toBeTruthy();
      expect(typeof tree.root.props.setDrawerWidth).toBe('function');

      // @ts-ignore
      expect(tree.toJSON().children[0].children[0].props.onClick).toBeTruthy();

      const as = tree.root.findAllByType('a');
      const e = { preventDefault: jest.fn() };

      // Open mobile drawer
      act(() => {
        as[0].props.onClick(e);
      });

      expect(mobileDrawer[0].props.open).toBe(true);

      lis = tree.root.findAllByType('li');
      expect(lis.length).toBe(5);

      // Click an li and close mobile drawer
      act(() => {
        lis[0].props.children.props.onClick();
      });

      expect(mobileDrawer[0].props.open).toBe(false);
    });
  });

  describe('Desktop Navbar', () => {
    afterEach(() => {
      expect(mockUseWindowDimensions).toHaveBeenCalled();
      mockUseWindowDimensions.mockClear();
    });
    it('renders correctly with full version of drawer', () => {
      mockUseWindowDimensions.mockImplementation(() => ({
        width: 1200,
        height: 1200
      }));

      const tree = renderer.create(<Navbar setDrawerWidth={setDrawerWidth} />);

      expect(tree.root.props.setDrawerWidth).toHaveBeenCalledWith(DRAWER_WIDTH);
      expect(tree.root.props.setDrawerWidth.mock.calls[0][0]).toBe(
        DRAWER_WIDTH
      );

      const lis = tree.root.findAllByType('li');
      expect(lis.length).toBe(5);

      expect(tree.root.props.setDrawerWidth).toBe(setDrawerWidth);

      const treeJson = tree.toJSON();
      // @ts-ignore
      expect(treeJson.children[0].children[0].props).toStrictEqual({
        className: 'name-title'
      });
      // @ts-ignore
      expect(treeJson.children[0].children[0].props.onClick).toBeFalsy();
    });
  });
});