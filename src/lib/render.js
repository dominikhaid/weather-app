import React from 'react';
import {findIcon, parseDate, listItem, listItemInvert} from './utils';

/**
 *RENDER WEATHER DAY BOX
 */
function createDay({obj = false, daytime = false, style = 'day'}) {
  //TODO MAKE THIS TOGGLE F||C
  const metric = true;

  if (!obj || !daytime) return;
  let iconClass;
  style === 'night'
    ? (iconClass = findIcon(daytime.Icon))
    : (iconClass = findIcon(daytime.Icon));

  let temperature;
  style === 'night'
    ? (temperature = obj.Temperature.Minimum)
    : (temperature = obj.Temperature.Maximum);

  let temperatureReel;
  style === 'night'
    ? (temperatureReel = obj.RealFeelTemperature.Minimum)
    : (temperatureReel = obj.RealFeelTemperature.Maximum);

  let temperatureReelShade;
  style === 'night'
    ? (temperatureReelShade = obj.RealFeelTemperatureShade.Minimum)
    : (temperatureReelShade = obj.RealFeelTemperatureShade.Maximum);

  return (
    <div className={'weatherBoxDay main-container'}>
      <div className="general">
        <h4>
          {style === 'night' ? 'Nacht' : 'Tag'}
          <br />
          {`${parseDate({
            date: obj.Date,
            format: 'GMT',
          })}`}
        </h4>
        <h2>
          <i
            style={{fontSize: '3rem'}}
            className={'circular ui ' + iconClass}
          />
          {metric
            ? [temperature.Value, <i className="ui wi wi-celsius" />]
            : [temperature.Value, <i className="ui wi wi-celsius" />]}
          <br />
          <p>
            {`${daytime.IconPhrase}`}
            <br />
            <small style={{fontSize: '0.8rem', fontWeight: 'normal'}}>
              {`gefühlt ${temperatureReel.Value + '°' + temperatureReel.Unit}`}
              {` im Schatten ${
                temperatureReelShade.Value + '°' + temperatureReelShade.Unit
              }`}
            </small>
          </p>
          <div>
            <p>
              <em>{`"${daytime.LongPhrase}"`}</em>
              <em>
                {listItemInvert({
                  item: daytime.CloudCover + '%',
                  icon: 'ui wi wi-cloudy',
                  label: 'Wolkendichte',
                })}
                {listItemInvert({
                  item: [
                    daytime.Wind.Direction.Localized + ' ',
                    metric
                      ? [daytime.Wind.Speed.Value, daytime.Wind.Speed.Unit]
                      : [daytime.Wind.Speed.Value],
                  ],
                  icon: 'ui wi wi-windy',
                  label: 'Windgeschwindigkeit',
                })}
                {listItemInvert({
                  item: [
                    metric
                      ? [
                          daytime.WindGust.Speed.Value,
                          daytime.WindGust.Speed.Unit,
                        ]
                      : [
                          daytime.WindGust.Speed.Imperial.Value,
                          daytime.WindGust.Speed.Imperial.Unit,
                        ],
                  ],
                  icon: 'ui wi wi-strong-wind',
                  label: 'Windböhen',
                })}
              </em>
            </p>
            {daytime.RainProbability > 0 ? (
              <p>
                <em>
                  <span>
                    {listItemInvert({
                      item: daytime.RainProbability + '%',
                      icon: 'ui wi wi-rain ',
                      label: 'Regenwahrscheinlichkeit ',
                    })}
                    {listItemInvert({
                      item: daytime.Rain.Value + daytime.Rain.Unit,
                      icon: 'ui wi wi-flood',
                      label: 'Niederschlag',
                    })}
                  </span>
                  {`${daytime.ThunderstormProbability}%`}
                  <i className={'ui wi wi-thunderstorm'} />
                </em>
              </p>
            ) : (
              ''
            )}
            {daytime.SnowProbability > 0 || daytime.IceProbability > 0 ? (
              <p>
                <em>
                  {listItemInvert({
                    item: daytime.Snow.Value + daytime.Snow.Unit,
                    icon: 'ui wi wi-snow',
                    label: 'Schnee',
                  })}
                  {listItemInvert({
                    item: daytime.Ice.Value + daytime.Ice.Unit,
                    icon: 'ui wi wi-sleet',
                    label: 'Eis',
                  })}
                </em>
              </p>
            ) : (
              ''
            )}
          </div>
        </h2>
      </div>

      <div>
        <div>
          <ul>
            {style !== 'night'
              ? listItem({
                  item: [obj.HoursOfSun + ' Std'],
                  icon: 'ui wi wi-day-sunny',
                  label: 'Sonnenstunden',
                })
              : false}
            {listItem({
              item: [daytime.HoursOfRain + ' Std'],
              icon: 'ui wi wi-day-rain',
              label: 'Regen',
            })}
            {listItem({
              item: [daytime.HoursOfSnow + ' Std'],
              icon: 'ui wi wi-day-snow',
              label: 'Schnee',
            })}
            {listItem({
              item: [daytime.HoursOfIce + ' Std'],
              icon: 'ui wi wi-sleet',
              label: 'Eisregen',
            })}
          </ul>
          <section>
            <p>
              <p>{style === 'night' ? 'Mondaufgang' : 'Sonnenaufgang'}</p>
              <i
                className={`ui wi ${
                  style === 'night' ? 'wi-moonrise' : 'wi-sunrise'
                }`}
              />
              {parseDate({
                date: style === 'night' ? obj.Moon.Rise : obj.Sun.Rise,
                format: 'TIME',
              })}
              <label>
                {style === 'night' ? 'Mondaufgang' : 'Sonnenaufgang'}
              </label>
            </p>

            <p>
              <p>{style === 'night' ? 'Monduntergang' : 'Sonnenuntergang'}</p>
              <i
                className={`ui wi ${
                  style === 'night' ? 'wi-moonset' : 'wi-sunset'
                }`}
              />
              {parseDate({
                date: style === 'night' ? obj.Moon.Set : obj.Sun.Set,
                format: 'TIME',
              })}
              <label>
                {style === 'night' ? 'Monduntergang' : 'Sonnenuntergang'}
              </label>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

/**
 *RENDER METHOD TOMORROW WEATHER VIEW
 */
export const weatherTomorrow = queryResTomorrow => {
  return (
    <React.Fragment>
      <div>
        <h4>Heute</h4>
        {createDay({
          obj: queryResTomorrow.DailyForecasts[0],
          daytime: queryResTomorrow.DailyForecasts[0].Day,
          style: 'day',
        })}
        {createDay({
          obj: queryResTomorrow.DailyForecasts[0],
          daytime: queryResTomorrow.DailyForecasts[0].Night,
          style: 'night',
        })}
      </div>
    </React.Fragment>
  );
};

/**
 *RENDER METHOD FIVE DAY WEATHER VIEW
 */
export const weatherFiveDay = queryResFiveDay => {
  let days = [];

  queryResFiveDay.DailyForecasts.map((element, index) => {
    days.push(
      createDay({
        obj: element,
        daytime: element.Day,
        style: 'day',
      }),
    );
    days.push(
      createDay({
        obj: element,
        daytime: element.Night,
        style: 'night',
      }),
    );
  });

  return (
    <React.Fragment>
      <div>
        <h4>5 Tage</h4>
        {[...days]}
      </div>
    </React.Fragment>
  );
};

/**
 *RENDER METHOD CURRENT WEATHER VIEW
 */
export const weatherCurrent = queryResCurrent => {
  let iconClass = findIcon(queryResCurrent[0].WeatherIcon);

  if (!queryResCurrent[0].IsDayTime)
    iconClass = iconClass.replace('day', 'night');

  return (
    <React.Fragment>
      <h4>Jetzt</h4>
      <div>
        <div>
          <h4>
            {`${parseDate({
              date: new Date(),
              format: 'GMT',
            })}`}
          </h4>
          <h2>
            <i className={iconClass} />
            {metric
              ? [
                  queryResCurrent[0].WetBulbTemperature.Metric.Value,
                  <i
                    style={{marginLeft: '0.2rem'}}
                    className="ui wi wi-celsius"
                  />,
                ]
              : [
                  queryResCurrent[0].WetBulbTemperature.Imperial.Value,
                  <i
                    className="ui wi wi-celsius"
                    style={{marginLeft: '0.2rem'}}
                  />,
                ]}
            <br />
            <p style={{fontSize: '1rem'}}>
              {`${queryResCurrent[0].WeatherText} `}
              <br />
              <small style={{fontSize: '0.8rem', fontWeight: 'normal'}}>
                {`gefühlt ${
                  metric
                    ? [
                        queryResCurrent[0].RealFeelTemperature.Metric.Value +
                          '°C',
                      ]
                    : [
                        queryResCurrent[0].RealFeelTemperature.Imperial.Value +
                          '°F',
                      ]
                }`}
                {` im Schatten ${
                  metric
                    ? [
                        queryResCurrent[0].RealFeelTemperatureShade.Metric
                          .Value + '°C',
                      ]
                    : [
                        queryResCurrent[0].RealFeelTemperatureShade.Imperial
                          .Value + '°F',
                      ]
                }`}
              </small>
            </p>
          </h2>
          <ul>
            {queryResCurrent[0].Precip1hr.Metric.Value > 0
              ? listItemInvert({
                  item: metric
                    ? queryResCurrent[0].Precip1hr.Metric.Value +
                      queryResCurrent[0].Precip1hr.Metric.Unit
                    : queryResCurrent[0].Precip1hr.Imperial.Value +
                      queryResCurrent[0].Precip1hr.Imperial.Unit,
                  icon: 'ui wi wi-flood',
                  label: 'Niederschlag',
                })
              : ''}
            {listItemInvert({
              item: queryResCurrent[0].RelativeHumidity,
              icon: 'ui wi wi-humidity',
              label: 'Luftfeuchtigkeit',
            })}
            {listItemInvert({
              item: [
                queryResCurrent[0].Wind.Direction.Localized + ' ',
                metric
                  ? [
                      queryResCurrent[0].Wind.Speed.Metric.Value,
                      queryResCurrent[0].Wind.Speed.Metric.Unit,
                    ]
                  : [
                      queryResCurrent[0].Wind.Speed.Imperial.Value,
                      queryResCurrent[0].Wind.Speed.Imperial.Unit,
                    ],
              ],
              icon: 'ui wi wi-windy',
              label: 'Windgeschwindigkeit',
            })}
            {listItemInvert({
              item: [
                metric
                  ? [
                      queryResCurrent[0].WindGust.Speed.Metric.Value,
                      queryResCurrent[0].WindGust.Speed.Metric.Unit,
                    ]
                  : [
                      queryResCurrent[0].WindGust.Speed.Imperial.Value,
                      queryResCurrent[0].WindGust.Speed.Imperial.Unit,
                    ],
              ],
              icon: 'ui wi wi-strong-wind',
              label: 'Windböhen',
            })}
            {listItemInvert({
              item: [
                queryResCurrent[0].UVIndex,
                queryResCurrent[0].UVIndexText,
              ],
              icon: 'ui wi wi-hot',
              label: 'UV Index',
            })}
            {listItemInvert({
              item: [
                metric
                  ? [
                      queryResCurrent[0].Pressure.Metric.Value,
                      queryResCurrent[0].Pressure.Metric.Unit,
                      queryResCurrent[0].PressureTendency.Localized,
                    ]
                  : [
                      queryResCurrent[0].Pressure.Imperial.Value,
                      queryResCurrent[0].Pressure.Imperial.Unit,
                      queryResCurrent[0].PressureTendency.Localized,
                    ],
              ],
              icon: 'ui wi wi-barometer',
              label: 'Luftdruck',
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
