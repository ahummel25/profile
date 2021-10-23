import React from 'react';
import { create } from 'react-test-renderer';

import Page from '../../src/components/Page';

describe('Page', () => {
  it('renders correctly', () => {
    const tree = create(<Page />);

    expect(tree).toBeDefined();
  });
});
