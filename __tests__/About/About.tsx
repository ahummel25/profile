import React from 'react';
import renderer from 'react-test-renderer';

import About from '../../src/components/About';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<About />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
