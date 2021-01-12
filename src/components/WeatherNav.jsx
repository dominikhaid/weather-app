import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER THE VIEW SWITCHER
 *@parma {Object} appStates - the actual state object
 */
export default function WeatherNav(appStates = false) {
  if (!appStates || !appStates.citys) return <></>;

  /**
   * @desc NOTE LIST ALL CITYS IN CITYS STATE
   *@parma {Object} appStates - the actual state object
   */
  function CityList({
    getActivecity = false,
    citys = false,
    updateCitysState = false,
  }) {
    CityList.propTypes = {
      getActivecity: PropTypes.func,
      citys: PropTypes.object,
      updateCitysState: PropTypes.func,
    };

    const handleActiveCity = (obj = false, city = false) => {
      obj.preventDefault();
      setActiveCity(city);
    };

    const setActiveCity = newCity => {
      let res = Object.values(citys).filter(findCity => {
        return newCity === findCity.city;
      });

      if (res) updateCitysState({activeCity: res[0]});
    };

    return (
      <ul className="mb-lg">
        <h3 className="font-semibold underline">Locations</h3>

        {Object.values(citys).map(city => {
          return (
            <li
              className="cursor-pointer py-xs"
              key={city.city}
              active={getActivecity().city === city.city}
            >
              <button onClick={e => handleActiveCity(e, city.city)}>
                {city.city}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  /**
   *@desc NOTE LIST ALL AVAILBALE VIEWS FOR ACTIVE CITY
   *@parma {Object} appStates - the actual state object
   */
  const ViewList = ({
    getActivecity = false,
    citys = false,
    setAppState = false,
    activeCity = false,
  }) => {
    ViewList.propTypes = {
      getActivecity: PropTypes.func,
      citys: PropTypes.object,
      activeCity: PropTypes.object,
      setAppState: PropTypes.func,
    };

    const handleActiveView = (obj = false) => {
      obj.preventDefault();
      setAppState({activeCity: {weatherView: obj.target.id}});
    };

    return (
      <ul>
        <h3 className="font-semibold underline">Views</h3>
        {getActivecity().current && (
          <li
            className="cursor-pointer py-xs"
            key={'current'}
            active={activeCity.weatherView === 'current'}
          >
            <button
              id={'current'}
              onClick={e => handleActiveView(e)}
              onKeyPress={e => handleActiveView(e)}
            >
              Jetzt
            </button>
          </li>
        )}
        {getActivecity().tomorrow && (
          <li
            className="cursor-pointer py-xs"
            key={'tomorrow'}
            active={activeCity.weatherView === 'tomorrow'}
          >
            <button id={'tomorrow'} onClick={e => handleActiveView(e)}>
              Heute
            </button>
          </li>
        )}
        {getActivecity().fiveday && (
          <li
            className="cursor-pointer py-xs"
            key={'fiveday'}
            active={activeCity.weatherView === 'fiveday'}
          >
            <button id={'fiveday'} href="/" onClick={e => handleActiveView(e)}>
              5 Tage
            </button>
          </li>
        )}
      </ul>
    );
  };

  return (
    <section
      id="weatherNav"
      className="bg-gray-dark text-white z-50 p-2xl flex-col fixed left-25 top-50 flex justify-center"
    >
      <CityList {...appStates} />
      <ViewList {...appStates} />
    </section>
  );
}
