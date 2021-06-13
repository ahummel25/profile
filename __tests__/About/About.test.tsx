import React from 'react';
import renderer from 'react-test-renderer';

import About from '../../src/components/About';

describe('About', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<About />);

    expect(tree).toBeDefined();
  });
});
