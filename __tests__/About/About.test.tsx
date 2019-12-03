import React from 'react';
import { create } from 'react-test-renderer';

import About from '../../src/components/About';

describe('About', () => {
  it('renders correctly', () => {
    const tree = create(<About />);

    expect(tree).toBeDefined();
  });
});
