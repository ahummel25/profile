import React from 'react';
import { create } from 'react-test-renderer';

import Profile from '../../src/components/Profile';

describe('Profile', () => {
  it('renders correctly', () => {
    const tree = create(<Profile />);

    expect(tree).toBeDefined();
  });
});
