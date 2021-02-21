import React, {useState} from 'react';
import PropTypes from 'prop-types';
import CitySearch from 'components/CitySearch';
import RadioGrp from 'components/RadioGrp';
import Head from 'next/head';

/**
 * @desc NOTE WEATHER SEARCH PAGE
 *@param {Boolen} debug use fake data and skip api calls if true
 *@param {Function} updateRequestState update the request limit
 *@param {Function} updateCitys Seached citys (hometown)
 *@param {Object} citys searched citys
 */
export default function SearchView({
  debug,
  updateRequestState,
  citys,
  updateCitys,
}) {
  SearchView.propTypes = {
    debug: PropTypes.bool,
    updateRequestState: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
  };

  const [searchRadio, setSearchRadio] = useState('current');
  const radioFields = [
    {
      id: 'jetzt',
      label: 'Jetzt',
      group: 'radioGroup',
      value: 'current',
      checked: searchRadio === 'current',
      onChange: e => {
        e.target.checked = true;
        setSearchRadio('current');
      },
    },
    {
      id: 'heute',
      label: 'Heute',
      group: 'radioGroup',
      value: 'tomorrow',
      checked: searchRadio === 'tomorrow',
      onChange: e => {
        e.target.checked = true;
        setSearchRadio('tomorrow');
      },
    },
    {
      id: 'fiveday',
      label: '5 Tage',
      group: 'radioGroup',
      value: 'fiveday',
      checked: searchRadio === 'fiveday',
      onChange: e => {
        e.target.checked = true;
        setSearchRadio('fiveday');
      },
    },
  ];

  return (
    <React.Fragment>
      <Head>
        <title>Weather App | Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="p-4xl pt-6xl pb-none w-100">
        <form>
          <h1 className="main-headline">Get Your Weather Info</h1>
          <h2>Search</h2>
          <RadioGrp fields={radioFields} />
          <CitySearch
            searchRadio={searchRadio}
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
