import React from 'react';
import PropTypes from 'prop-types';
import Viewlist from './Viewlist';
import Citylist from './Citylist';
import ConfirmButtons from './ConfirmButtons';

/**
 * @desc NOTE RENDER THE VIEW SWITCHER
 *@param {Function} getActivecity - get the current city to reder (object)
 *@param {Object} citys - all searched citys
 *@param {Function} updateCitys - update citys context (add city)
 *@param {Function} setAppState - update app context by given property
 *@param {Object} activeCity - actual city and view to render (string)
 *@param {Object} state - submenu state
 *@param {Function} setSubMenu - change submenu state
 */
export default function WeatherNav({
  getActivecity,
  citys,
  updateCitys,
  setAppState,
  activeCity,
  state,
  setSubMenu,
}) {
  WeatherNav.propTypes = {
    getActivecity: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
    setAppState: PropTypes.func,
    activeCity: PropTypes.object,
    state: PropTypes.object,
    setSubMenu: PropTypes.func,
  };

  if (!citys || state.menu !== 'weather' || !state.active) return <></>;

  return (
    <section
      id="weatherNav"
      className="bg-secondary dark:bg-secondary-dark p-2xl text-white"
      style={{
        position: 'absolute',
        zIndex: '90',
        top: '9px',
        left: '0px',
        width: '100%',
        height: 'calc(100% - 1rem)',
      }}
    >
      <Citylist
        getActivecity={getActivecity}
        citys={citys}
        setAppState={setAppState}
        activeCity={activeCity}
      />
      <Viewlist
        getActivecity={getActivecity}
        setAppState={setAppState}
        activeCity={activeCity}
      />
      <ConfirmButtons
        ok="Ok"
        cancel="Abbrechen"
        onConfirm={() =>
          setSubMenu({
            menu: false,
            active: false,
          })
        }
        disabled={false}
        onCancel={() =>
          setSubMenu({
            menu: false,
            active: false,
          })
        }
      />
    </section>
  );
}
