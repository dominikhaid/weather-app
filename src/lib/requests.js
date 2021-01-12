import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import data_current from '@/data/current';
import data_tomorrow from '@/data/tomorrow';
import data_fiveday from '@/data/fiveday';

export default function RequestData(appStates) {
  const router = useRouter();

  /**
   * @desc NOTE WEATHER REQUEST CONDITIONS WATCHING ACTIVECITY
   */
  useEffect(() => {
    if (
      appStates.getHometown() &&
      appStates.activeCity.weatherView === 'home' &&
      !appStates.getHometown().current &&
      localStorage.home
    ) {
      getWeather(appStates.getHometown());
      return;
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'current' &&
      !appStates.getActivecity().current
    ) {
      getWeather(appStates.getActivecity());
      return;
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'tomorrow' &&
      !appStates.getActivecity().tomorrow
    ) {
      getWeather(appStates.getActivecity());
      return;
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'fiveday' &&
      !appStates.getActivecity().fiveday
    ) {
      getWeather(appStates.getActivecity());
      return;
    }

    return () => {};
  }, [appStates.activeCity]);

  if (!process.browser) return <></>;

  /**
   *@desc NOTE WEATHER REQUESTS
   *@param {Object} locObj Object (name,key)
   */
  const getWeather = locObj => {
    let url;
    let data;

    const debug_data = () => {
      data =
        !locObj.weatherView || locObj.weatherView === 'current'
          ? data_current
          : locObj.weatherView === 'tomorrow'
          ? data_tomorrow
          : data_fiveday;

      if (!locObj.weatherView) {
        appStates.updateCitys({
          ...locObj,
          current: data[0],
          activeCity: true,
          hometown: true,
        });
      } else if (locObj.weatherView === 'current') {
        appStates.updateCitys({
          ...locObj,
          current: data[0],
          activeCity: true,
        });
      } else if (locObj.weatherView === 'tomorrow') {
        appStates.updateCitys({
          ...locObj,
          tomorrow: data,
          activeCity: true,
        });
      } else if (locObj.weatherView === 'fiveday') {
        appStates.updateCitys({
          ...locObj,
          fiveday: data,
          activeCity: true,
        });
      } else {
        appStates.updateCitys({
          ...locObj,
          current: data[0],
          activeCity: true,
        });
      }
      appStates.updateRequestState();
    };

    if (appStates.debug) debug_data();
    if (appStates.debug) return;

    if (locObj.weatherView === 'current' || !locObj.weatherView) {
      url = `https://dataservice.accuweather.com/currentconditions/v1/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else if (locObj.weatherView === 'tomorrow') {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else if (locObj.weatherView === 'fiveday') {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    } else {
      url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locObj.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${locObj.city}&language=de&details=true&metric=true`;
    }

    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        if (!locObj.weatherView) {
          appStates.updateCitys({
            ...locObj,
            current: data[0],
            activeCity: true,
            hometown: true,
          });
        } else if (locObj.weatherView === 'current') {
          appStates.updateCitys({
            ...locObj,
            current: data[0],
            activeCity: true,
          });
        } else if (locObj.weatherView === 'tomorrow') {
          appStates.updateCitys({
            ...locObj,
            tomorrow: data,
            activeCity: true,
          });
        } else if (locObj.weatherView === 'fiveday') {
          appStates.updateCitys({
            ...locObj,
            fiveday: data,
            activeCity: true,
          });
        } else {
          appStates.updateCitys({
            ...locObj,
            current: data[0],
            activeCity: true,
          });
        }
        appStates.updateRequestState();
      })
      .catch(error => {
        console.error('Error:', error);
        router.push('/limit');
        return;
      });
  };

  return <></>;
}
