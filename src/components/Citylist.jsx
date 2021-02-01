import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE LIST ALL CITYS IN CITYS STATE
 *@param {Object} citys - all searched citys
 *@param {Function} updateCitys - update citys context (add city)
 *@param {Object} activeCity - actual city and view to render (string)
 */
export default function Citylist({citys, setAppState, activeCity}) {
  Citylist.propTypes = {
    citys: PropTypes.object,
    activeCity: PropTypes.object,
    setAppState: PropTypes.func,
  };

  const handleActiveCity = (obj = false, city = false) => {
    obj.preventDefault();

    setAppState({
      activeCity: {city: city, weatherView: activeCity.weatherView},
    });
  };
  return (
    <ul className="mb-lg">
      <h3 className="font-semibold underline">Citys</h3>

      {Object.values(citys).map(city => {
        return (
          <li
            className={
              activeCity.city === city.city
                ? 'active cursor-pointer py-xs'
                : 'cursor-pointer py-xs'
            }
            key={city.city}
            active={activeCity.city === city.city}
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
