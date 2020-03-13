import React from 'react';
import renderer from 'react-test-renderer';

import LayoutMain from '../../src/components/LayoutMain';

describe('LayoutMain', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LayoutMain paddingLeft={190} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
