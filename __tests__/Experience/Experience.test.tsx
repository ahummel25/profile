import React from 'react';
import renderer from 'react-test-renderer';

import Experience from '../../src/components/Experience';

describe('Experience', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Experience />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
