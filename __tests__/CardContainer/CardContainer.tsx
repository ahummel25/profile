import React from 'react';
import renderer from 'react-test-renderer';

import CardContainer from '../../src/components/CardContainer';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CardContainer />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with width prop', () => {
    const tree = renderer.create(<CardContainer width={860} />);
    const root = tree.root;

    expect(root.props).toStrictEqual({ width: 860 });
  });
});
