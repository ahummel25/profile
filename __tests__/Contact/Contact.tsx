import React from 'react';
import renderer from 'react-test-renderer';

import Contact from '../../src/components/Contact';

describe('Contact', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Contact />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
