import React from 'react';
import PropTypes from 'prop-types';
import {weatherTomorrow, weatherCurrent, weatherFiveDay} from 'lib/render';
import {useRouter} from 'next/router';

/**
 * @desc NOTE RENDER WEATHER SEARCH RESULTS
 * @param {Function} getActivecity return the city to display
 * @param {Object} activeCity the current city and view state
 * @param {Object} citys alle searched city
 */
export default function Weather({citys, getActivecity, activeCity}) {
  Weather.propTypes = {
    getActivecity: PropTypes.func,
    activeCity: PropTypes.object,
    citys: PropTypes.object,
  };
  const router = useRouter();

  function renderWeather() {
    if (
      process.browser &&
      !getActivecity().city &&
      Object.keys(citys).length < 1
    )
      router.push('/search');

    if (activeCity.weatherView === 'home' && getActivecity().current)
      return weatherCurrent(getActivecity());

    if (activeCity.weatherView === 'current' && getActivecity().current)
      return weatherCurrent(getActivecity());

    if (activeCity.weatherView === 'tomorrow' && getActivecity().tomorrow)
      return weatherTomorrow(getActivecity());

    if (activeCity.weatherView === 'fiveday' && getActivecity().fiveday)
      return weatherFiveDay(getActivecity());

    return <></>;
  }

  return renderWeather();
}
