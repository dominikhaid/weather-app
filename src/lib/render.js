import React from 'react';
import PropTypes from 'prop-types';
import {findIcon, parseDate, listItem} from './utils';
//TODO MAKE THIS TOGGLE F/C
const metric = true;

/**
 *@desc NOTE RENDER THE HEADLINE
 */
const DateWeatherBox = ({city, date}) => {
  DateWeatherBox.propTypes = {
    city: PropTypes.string,
    date: PropTypes.string,
  };
  if (!city) return <h1 className="main-headline">&nbsp;</h1>;
  return (
    <h1 className="main-headline">
      {city + ' '}
      {date
        ? new Date(date).toLocaleDateString()
        : new Date().toLocaleDateString()}
    </h1>
  );
};

/**
 *@desc NOTE RENDER THE ICON CIRCLE
 */
const MainWeatherBox = ({
  city,
  time,
  date,
  daytime,
  WeatherText,
  WeatherIcon,
  IsDayTime,
  Temperature,
  RealFeelTemperature,
  RealFeelTemperatureShade,
}) => {
  MainWeatherBox.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    daytime: PropTypes.object,
    WeatherText: PropTypes.string,
    WeatherIcon: PropTypes.object,
    IsDayTime: PropTypes.bool,
    Temperature: PropTypes.object,
    RealFeelTemperature: PropTypes.object,
    RealFeelTemperatureShade: PropTypes.object,
    city: PropTypes.string,
  };
  let iconClass;

  if (time && daytime) iconClass = findIcon(daytime.Icon);

  if (!time && WeatherIcon) {
    iconClass = findIcon(WeatherIcon);
    if (!IsDayTime) iconClass = iconClass.replace('day', 'night');
  }

  const unitIcon = metric ? (
    <i className="wi wi-celsius" />
  ) : (
    <i className="wi wi-fahrenheit" />
  );

  let temperature = '';
  if (Temperature && Temperature.Metric)
    temperature = metric
      ? Temperature.Metric.Value
      : Temperature.Imperial.Value;

  if (Temperature && Temperature.Minimum)
    temperature =
      time === 'night' ? Temperature.Minimum.Value : Temperature.Maximum.Value;

  let realFeel;
  if (RealFeelTemperature && RealFeelTemperature.Metric)
    realFeel = metric
      ? RealFeelTemperature.Metric.Value
      : RealFeelTemperature.Imperial.Value;

  let realShadow;
  if (RealFeelTemperatureShade && RealFeelTemperatureShade.Metric)
    realShadow = metric
      ? RealFeelTemperatureShade.Metric.Value
      : RealFeelTemperatureShade.Imperial.Value;

  return (
    <>
      <div
        style={{width: '150px', height: '150px'}}
        className="text-gray-dark relative  dark:text-primary text-center p-lg m-auto flex flex-wrap content-center justify-center border-4 border-gray-dark dark:border-primary rounded-full"
      >
        <i className={'wi text-6xl flex-auto ' + iconClass} />
        <p className={'text-2xl flex-auto m-none'}>
          {temperature} {unitIcon}
        </p>
        <p style={{right: '-35px', bottom: '-25px'}} className="absolute">
          <em>{!time ? '' : time === 'night' ? '| Nacht' : '| Tag'}</em>
        </p>
      </div>
      <div>
        <p className="text-center w-100">
          {WeatherText ? WeatherText : daytime ? daytime.IconPhrase : ''}
          {realFeel
            ? [
                ` Temperatur gefühlt ${realFeel}`,
                unitIcon,
                ` im Schatten ${realShadow}`,
                unitIcon,
              ]
            : ''}
          {daytime ? ', ' + daytime.LongPhrase : ''}
        </p>
      </div>
    </>
  );
};

/**
 *@desc NOTE RENDER THE WEATHER DETAILS
 */
