import React from 'react';
import renderer from 'react-test-renderer';

import TitleHeader from '../../src/components/TitleHeader';

describe('TitleHeader', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TitleHeader title="Mock Title Header" />);

    expect(tree).toBeDefined();
  });
});
