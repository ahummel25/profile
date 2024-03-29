import React from 'react';
import { create } from 'react-test-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';

import Header from '../../src/components/Header';
import Navbar from '../../src/components/Navbar';

describe('Header', () => {
  const setDrawerWidth = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const tree = create(<Header setDrawerWidth={setDrawerWidth} />);

    expect(tree).toBeDefined();
  });

  it('renders the correct number of images', () => {
    const tree = create(<Header setDrawerWidth={setDrawerWidth} />);

    const images = tree.root.findAllByType(GatsbyImage);

    expect(images.length).toBe(1);
  });

  it('has correct props for subcomponent and HTML element styles', () => {
    const tree = create(<Header setDrawerWidth={setDrawerWidth} />);
    const root = tree.root;

    expect(root.findByType(Navbar).props.setDrawerWidth).toBe(setDrawerWidth);

    const section = root.findAll(el => el.type === 'section');
    expect(section).toHaveLength(1);
    expect(section[0].props.style).toStrictEqual({ display: 'contents' });
  });
});
