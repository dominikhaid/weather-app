import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function RequestData(appStates) {
  const router = useRouter();

  /**
   *REQUEST METHOD FOR WEATHER DATA
   */
  const getWeather = locObj => {
    let url;

    if (locObj.lastSearch === 'current' || locObj.lastSearch === 'home') {
      url = `https://dataservice.accuweather.com/currentconditions/v1/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else if (locObj.lastSearch === 'tomorrow') {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else if (locObj.lastSearch === 'fiveday') {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    }

    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        if (locObj.lastSearch === 'current' || locObj.lastSearch === 'home') {
          locObj.current = data;
          appStates.updateCitysState(locObj);
        } else if (locObj.lastSearch === 'tomorrow') {
          locObj.tomorrow = data;
          appStates.updateCitysState(locObj);
        } else if (locObj.lastSearch === 'fiveday') {
          locObj.fiveday = data;
          appStates.updateCitysState(locObj);
        } else {
          locObj.current = data;
          appStates.updateCitysState(locObj);
        }
        appStates.updateRequestState();
      })
      .catch(error => {
        console.error('Error:', error);
        router.push('/limit');
        return;
      });
  };

  /**
   * CHECK IF VIEW DATA EXISTS
   */
  useEffect(() => {
    if (
      appStates.activeCity.lastSearch === 'current' ||
      appStates.activeCity.lastSearch === 'home'
    ) {
      !appStates.activeCity.current ? getWeather(appStates.activeCity) : false;
    } else if (appStates.activeCity.lastSearch === 'tomorrow') {
      !appStates.activeCity.tomorrow ? getWeather(appStates.activeCity) : false;
    } else if (appStates.activeCity.lastSearch === 'fiveday') {
      !appStates.activeCity.fiveday ? getWeather(appStates.activeCity) : false;
    }

    return () => {};
  }, [appStates.citysState.activeCity]);

  return <></>;
}
