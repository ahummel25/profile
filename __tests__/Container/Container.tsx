import React from 'react';
import renderer from 'react-test-renderer';

import Container from '../../src/components/Container';

describe('Container', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Container />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with optional className prop', () => {
    const tree = renderer
      .create(<Container className="my-mock-class" />)
      .toTree();

    expect(tree?.props.className).toBe('my-mock-class');
  });
});
