import React, {useEffect, useState} from 'react';
import MainContainer from '@/components/MainContainer';
import {Menu, Header, List, Label, Divider, Segment} from 'semantic-ui-react';
import weatherIcons from '../../../public/fonts/weather/icon';
import {useRouter} from 'next/router';

//example responses from data folder set debug state to true to use this app will run without api then
import fakeCurrent from '../../data/current';
import fakeTomorrow from '../../data/tomorrow';
import fakeFiveday from '../../data/fiveday';

export default function Weather(weatherStates) {
  const [metric, setMetric] = useState(true);
  const router = useRouter();

  if (!process.browser) {
  } else {
    console.debug('Weather CLIENT', weatherStates);
    // if (weatherStates.activePageState !== '/weather')
    //   weatherStates.setAppState({
    //     activePageState: '/weather',
    //   });
  }

  /**
   *CONVERT ACCU WEATHER ICON TO FONT
   */
  function findIcon(a) {
    let res;
    if (Array.isArray(weatherIcons) && a) {
      weatherIcons.forEach(element => {
        if (Number(element.nr) === a) {
          res = element.class;
        }
      });
    }
    return res;
  }

  /**
   *CONVERT ACCU WEATHER DATE
   */
  function parseDate({date = false, format = false}) {
    date = new Date(date);

    if (format === 'GMT') {
      date = date.toGMTString(date).replace(/(\d\d:\d\d:\d\d.*)/, '');
      //date = date.replace(/(\d\d:\d\d:\d\d.*)/, '');
    }
    if (format === 'TIME') {
      date = date.toTimeString(date).match(/(\d\d:\d\d)|(GMT.*)/);
      date = date[0];
    }
    return date;
  }

  /**
   *RENDER WEATHER DAY BOX
   */
  function createDay({obj = false, daytime = false, style = 'day'}) {
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
      <div className={'weatherBoxDay'}>
        <div className="general">
          <Header
            as="h4"
            icon
            textAlign="left"
            style={{width: '100%', minWidth: '250px'}}
          >
            <Header.Content>
              {style === 'night' ? 'Nacht' : 'Tag'}
              <br />
              {`${parseDate({
                date: obj.Date,
                format: 'GMT',
              })}`}
            </Header.Content>
          </Header>
          <Header
            as="h2"
            icon
            textAlign="center"
            style={{width: '50%', minWidth: '250px'}}
          >
            <Header.Content className="weatherIcon">
              <i
                style={{fontSize: '3rem'}}
                className={'circular ui ' + iconClass}
              />
              {metric
                ? [temperature.Value, <i className="ui wi wi-celsius" />]
                : [temperature.Value, <i className="ui wi wi-celsius" />]}
              <br />
              <p style={{fontSize: '1rem'}}>
                {`${daytime.IconPhrase}`}
                <br />
                <small style={{fontSize: '0.8rem', fontWeight: 'normal'}}>
                  {`gefühlt ${
                    temperatureReel.Value + '°' + temperatureReel.Unit
                  }`}
                  {` im Schatten ${
                    temperatureReelShade.Value + '°' + temperatureReelShade.Unit
                  }`}
                </small>
              </p>
            </Header.Content>
            <Divider />
            <div
              className={'weatherBoxDayWindGeneral'}
              style={{fontSize: '0.8rem'}}
            >
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
                <p
                  className="weatherBoxDayRain"
                  style={{
                    textAlign: 'center',
                  }}
                >
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
                      item: daytime.Snow.Value + daytime.Unit.Unit,
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
          </Header>
        </div>

        <div className={'weatherBoxDayDetailsWrappper'}>
          <Divider horizontal>Details</Divider>
          <div className={'weatherBoxDayDetails'}>
            <List celled>
              {/* {Precip1hr()} */}
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
            </List>
            <Segment celled>
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
                <Label pointing="left">
                  {style === 'night' ? 'Mondaufgang' : 'Sonnenaufgang'}
                </Label>
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
                <Label pointing="left">
                  {style === 'night' ? 'Monduntergang' : 'Sonnenuntergang'}
                </Label>
              </p>
            </Segment>
          </div>
        </div>
      </div>
    );
  }

  /**
   *CREATE LISTITEM ICON RIGHT
   */
  function listItem({item = false, icon = false, label = false}) {
    return (
      <List.Item>
        <List.Content>
          {icon ? <i className={icon} /> : ''}
          {item && Array.isArray(item) ? [...item] : item ? item : ''}
          {label ? <Label>{label}</Label> : ''}
        </List.Content>
      </List.Item>
    );
  }

  /**
   *CREATE LISTITEM ICON LEFT
   */
  function listItemInvert({item = false, icon = false, label = false}) {
    return (
      <List.Item style={{textAlign: 'center'}}>
        <List.Content>
          {item && Array.isArray(item) ? [...item] : item ? item : ''}
          {icon ? <i className={icon} /> : ''}
          {label ? <Label>{label}</Label> : ''}
        </List.Content>
      </List.Item>
    );
  }

  /**
   *RENDER METHOD TOMORROW WEATHER VIEW
   */
  const weatherTomorrow = queryResTomorrow => {
    return (
      <React.Fragment>
        <div className="flex-item-4">
          <Divider horizontal>
            <Header as="h4">Heute</Header>
          </Divider>
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
  const weatherFiveDay = queryResFiveDay => {
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
        <div className="flex-item-4">
          <Divider horizontal>
            <Header as="h4">5 Tage</Header>
          </Divider>
          {[...days]}
        </div>
      </React.Fragment>
    );
  };

  /**
   *RENDER METHOD CURRENT WEATHER VIEW
   */
  const weatherCurrent = queryResCurrent => {
    let iconClass = findIcon(queryResCurrent[0].WeatherIcon);

    if (!queryResCurrent[0].IsDayTime)
      iconClass = iconClass.replace('day', 'night');

    return (
      <React.Fragment>
        <Divider className={'felx-item-4'} horizontal>
          <Header as="h4">Jetzt</Header>
        </Divider>
        <div className={'weatherBoxDay currentDay felx-item-4'}>
          <div class="general">
            <Header as="h4" icon textAlign="left">
              <Header.Content>
                {`${parseDate({
                  date: new Date(),
                  format: 'GMT',
                })}`}
              </Header.Content>
            </Header>
            <Header as="h2" icon textAlign="center">
              <Header.Content className="weatherIcon">
                <i
                  style={{fontSize: '3rem'}}
                  className={'circular ui ' + iconClass}
                />
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
                            queryResCurrent[0].RealFeelTemperature.Metric
                              .Value + '°C',
                          ]
                        : [
                            queryResCurrent[0].RealFeelTemperature.Imperial
                              .Value + '°F',
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
              </Header.Content>
            </Header>
            <List celled style={{textAlign: 'center'}}>
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
            </List>
          </div>
        </div>
      </React.Fragment>
    );
  };

  /**
   *REQUEST METHOD FOR WEATHER DATA
   */
  const getWeather = locObj => {
    if (process.env.NEXT_PUBLIC_DEBUG !== 'false') {
      console.debug('WEATHER REQUEST FAKE', locObj);
      if (locObj.lastSearch === 'current') {
        locObj.current = fakeCurrent;
        weatherStates.updateCitysState(locObj);
      } else if (locObj.lastSearch === 'tomorrow') {
        locObj.tomorrow = fakeTomorrow;
        weatherStates.updateCitysState(locObj);
      } else if (locObj.lastSearch === 'fiveday') {
        locObj.fiveday = fakeFiveday;
        weatherStates.updateCitysState(locObj);
      } else {
        locObj.current = fakeCurrent;
        weatherStates.updateCitysState(locObj);
      }
      weatherStates.updateRequestState();
    } else {
      let url;

      if (locObj.lastSearch === 'current') {
        url = `https://dataservice.accuweather.com/currentconditions/v1/${locObj.Key}?apikey=${process.env.NEXT_PUBLIC_API}&q=${locObj.city}&language=de&details=true&metric=true`;
      } else if (locObj.lastSearch === 'tomorrow') {
        url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=${process.env.NEXT_PUBLIC_API}&q=${locObj.city}&language=de&details=true&metric=true`;
      } else if (locObj.lastSearch === 'fiveday') {
        url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locObj.Key}?apikey=${process.env.NEXT_PUBLIC_API}&q=${locObj.city}&language=de&details=true&metric=true`;
      } else {
        url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=${process.env.NEXT_PUBLIC_API}&q=${locObj.city}&language=de&details=true&metric=true`;
      }
      console.debug('WEATHER REQUEST');
      fetch(url, {
        method: 'GET', // or 'PUT'
        // headers: {
        //   // 'Content-Type': 'application/json',
        //   credentials: 'include',
        // },
        // body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.debug('Success:', data);
          if (locObj.lastSearch === 'current') {
            locObj.current = data;
            weatherStates.updateCitysState(locObj);
          } else if (locObj.lastSearch === 'tomorrow') {
            locObj.tomorrow = data;
            weatherStates.updateCitysState(locObj);
          } else if (locObj.lastSearch === 'fiveday') {
            locObj.fiveday = data;
            weatherStates.updateCitysState(locObj);
          } else {
            locObj.current = data;
            weatherStates.updateCitysState(locObj);
          }
          weatherStates.updateRequestState();
        })
        .catch(error => {
          console.error('Error:', error);
          router.push('/limit');
          return;
        });
    }
  };

  /**
   * READ THE SELECTED DATA FROM SEARCH MOPDAL
   */
  const getDataFromSearch = () => {
    weatherStates.setWeatherView(
      weatherStates.modal.modalData[weatherStates.modal.modalActiveItem]
        .lastSearch,
    );

    weatherStates.modal.setNewState({
      modalState: false,
      modalMode: false,
      modalData: [],
      modalHeader: false,
      modalHeaderDes: false,
      modalActiveItem: false,
    });

    weatherStates.updateActiveCity(
      weatherStates.modal.modalData[weatherStates.modal.modalActiveItem],
    );
  };

  weatherStates.modal.modalState && getDataFromSearch();

  /**
   * CHECK IF VIEW DATA EXISTS
   */
  useEffect(() => {
    if (weatherStates.activeCity.lastSearch === 'current') {
      !weatherStates.activeCity.current
        ? getWeather(weatherStates.activeCity)
        : false;
    } else if (weatherStates.activeCity.lastSearch === 'tomorrow') {
      !weatherStates.activeCity.tomorrow
        ? getWeather(weatherStates.activeCity)
        : false;
    } else if (weatherStates.activeCity.lastSearch === 'fiveday') {
      !weatherStates.activeCity.fiveday
        ? getWeather(weatherStates.activeCity)
        : false;
    }

    return () => {};
  }, [weatherStates.activeCity]);

  /**
   * MENU SELECT CITY AND WEATHER VIEW
   */
  function topbar() {
    let menuArray = [];
    if (weatherStates.citysState.length > 0)
      menuArray.push(
        cityNav(weatherStates.citysState, weatherStates.activeCity.city),
      );
    return menuArray;
  }

  const selectView = () => {
    return (
      <React.Fragment>
        {weatherStates.activeCity.current ? (
          <Menu.Item
            id={'current'}
            key={'current'}
            active={weatherStates.weatherView === 'current'}
            onClick={e => {
              weatherStates.setWeatherView(e.target.id);
            }}
          >
            Jetzt
          </Menu.Item>
        ) : (
          false
        )}
        {weatherStates.activeCity.tomorrow ? (
          <Menu.Item
            id={'tomorrow'}
            key={'tomorrow'}
            active={weatherStates.weatherView === 'tomorrow'}
            onClick={e => {
              weatherStates.setWeatherView(e.target.id);
            }}
          >
            Heute
          </Menu.Item>
        ) : (
          false
        )}
        {weatherStates.activeCity.fiveday ? (
          <Menu.Item
            id={'fiveday'}
            key={'fiveday'}
            active={weatherStates.weatherView === 'fiveday'}
            onClick={e => {
              weatherStates.setWeatherView(e.target.id);
            }}
          >
            5 Tage
          </Menu.Item>
        ) : (
          false
        )}
      </React.Fragment>
    );
  };

  const cityNav = (citys, activeItem) => {
    const handleItemClick = e => {
      let res;

      if (weatherStates.citysState && weatherStates.citysState.length > 0) {
        res = weatherStates.citysState.filter(city => {
          return e.id === city.city;
        });
      }
      weatherStates.setAppState({activeCity: res[0]});
    };

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Locations</Menu.Header>

          <Menu.Menu>
            {citys.map(city => {
              return (
                <Menu.Item
                  id={city.city}
                  key={city.city}
                  active={activeItem === city.city}
                  onClick={e => {
                    handleItemClick(e.target);
                  }}
                >
                  {city.city}
                </Menu.Item>
              );
            })}
          </Menu.Menu>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>View</Menu.Header>
          <Menu.Menu>{selectView()}</Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  };

  /**
   * COLLECT DATA TO REENDER
   */
  function renderWeather() {
    if (
      !weatherStates.activeCity &&
      weatherStates.modal.modalData.length < 1 &&
      weatherStates.citysState.length < 1 &&
      process.browser
    )
      router.push('/');

    let weatherArray = [];

    if (
      weatherStates.activeCity.current &&
      weatherStates.weatherView === 'current'
    )
      weatherArray.push(weatherCurrent(weatherStates.activeCity.current));
    if (
      weatherStates.activeCity.tomorrow &&
      weatherStates.weatherView === 'tomorrow'
    )
      weatherArray.push(weatherTomorrow(weatherStates.activeCity.tomorrow));
    if (
      weatherStates.activeCity.fiveday &&
      weatherStates.weatherView === 'fiveday'
    )
      weatherArray.push(weatherFiveDay(weatherStates.activeCity.fiveday));

    if (weatherArray.length < 1) {
      if (weatherStates.activeCity.current) {
        weatherStates.setWeatherView('current');
      } else if (weatherStates.activeCity.tomorrow) {
        weatherStates.setWeatherView('tomorrow');
      } else if (weatherStates.activeCity.fiveday) {
        weatherStates.setWeatherView('fiveday');
      }
    }

    return weatherArray;
  }
  return (
    <React.Fragment>
      <MainContainer id={'weather'}>
        <div className="flex-item-1">{topbar()}</div>
        <div className="flex-item-3">{renderWeather()}</div>
      </MainContainer>
    </React.Fragment>
  );
}
