import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

/**
 * @desc NOTE LIST ALL CITYS IN CITYS STATE
 *@param {Object} citys - all searched citys
 *@param {Function} updateCitys - update citys context (add city)
 *@param {Object} activeCity - actual city and view to render (string)
 */
export default function Citylist({
  citys,
  getCityByName,
  activeCity,
  switcher,
  setSwitcher,
}) {
  Citylist.propTypes = {
    citys: PropTypes.object,
    activeCity: PropTypes.object,
    switcher: PropTypes.object,
    setSwitcher: PropTypes.func,
    getCityByName: PropTypes.func,
  };

  const handleActiveCity = (obj = false, city = false) => {
    obj.preventDefault();
    if (!city) return false;
    const cityFound = getCityByName(city);
    setSwitcher({
      ...cityFound,
      active: cityFound.current
        ? 'current'
        : cityFound.tomorrow
        ? 'tomorrow'
        : cityFound.fiveday
        ? 'fiveday'
        : '',
    });
  };

  return (
    <ul className="mb-lg select-list">
      <h3 className="flex-none">City</h3>

      {Object.values(citys).map(city => {
        return (
          <li
            className={
              switcher.city === city.city
                ? 'active cursor-pointer'
                : 'cursor-pointer'
            }
            key={uuid()}
          >
            <button
              className="btn-ghost"
              onClick={e => handleActiveCity(e, city.city)}
            >
              {city.city}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
