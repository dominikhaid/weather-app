import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import data_current from 'data/current';
import data_tomorrow from 'data/tomorrow';
import data_fiveday from 'data/fiveday';

export default function RequestData(appStates) {
  const router = useRouter();

  /**
   * @desc NOTE WEATHER REQUEST CONDITIONS WATCHING ACTIVECITY
   */
  useEffect(() => {
    if (
      appStates.getHometown() &&
      appStates.activeCity.weatherView === 'home' &&
      !appStates.getHometown().fiveday &&
      localStorage.home
    ) {
      getWeather(appStates.getHometown());
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'current' &&
      !appStates.getActivecity().current
    ) {
      getWeather(appStates.getActivecity());
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'tomorrow' &&
      !appStates.getActivecity().tomorrow
    ) {
      getWeather(appStates.getActivecity());
    }

    if (
      appStates.getActivecity() &&
      appStates.activeCity.weatherView === 'fiveday' &&
      !appStates.getActivecity().fiveday
    ) {
      getWeather(appStates.getActivecity());
    }

    return () => {};
  }, [appStates.activeCity]);

  if (!process.browser) return <></>;

  /**
   *@desc NOTE WEATHER REQUESTS
   *@param {Object} request_city Object (name,key)
   */
  const getWeather = request_city => {
    let url;

    const update_data = (appStates, request_city, request_result) => {
      if (appStates.activeCity.weatherView === 'home') {
        appStates.updateCitys({
          ...JSON.parse(JSON.stringify(request_city)),
          fiveday: request_result,
          activeCity: true,
          hometown: true,
          weatherView: 'home',
        });
        appStates.updateRequestState();
      } else if (appStates.activeCity.weatherView === 'current') {
        appStates.updateCitys({
          ...JSON.parse(JSON.stringify(request_city)),
          current: request_result[0],
          activeCity: true,
          weatherView: 'current',
        });
        appStates.updateRequestState();
      } else if (appStates.activeCity.weatherView === 'tomorrow') {
        appStates.updateCitys({
          ...JSON.parse(JSON.stringify(request_city)),
          tomorrow: request_result,
          activeCity: true,
          weatherView: 'tomorrow',
        });
        appStates.updateRequestState();
      } else if (appStates.activeCity.weatherView === 'fiveday') {
        appStates.updateCitys({
          ...JSON.parse(JSON.stringify(request_city)),
          fiveday: request_result,
          activeCity: true,
          weatherView: 'fiveday',
        });
        appStates.updateRequestState();
      }
    };

    const set_req_url = () => {
      let url;
      if (appStates.activeCity.weatherView === 'current') {
        url = `https://dataservice.accuweather.com/currentconditions/v1/${request_city.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${request_city.city}&language=de&details=true&metric=true`;
        if (appStates.debug) url = JSON.parse(JSON.stringify(data_current));
      } else if (appStates.activeCity.weatherView === 'tomorrow') {
        url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${request_city.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${request_city.city}&language=de&details=true&metric=true`;
        if (appStates.debug) url = JSON.parse(JSON.stringify(data_tomorrow));
      } else if (
        appStates.activeCity.weatherView === 'fiveday' ||
        appStates.activeCity.weatherView === 'home'
      ) {
        url = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${request_city.Key}?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${request_city.city}&language=de&details=true&metric=true`;
        if (appStates.debug) url = JSON.parse(JSON.stringify(data_fiveday));
      }
      return url;
    };

    const debug_data = () => {
      let data = set_req_url();

      if (!data || typeof data !== 'object') return;
      update_data(appStates, request_city, data);
    };

    if (appStates.debug) debug_data();
    if (appStates.debug) return;

    url = set_req_url();

    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        update_data(appStates, request_city, data);
      })
      .catch(error => {
        router.push('/limit');
        return;
      });
  };

  return <></>;
}
