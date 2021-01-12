import React from 'react';
import {weatherTomorrow, weatherCurrent, weatherFiveDay} from '@/lib/render';

import {useRouter} from 'next/router';

export default function Weather(appStates) {
  const router = useRouter();

  /**
   * COLLECT DATA TO RENDER
   */
  function renderWeather() {
    if (process.browser && !appStates.getActivecity() && !appStates.citys)
      router.push('/search');
    console.log(appStates.activeCity);

    if (
      appStates.activeCity.weatherView === 'home' &&
      appStates.getActivecity().current
    )
      return weatherCurrent(appStates.getActivecity());

    if (
      appStates.activeCity.weatherView === 'current' &&
      appStates.getActivecity().current
    )
      return weatherCurrent(appStates.getActivecity());

    if (
      appStates.activeCity.weatherView === 'tomorrow' &&
      appStates.getActivecity().tomorrow
    )
      return weatherTomorrow(appStates.getActivecity());

    if (
      appStates.activeCity.weatherView === 'fiveday' &&
      appStates.getActivecity().fiveday
    )
      return weatherFiveDay(appStates.getActivecity());

    return <></>;
  }

  return (
    <section className="p-4xl pb-none pt-6xl w-100">{renderWeather()}</section>
  );
}
