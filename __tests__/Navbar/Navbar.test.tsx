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

import React, { ReactNode, ReactHTMLElement } from 'react';
import { AppBar, Drawer } from '@mui/material';
import { act, create, ReactTestRenderer } from 'react-test-renderer';

import Navbar from '../../src/components/Navbar';
import * as Hooks from '../../src/hooks';

const DRAWER_WIDTH = 190;
const setDrawerWidth = jest.fn();

const mockUseWindowDimensions = jest.spyOn(Hooks, 'useWindowDimensions');
let tree: ReactTestRenderer;

describe('Navbar', () => {
  beforeEach(() => {
    mockUseWindowDimensions.mockClear();
  });

  it('renders', () => {
    mockUseWindowDimensions.mockReturnValue({
      width: 1200,
      height: 1200
    });

    act(() => {
      tree = create(<Navbar setDrawerWidth={setDrawerWidth} />);
    });
    expect(tree).toBeDefined();
  });
});

describe('Mobile Navbar', () => {
  beforeEach(() => {
    mockUseWindowDimensions.mockClear();
  });

  it('renders correctly with mobile version of drawer', () => {
    mockUseWindowDimensions.mockReturnValue({
      width: 799,
      height: 799
    });

    act(() => {
      tree = create(<Navbar setDrawerWidth={setDrawerWidth} />, {
        createNodeMock: (node: ReactHTMLElement<HTMLElement>): HTMLElement =>
          document.createElement(node.type)
      });
    });

    expect(setDrawerWidth).toHaveBeenCalledWith(DRAWER_WIDTH);
    expect(mockUseWindowDimensions).toHaveBeenCalled();

    let lis = tree.root.findAllByType('li');
    expect(lis.length).toBe(0);

    const mobileAppBar = tree.root.findAllByType(AppBar);
    expect(mobileAppBar.length).toBe(1);
    expect(mobileAppBar[0].props.color).toBe('inherit');
    expect(mobileAppBar[0].props.position).toBe('sticky');

    const mobileDrawer = tree.root.findAllByType(Drawer);
    expect(mobileDrawer.length).toBe(1);
    expect(mobileDrawer[0].props.onClose).toBeTruthy();
    expect(mobileDrawer[0].props.open).toBe(false);
    expect(mobileDrawer[0].props.children[2].props.setOpen).toBeTruthy();
    expect(typeof tree.root.props.setDrawerWidth).toBe('function');

    const treeJson = tree.toJSON();
    // @ts-ignore
    expect(treeJson.children[0].children[0].props.onClick).toBeTruthy();

    const as = tree.root.findAllByType('a');
    const e = { preventDefault: jest.fn(), key: 'Tab', type: 'keydown' };

    // Mobile drawer will not be open due to event type
    act(() => {
      as[0].props.onClick(e);
    });

    expect(mobileDrawer[0].props.open).toBe(false);

    // Change the event type to a click
    e.type = 'click';

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
  beforeEach(() => {
    mockUseWindowDimensions.mockClear();
  });
  it('renders correctly with full version of drawer', () => {
    mockUseWindowDimensions.mockImplementation(() => ({
      width: 1200,
      height: 1200
    }));

    act(() => {
      tree = create(<Navbar setDrawerWidth={setDrawerWidth} />);
    });

    expect(setDrawerWidth).toHaveBeenCalledWith(DRAWER_WIDTH);
    expect(mockUseWindowDimensions).toHaveBeenCalled();

    const lis = tree.root.findAllByType('li');
    expect(lis.length).toBe(5);

    const treeJson = tree.toJSON();
    // @ts-ignore
    expect(treeJson.children[0].children[0].props).toStrictEqual({
      className: 'name-title'
    });
    // @ts-ignore
    expect(treeJson.children[0].children[0].props.onClick).toBeFalsy();
  });
});
