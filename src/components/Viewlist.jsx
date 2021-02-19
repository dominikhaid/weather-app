import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

/**
 *@desc NOTE LIST ALL AVAILBALE VIEWS FOR ACTIVE CITY
 *@param {Function} getActivecity - get the current active city
 *@param {Function} setAppState - update app context by given property
 *@param {Object} activeCity - actual city and view to render (string)
 */
export default function Viewlist({
  getActivecity,
  switcher,
  setSwitcher,
  activeCity,
  getCityByName,
}) {
  Viewlist.propTypes = {
    getActivecity: PropTypes.func,
    activeCity: PropTypes.object,
    setAppState: PropTypes.func,
    switcher: PropTypes.object,
    setSwitcher: PropTypes.func,
    getCityByName: PropTypes.func,
  };

  const handleActiveView = (obj = false, city = false) => {
    obj.preventDefault();
    setSwitcher({
      ...switcher,
      active: obj.target.id,
    });
  };

  return (
    <ul>
      <h3 className="flex-none">Ansicht</h3>
      {switcher.current && (
        <li
          className={
            switcher.active === 'current'
              ? 'active cursor-pointer'
              : 'cursor-pointer'
          }
          key={uuid()}
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
      {switcher.tomorrow && (
        <li
          className={
            switcher.active === 'tomorrow'
              ? 'active cursor-pointer'
              : 'cursor-pointer'
          }
          key={uuid()}
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
      {switcher.fiveday && (
        <li
          className={
            switcher.active === 'fiveday'
              ? 'active cursor-pointer'
              : 'cursor-pointer'
          }
          key={uuid()}
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
