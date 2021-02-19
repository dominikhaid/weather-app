import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Viewlist from './Viewlist';
import Citylist from './Citylist';
import ConfirmButtons from './ConfirmButtons';

/**
 * @desc NOTE RENDER THE VIEW SWITCHER
 *@param {Function} getActivecity - get the current city to reder (object)
 *@param {Object} citys - all searched citys
 *@param {Function} setAppState - update app context by given property
 *@param {Object} activeCity - actual city and view to render (string)
 *@param {Object} state - submenu state
 *@param {Function} setSubMenu - change submenu state
 */
export default function MenuAppOverlay({
  getActivecity,
  citys,
  setAppState,
  activeCity,
  state,
  setSubMenu,
  getCityByName,
}) {
  MenuAppOverlay.propTypes = {
    getActivecity: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
    setAppState: PropTypes.func,
    activeCity: PropTypes.object,
    state: PropTypes.object,
    setSubMenu: PropTypes.func,
    getCityByName: PropTypes.func,
  };

  useEffect(() => {
    const cityFound = getCityByName(switcher.city);
    setSwitcher({...cityFound, acitve: switcher.acitve});
    return () => {};
  }, [activeCity]);

  const [switcher, setSwitcher] = useState({
    city: '',
    weatherView: '',
    acitve: '',
  });

  if (
    Object.keys(citys).length < 1 ||
    state.menu !== 'weather' ||
    !state.active
  )
    return <></>;

  return (
    <section id="menu-app-overlay">
      <div id="menu-app-overlay-scroll">
        <Citylist
          getActivecity={getActivecity}
          citys={citys}
          switcher={switcher}
          getCityByName={getCityByName}
          setSwitcher={setSwitcher}
          activeCity={activeCity}
        />
        {switcher.city !== '' ? (
          <Viewlist
            getActivecity={getActivecity}
            switcher={switcher}
            getCityByName={getCityByName}
            setSwitcher={setSwitcher}
            activeCity={activeCity}
          />
        ) : (
          ''
        )}
        <ConfirmButtons
          ok="Ok"
          cancel="Abbrechen"
          onConfirm={() => {
            setAppState({
              activeCity: {
                city: switcher.city,
                weatherView: switcher.active,
              },
            });

            setSubMenu({
              menu: false,
              active: false,
            });
          }}
          disabled={false}
          onCancel={() =>
            setSubMenu({
              menu: false,
              active: false,
            })
          }
        />
        <p style={{width: '100%', height: '50px'}}></p>
      </div>
    </section>
  );
}