const DetailWeatherBox = ({
  Precip1hr,
  RelativeHumidity,
  WindGust,
  UVIndex,
  UVIndexText,
  Pressure,
  daytime,
}) => {
  DetailWeatherBox.propTypes = {
    Precip1hr: PropTypes.object,
    RelativeHumidity: PropTypes.string,
    WindGust: PropTypes.object,
    UVIndex: PropTypes.object,
    UVIndexText: PropTypes.string,
    Pressure: PropTypes.object,
    daytime: PropTypes.object,
  };

  let precip1hr = <></>;

  if (Precip1hr && Precip1hr.Metric.Value > 0)
    precip1hr = listItem({
      item: metric
        ? Precip1hr.Metric.Value + Precip1hr.Metric.Unit
        : Precip1hr.Imperial.Value + Precip1hr.Imperial.Unit,
      icon: 'wi wi-flood',
      label: 'Niederschlag',
    });

  let relativeHumidity = <></>;
  if (RelativeHumidity)
    relativeHumidity = listItem({
      item: RelativeHumidity + '%',
      icon: 'wi wi-humidity',
      label: 'Luftfeuchte',
    });

  let windGust = <></>;
  if (WindGust && WindGust.Speed.Metric.Value > 0)
    windGust = listItem({
      item: metric
        ? [WindGust.Speed.Metric.Value, WindGust.Speed.Metric.Unit]
        : [WindGust.Speed.Imperial.Value, WindGust.Speed.Imperial.Unit],

      icon: 'wi wi-strong-wind',
      label: 'Windböhen',
    });

  let uvIndex = <></>;
  if (UVIndex)
    uvIndex = listItem({
      item: [UVIndex, UVIndexText],
      icon: 'wi wi-hot',
      label: 'UV Index',
    });

  let pressure = <></>;
  if (Pressure && Pressure.Metric.Value > 0)
    pressure = listItem({
      item: metric
        ? [Pressure.Metric.Value, Pressure.Metric.Unit]
        : [Pressure.Imperial.Value, Pressure.Imperial.Unit],

      icon: 'wi wi-barometer',
      label: 'Luftdruck',
    });

  const Daytime = ({daytime}) => {
    if (!daytime) return <></>;

    const RainProbability = () => {
      if (!daytime.RainProbability > 0) return <></>;
      return (
        <>
          {listItem({
            item: daytime.RainProbability + '%',
            icon: 'wi wi-rain',
            label: 'Regenwahrsch.',
          })}
          {listItem({
            item: daytime.Rain.Value + daytime.Rain.Unit,
            icon: 'wi wi-flood',
            label: 'Niederschlag',
          })}
          {listItem({
            item: `${daytime.ThunderstormProbability}%`,
            icon: 'wi wi-thunderstorm',
            label: 'Gewitter',
          })}
        </>
      );
    };

    const SnowProbability = () => {
      if (daytime.SnowProbability > 0 || daytime.IceProbability > 0)
        return <></>;
      return (
        <>
          {listItem({
            item: daytime.Snow.Value + daytime.Snow.Unit,
            icon: 'wi wi-snow',
            label: 'Schnee',
          })}
          {listItem({
            item: daytime.Ice.Value + daytime.Ice.Unit,
            icon: 'wi wi-sleet',
            label: 'Eis',
          })}
        </>
      );
    };

    const hoursOfSun = listItem({
      item: [daytime.HoursOfSun + ' Std'],
      icon: 'wi wi-day-sunny',
      label: 'Sonnenstunden',
    });

    const hoursOfRain = listItem({
      item: [daytime.HoursOfRain + ' Std'],
      icon: 'wi wi-day-rain',
      label: 'Regen',
    });

    const hoursOfSnow = listItem({
      item: [daytime.HoursOfSnow + ' Std'],
      icon: 'wi wi-day-snow',
      label: 'Schnee',
    });

    const hoursOfIce = listItem({
      item: [daytime.HoursOfIce + ' Std'],
      icon: 'wi wi-sleet',
      label: 'Eisregen',
    });

    const cloudCover = listItem({
      item: daytime.CloudCover + '%',
      icon: 'wi wi-cloudy',
      label: 'Wolkendichte',
    });

    const wind = listItem({
      item: metric
        ? [
            daytime.Wind.Direction.Localized + ' ',
            daytime.Wind.Speed.Value,
            daytime.Wind.Speed.Unit,
          ]
        : [daytime.Wind.Direction.Localized + ' ', daytime.Wind.Speed.Value],
      icon: 'wi wi-windy',
      label: 'Windgeschw.',
    });

    const windGust = listItem({
      item: metric
        ? [daytime.WindGust.Speed.Value, daytime.WindGust.Speed.Unit]
        : [
            daytime.WindGust.Speed.Imperial.Value,
            daytime.WindGust.Speed.Imperial.Unit,
          ],
      icon: 'wi wi-strong-wind',
      label: 'Windböhen',
    });

    const sunRise = listItem({
      item: parseDate({
        date: daytime.Sun.Rise,
        format: 'TIME',
      }),
      icon: 'wi wi-sunrise',
      label: 'Sonnenaufgang',
    });
    const moonRise = listItem({
      item: parseDate({
        date: daytime.Moon.Rise,
        format: 'TIME',
      }),
      icon: 'wi wi-moonrise',
      label: 'Mondaufgang',
    });

    return (
      <>
        {hoursOfSun}
        {hoursOfRain}
        {hoursOfSnow}
        {hoursOfIce}
        {cloudCover}
        {wind}
        {windGust}
        <RainProbability />
        <SnowProbability />
        {sunRise}
        {moonRise}
      </>
    );
  };

  return (
    <ul className="m-auto w-100 p-lg flex flex-center flex-column flex-wrap relative weather-list">
      {precip1hr}
      {relativeHumidity}
      {windGust}
      {uvIndex}
      {pressure}
      <Daytime daytime={daytime} />
    </ul>
  );
};

