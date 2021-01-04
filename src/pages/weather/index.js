import React from 'react';
import {
  weatherTomorrow,
  weatherCurrent,
  weatherFiveDay,
} from '../../lib/render';

import {useRouter} from 'next/router';

export default function Weather(appStates) {
  const router = useRouter();

  /**
   * MENU SELECT CITY AND WEATHER VIEW
   */
  function topbar() {
    let menuArray = [];
    if (appStates.citysState.length > 0)
      menuArray.push(cityNav(appStates.citysState, appStates.activeCity.city));
    return menuArray;
  }

  const selectView = () => {
    return (
      <React.Fragment>
        {appStates.activeCity.current ? (
          <li
            id={'current'}
            key={'current'}
            active={appStates.weatherView === 'current'}
            onClick={e => {
              appStates.citysState.setWeatherView(e.target.id);
            }}
          >
            Jetzt
          </li>
        ) : (
          false
        )}
        {appStates.activeCity.tomorrow ? (
          <li
            id={'tomorrow'}
            key={'tomorrow'}
            active={appStates.weatherView === 'tomorrow'}
            onClick={e => {
              appStates.citysState.setWeatherView(e.target.id);
            }}
          >
            Heute
          </li>
        ) : (
          false
        )}
        {appStates.activeCity.fiveday ? (
          <li
            id={'fiveday'}
            key={'fiveday'}
            active={appStates.weatherView === 'fiveday'}
            onClick={e => {
              appStates.setWeatherView(e.target.id);
            }}
          >
            5 Tage
          </li>
        ) : (
          false
        )}
      </React.Fragment>
    );
  };

  const cityNav = (citys, activeItem) => {
    const handleItemClick = e => {
      let res;

      if (appStates.citysState && appStates.citysState.length > 0) {
        res = appStates.citysState.filter(city => {
          return e.id === city.city;
        });
      }
      appStates.citysState.setAppState({activeCity: res[0]});
    };

    return (
      <ul>
        <li>
          <h4>Locations</h4>

          <ul>
            {citys.map(city => {
              return (
                <li
                  id={city.city}
                  key={city.city}
                  active={activeItem === city.city}
                  onClick={e => {
                    handleItemClick(e.target);
                  }}
                >
                  {city.city}
                </li>
              );
            })}
          </ul>
        </li>
        <li>
          <h4>View</h4>
          <ul>{selectView()}</ul>
        </li>
      </ul>
    );
  };

  /**
   * COLLECT DATA TO REENDER
   */
  function renderWeather() {
    if (
      !appStates.activeCity &&
      appStates.citysState.length < 1 &&
      process.browser
    )
      router.push('/');

    let weatherArray = [];

    if (appStates.activeCity.current && appStates.weatherView === 'current')
      weatherArray.push(weatherCurrent(appStates.activeCity.current));
    if (appStates.activeCity.tomorrow && appStates.weatherView === 'tomorrow')
      weatherArray.push(weatherTomorrow(appStates.activeCity.tomorrow));
    if (appStates.activeCity.fiveday && appStates.weatherView === 'fiveday')
      weatherArray.push(weatherFiveDay(appStates.activeCity.fiveday));

    if (weatherArray.length < 1) {
      if (appStates.activeCity.current) {
        appStates.setWeatherView('current');
      } else if (appStates.activeCity.tomorrow) {
        appStates.setWeatherView('tomorrow');
      } else if (appStates.activeCity.fiveday) {
        appStates.setWeatherView('fiveday');
      }
    }

    return weatherArray;
  }

  return (
    <React.Fragment>
      <div className="flex-item-1">{topbar()}</div>
      <div className="flex-item-3">{renderWeather()}</div>
    </React.Fragment>
  );
}
