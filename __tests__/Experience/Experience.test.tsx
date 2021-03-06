import React from 'react';
import renderer from 'react-test-renderer';
import { GatsbyImage } from 'gatsby-plugin-image';

import Experience from '../../src/components/Experience';

describe('Experience', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Experience />);

    expect(tree).toBeDefined();
  });

  it('renders the correct number of images', () => {
    const tree = renderer.create(<Experience />);

    const images = tree.root.findAllByType(GatsbyImage);

    expect(images.length).toBe(4);
  });
});