/**
 *@desc NOTE RENDER WEATHER DAY BOX
 *@parma (accuWeather obj)
 */
function createDay({obj = false, city = false, daytime = false, time = 'day'}) {
  if (!obj || !daytime) return;

  return (
    <section className="general">
      <DateWeatherBox city={city} date={obj.Date} />
      <MainWeatherBox {...obj} time={time} daytime={daytime} city={city} />
      <DetailWeatherBox {...obj} daytime={daytime} />
    </section>
  );
}

/**
 *@desc NOTE RENDER METHOD TOMORROW WEATHER VIEW
 *@parma (accuWeather obj)
 */
export const weatherTomorrow = queryResTomorrow => {
  return (
    <div id="weatherContainer">
      {createDay({
        obj: queryResTomorrow.tomorrow.DailyForecasts[0],
        daytime: queryResTomorrow.tomorrow.DailyForecasts[0].Day,
        time: 'day',
        city: queryResTomorrow.city,
      })}
      {createDay({
        obj: queryResTomorrow.tomorrow.DailyForecasts[0],
        daytime: queryResTomorrow.tomorrow.DailyForecasts[0].Night,
        time: 'night',
      })}
    </div>
  );
};

/**
 *@desc NOTE RENDER METHOD FIVEDAY WEATHER VIEW
 *@parma (accuWeather obj)
 **/
export const weatherFiveDay = queryResFiveDay => {
  let days = [];
  console.log(queryResFiveDay);
  queryResFiveDay.fiveday.DailyForecasts.map((element, index) => {
    days.push(
      createDay({
        obj: element,
        daytime: element.Day,
        time: 'day',
        city: queryResFiveDay.city,
      }),
    );
    days.push(
      createDay({
        obj: element,
        daytime: element.Night,
        time: 'night',
      }),
    );
  });

  return <div id="weatherContainer">{[...days]}</div>;
};

/**
 * NOTE RENDER METHOD CURRENT WEATHER VIEW
 *@parma (accuWeather obj)
 **/
export const weatherCurrent = queryResCurrent => {
  return (
    <section className="general">
      <DateWeatherBox
        city={queryResCurrent.city}
        date={queryResCurrent.current.LocalObservationDateTime}
      />
      <MainWeatherBox {...queryResCurrent.current} />
      <DetailWeatherBox {...queryResCurrent.current} />
    </section>
  );
};
