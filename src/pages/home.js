import React from 'react';
import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {weatherFiveDay} from 'lib/render';
import Head from 'next/head';

/**
 * @desc NOTE RENDER OUR HOME SCREEN
 * @param {Function} getHometown returns the hometown if set
 * @param {Function} updateCitys update the citys context
 * @param {Object} activeCity returns the acutal city and view to render
 */
export default function Info({getHometown, activeCity, updateCitys}) {
  Info.propTypes = {
    getHometown: PropTypes.func,
    updateCitys: PropTypes.func,
    activeCity: PropTypes.object,
  };

  const router = useRouter();

  //NOTE LOAD OR UPDATE THE WEATHER DATA FOR THE HOMEVIEW
  useEffect(() => {
    if (
      (!getHometown().city && localStorage.home) ||
      (localStorage.home &&
        getHometown() &&
        JSON.parse(localStorage.home).city !== getHometown().city)
    )
      updateCitys(JSON.parse(localStorage.home));

    return () => {};
  }, [activeCity]);

  //NOTE WORKAROUND FOR NEXT/ROUTER
  if (!process.browser) return <></>;

  //NOTE HOMETOWN SET IN LOCALSTORAGE BU NO DATA LOADED OR NEDD TOBE REFRESHED
  if (process.browser && !localStorage.home) router.push('/settings');

  //NOTE HOMETOWN SET IN LOCALSTORAGE BU NO DATA LOADED OR NEED TOBE REFRESHED
  if (!getHometown().city || !getHometown().fiveday) return <></>;

  return (
    <React.Fragment>
      <Head>
        <title>Weather App | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {weatherFiveDay(getHometown())}
    </React.Fragment>
  );
}
