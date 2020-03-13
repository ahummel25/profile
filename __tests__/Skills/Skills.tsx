import React from 'react';
import renderer from 'react-test-renderer';

import Skills from '../../src/components/Skills';

describe('Skills', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Skills />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
