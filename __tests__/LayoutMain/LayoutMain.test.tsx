import React from 'react';
import { create } from 'react-test-renderer';

import LayoutMain from '../../src/components/LayoutMain';

describe('LayoutMain', () => {
  it('renders correctly', () => {
    const tree = create(<LayoutMain paddingLeft={190} />);

    expect(tree).toBeDefined();
  });
});
