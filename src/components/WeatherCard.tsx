import React, { FC } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import { useGetFixedFahrenheit, useGetWeatherByZip } from '../hooks';

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
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: rgb(211, 211, 211);
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Temperature = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;

const WeatherCard: FC<{}> = (): JSX.Element => {
  const resp = useGetWeatherByZip();
  const icon = resp?.weather[0].icon;
  const formattedDate = format(new Date(), 'EEE, LLL do');

  return (
    <Card>
      <Header>
        <WeatherImage
          src={`https://openweathermap.org/img/w/${icon}.png`}
          alt={icon}
        />
        <Title>{formattedDate}</Title>
      </Header>

      <Temperature>
        <strong>{useGetFixedFahrenheit(resp?.main.temp_max)} &#8457;</strong>|{' '}
        {useGetFixedFahrenheit(resp?.main.temp_min)} &#8457;
      </Temperature>

      <div>
        <div>humidity: {resp?.main.humidity} %</div>
        <div>speed: {resp?.wind.speed} mps</div>
      </div>
    </Card>
  );
};

export default WeatherCard;
