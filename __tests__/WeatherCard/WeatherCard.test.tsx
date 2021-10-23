import React from 'react';
import { create } from 'react-test-renderer';

import WeatherCard from '../../src/components/WeatherCard';

describe('WeatherCard', () => {
  it('renders correctly', () => {
    const tree = create(<WeatherCard />);

    expect(tree).toBeDefined();
  });
});
