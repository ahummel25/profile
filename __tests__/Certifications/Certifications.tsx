import React from 'react';
import renderer from 'react-test-renderer';

import Certifications from '../../src/components/Certifications';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Certifications />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
