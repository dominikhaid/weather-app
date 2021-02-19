import React from 'react';
import PropTypes from 'prop-types';
import {useRouter} from 'next/router';
import Bolt from 'public/images/svg/lightning-bolt.svg';
import Fire from 'public/images/svg/fire.svg';

/**
 * @desc NOTE RENDER THE REQUEST LIMIT STATUS
 *@param {Number} limit requestg limit state
 */
export default function RequestCount({limit}) {
  RequestCount.propTypes = {
    limit: PropTypes.number,
  };

  const router = useRouter();
  if (!process.browser) return <></>;
  const DATE_TEST = new Date().toGMTString().replace(/(\d\d:\d\d:\d\d.*)/, '');

  //NOTE SET COOKIE IF REUQEST LIMIT REACHED
  if (limit <= -1) {
    window.localStorage.setItem('limit', DATE_TEST);
  }

  const COOKIE_LIMIT =
    window.localStorage.getItem('limit') &&
    window.localStorage.getItem('limit') === DATE_TEST
      ? true
      : false;

  if (COOKIE_LIMIT && window.location.pathname !== '/app/weather-app/limit')
    router.push('/limit');

  return (
    <React.Fragment>
      <aside id="main-menu-request-count" className="p-sm">
        {limit > 5 ? (
          <Bolt className="text-green" />
        ) : (
          <Fire className="text-red" />
        )}
        <p className="text-white text-center font-semibold m-none">{limit}</p>
      </aside>
    </React.Fragment>
  );
}
