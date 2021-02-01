import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 *@desc NOTE LIST ALL AVAILBALE VIEWS FOR ACTIVE CITY
 *@param {Function} getActivecity - get the current active city
 *@param {Function} setAppState - update app context by given property
 *@param {Object} activeCity - actual city and view to render (string)
 */
export default function Viewlist({getActivecity, setAppState, activeCity}) {
  Viewlist.propTypes = {
    getActivecity: PropTypes.func,
    activeCity: PropTypes.object,
    setAppState: PropTypes.func,
  };

  const handleActiveView = (obj = false) => {
    obj.preventDefault();

    setAppState({
      activeCity: {city: activeCity.city, weatherView: obj.target.id},
    });
  };

  return (
    <ul>
      <h3 className="font-semibold underline text-white">Ansicht</h3>
      {getActivecity().current && (
        <li
          className={
            activeCity.weatherView === 'current'
              ? 'active cursor-pointer py-xs'
              : 'cursor-pointer py-xs'
          }
          key={'current'}
          active={activeCity.weatherView === 'current'}
        >
          <button
            className="btn-ghost"
            id={'current'}
            onClick={e => handleActiveView(e)}
          >
            Jetzt
          </button>
        </li>
      )}
      {getActivecity().tomorrow && (
        <li
          className={
            activeCity.weatherView === 'tomorrow'
              ? 'active cursor-pointer py-xs'
              : 'cursor-pointer py-xs'
          }
          key={'tomorrow'}
          active={activeCity.weatherView === 'tomorrow'}
        >
          <button
            className="btn-ghost"
            id={'tomorrow'}
            onClick={e => handleActiveView(e)}
          >
            Heute
          </button>
        </li>
      )}
      {getActivecity().fiveday && (
        <li
          className={
            activeCity.weatherView === 'fiveday'
              ? 'active cursor-pointer py-xs'
              : 'cursor-pointer py-xs'
          }
          key={'fiveday'}
          active={activeCity.weatherView === 'fiveday'}
        >
          <button
            className="btn-ghost"
            id={'fiveday'}
            href="/"
            onClick={e => handleActiveView(e)}
          >
            5 Tage
          </button>
        </li>
      )}
    </ul>
  );
}
