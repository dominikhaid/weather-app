import React from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {weatherCurrent} from '@/lib/render';

export default function Info(appStates) {
  const router = useRouter();

  //NOTE LOAD OR UPDATE THE WEATHER DATA FOR THE HOMEVIEW
  useEffect(() => {
    if (
      (!appStates.getHometown() && localStorage.home) ||
      (localStorage.home &&
        appStates.getHometown() &&
        JSON.parse(localStorage.home).city !== appStates.getHometown().city) ||
      (localStorage.home &&
        appStates.getHometown().city &&
        JSON.parse(localStorage.home).city === appStates.getHometown().city &&
        !appStates.getHometown().current)
    )
      appStates.updateCitys(JSON.parse(localStorage.home));

    return () => {};
  }, [appStates.activeCity]);

  //NOTE WORKAROUND FOR NEXT/ROUTER
  if (!process.browser) return <></>;

  //NOTE HOMETOWN SET IN LOCALSTORAGE BU NO DATA LOADED OR NEDD TOBE REFRESHED
  if (process.browser && !localStorage.home) router.push('/settings');

  //NOTE HOMETOWN SET IN LOCALSTORAGE BU NO DATA LOADED OR NEED TOBE REFRESHED
  if (!appStates.getHometown().city || !appStates.getHometown().current)
    return <></>;

  return (
    <React.Fragment>
      <section className="p-4xl pb-none pt-6xl w-100">
        <article>{weatherCurrent(appStates.getHometown())}</article>
      </section>
    </React.Fragment>
  );
}
