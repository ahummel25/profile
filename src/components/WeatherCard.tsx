import React, { FC } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { useGetFixedFahrenheit, useGetWeatherByCoords } from '../hooks';
import { breakpoints as bp } from '../styles/variables';

const Card = styled.div`
  align-self: center;
  bottom: 10px;
  padding: 8px 0 0 8px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  background-color: rgb(245, 245, 245);
  height: 150px;
  width: 90%;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`;

const WeatherImage = styled.img`
  @media (max-width: ${bp.sm}px) {
    margin-right: 8px;
  }
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: rgb(211, 211, 211);
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;

  @media (min-width: ${bp.xxl}px) {
    padding-right: 3px;
  }
`;

const Temperature = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;

const WeatherCard: FC<Record<string, unknown>> = (): JSX.Element => {
  const response = useGetWeatherByCoords();
  const icon = response?.weather[0].icon;
  const formattedDate = format(new Date(), 'EEE, \n LLL \n\n\ndo');

  return (
    <Card>
      <Header>
        <WeatherImage
          src={icon ? `https://openweathermap.org/img/w/${icon}.png` : ''}
          alt={icon}
        />
        <Title>{formattedDate}</Title>
      </Header>

      <Temperature>
        <strong>
          {useGetFixedFahrenheit(response?.main.temp_max)} &#8457;
        </strong>
        | {useGetFixedFahrenheit(response?.main.temp_min)} &#8457;
      </Temperature>

      <div>humidity: {response?.main.humidity} %</div>
      <div>speed: {response?.wind.speed} mps</div>
    </Card>
  );
};

export default WeatherCard;
