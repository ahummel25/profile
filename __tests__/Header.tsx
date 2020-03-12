import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../src/components/Header';

describe('Header', () => {
  const setDrawerWidth = jest.fn();

  beforeEach(() => {
    setDrawerWidth.mockClear();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<Header setDrawerWidth={setDrawerWidth} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
