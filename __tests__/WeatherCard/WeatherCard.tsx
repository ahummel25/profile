import React from 'react';
import renderer from 'react-test-renderer';

import WeatherCard from '../../src/components/WeatherCard';

describe('WeatherCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<WeatherCard />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
