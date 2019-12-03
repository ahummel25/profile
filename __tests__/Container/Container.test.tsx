import React from 'react';
import { create } from 'react-test-renderer';

import Container from '../../src/components/Container';

describe('Container', () => {
  it('renders correctly', () => {
    const tree = create(<Container />);

    expect(tree).toBeDefined();
  });

  it('renders correctly with optional className prop', () => {
    const tree = create(<Container className="my-mock-class" />).toTree();

    expect(tree?.props.className).toBe('my-mock-class');
  });
});
