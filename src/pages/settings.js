import React, {useState} from 'react';
import CitySearch from 'components/CitySearch';
import PropTypes from 'prop-types';
import RadioGrp from 'components/RadioGrp';
import Head from 'next/head';

/**
 * @desc NOTE SETTINGS PAGE
 *@param {Boolen} debug use fake data and skip api calls if true
 *@param {Function} updateRequestState update the request limit
 *@param {Function} updateCitys Seached citys (hometown)
 *@param {Object} citys searched citys
 */
export default function Settings({
  citys,
  updateCitys,
  debug,
  updateRequestState,
}) {
  Settings.propTypes = {
    debug: PropTypes.bool,
    updateRequestState: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
  };

  const [theme, setTheme] = useState();

  if (!process.browser) return <></>;

  const radioFields = [
    {
      id: 'light',
      label: 'Hell',
      group: 'radioGroup',
      value: 'light',
      checked: localStorage.theme === 'light',
      onChange: e => {
        localStorage.theme = 'light';
        e.target.checked = true;
        document.querySelector('html').classList.remove('dark');
        document.querySelector('html').classList.add('light');
        setTheme('light');
      },
    },
    {
      id: 'dark',
      label: 'Dunkel',
      group: 'radioGroup',
      value: 'dark',
      checked: localStorage.theme === 'dark',
      onChange: e => {
        localStorage.theme = 'dark';
        e.target.checked = true;
        document.querySelector('html').classList.add('dark');
        document.querySelector('html').classList.remove('light');
        setTheme('dark');
      },
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Weather App | Setup</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="w-100">
        <h1 className="main-headline">Settings</h1>
        <form>
          <h4>Theme</h4>
          <RadioGrp fields={radioFields} />
          <h4>Hometown</h4>
          <CitySearch
            searchRadio={'home'}
            citys={citys}
            updateCitys={updateCitys}
            debug={debug}
            updateRequestState={updateRequestState}
          />
        </form>
      </article>
    </React.Fragment>
  );
}
