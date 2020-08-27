import React from 'react';
import renderer from 'react-test-renderer';

import Page from '../../src/components/Page';

describe('Page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Page />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
