import React from 'react';
import { create } from 'react-test-renderer';

import Contact from '../../src/components/Contact';

describe('Contact', () => {
  it('renders correctly', () => {
    const tree = create(<Contact />);

    expect(tree).toBeDefined();
  });
});
