import React from 'react';
import { create } from 'react-test-renderer';

import TitleHeader from '../../src/components/TitleHeader';

describe('TitleHeader', () => {
  it('renders correctly', () => {
    const tree = create(<TitleHeader title="Mock Title Header" />);

    expect(tree).toBeDefined();
  });
});
