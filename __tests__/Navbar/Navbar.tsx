import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from '../../src/components/Navbar';

describe('Navbar', () => {
  const setDrawerWidth = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Navbar setDrawerWidth={setDrawerWidth} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
