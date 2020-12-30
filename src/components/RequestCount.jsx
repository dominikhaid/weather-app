import React from 'react';
import {useRouter} from 'next/router';

export default function RequestCount(appStates) {
  const router = useRouter();
  if (!process.browser) return <></>;
  const DATE_TEST = new Date().toGMTString().replace(/(\d\d:\d\d:\d\d.*)/, '');

  //SET COOKIE IF REUQEST LIMIT REACHED
  if (appStates.limit <= -1) {
    window.localStorage.setItem('limit', DATE_TEST);
  }

  const COOKIE_LIMIT =
    window.localStorage.getItem('limit') &&
    window.localStorage.getItem('limit') === DATE_TEST
      ? true
      : false;

  
  if (COOKIE_LIMIT && window.location.pathname !== '/app/weather-app/limit')
    router.push('/limit');

  return window.location.pathname === '/app/weather-app/weather' ? (
    <React.Fragment>
      <section className="bg-primary-500">
        <div className="p-8">
          <i name="dna" />
          <p>{appStates.limit <= 0 ? 'REQUEST LIMIT' : appStates.limit}</p>
        </div>
      </section>
    </React.Fragment>
  ) : (
    <React.Fragment></React.Fragment>
  );
}
