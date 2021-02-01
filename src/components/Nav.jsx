import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import RequestCount from 'components/RequestCount';
import Cloud from 'public/images/svg/cloud.svg';
import Home from 'public/images/svg/home.svg';
import Settings from 'public/images/svg/cog.svg';
import Search from 'public/images/svg/location-marker.svg';
import Heart from 'public/images/svg/heart.svg';
import WeatherNav from 'components/WeatherNav';

/**
 *@desc NOTE RENDER MAIN NAVIGATION
 *@param {Number} limit request limit
 *@param {Boolen} visibile weather icon is visible or not
 *@param {Function} getActivecity - get the current city to reder (object)
 *@param {Object} citys - all searched citys
 *@param {Function} updateCitys - update citys context (add city)
 *@param {Function} setAppState - update app context by given property
 *@param {Object} activeCity - actual city and view to render (string)
 */
export default function Nav({
  limit,
  getActivecity,
  citys,
  updateCitys,
  setAppState,
  activeCity,
}) {
  Nav.propTypes = {
    limit: PropTypes.number,
    weather: PropTypes.bool,
    getActivecity: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
    setAppState: PropTypes.func,
    activeCity: PropTypes.object,
  };

  const [active, setActive] = useState('/home');
  const [subMenu, setSubMenu] = useState({
    menu: false,
    active: false,
  });

  if (!process.browser) return <></>;

  let data = [
    {
      href: '/home',
      title: 'Home',
      onClick: e => {
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Home className="flex-1 text-white" />,
    },
    {
      href: '/search',
      title: 'Search',
      onClick: e => {
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Search className="flex-1 text-white" />,
    },
    {
      href: '/weather',
      title: 'Weather',
      onClick: e => {
        setSubMenu({active: true, menu: 'weather'});
        setActive(e);
      },
      icon: <Cloud className="flex-1 text-white" />,
    },
    {
      href: '/settings',
      title: 'Settings',
      onClick: e => {
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Settings className="flex-1 text-white" />,
    },
    {
      href: '/credits',
      title: 'Credits',
      onClick: e => {
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Heart className="text-white" />,
    },
  ];

  return (
    <>
      <section
        style={{
          position: 'absolute',
          top: '9px',
          left: '-80px',
          width: '80px',
          height: 'calc(100% - 1rem)',
        }}
        id="main-menu"
      >
        <ul icon="labeled">
          {data.map(item => {
            return (
              <li
                className={active === item.href ? 'active' : ''}
                key={item.title}
              >
                <p className="m-none text-gray">{item.title}</p>
                <Link href={item.href}>
                  <button
                    className="btn-ghost"
                    onClick={() => item.onClick(item.href)}
                  >
                    {item.icon}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
        <RequestCount limit={limit} />
      </section>
      <WeatherNav
        setSubMenu={setSubMenu}
        state={subMenu}
        getActivecity={getActivecity}
        citys={citys}
        updateCitys={updateCitys}
        activeCity={activeCity}
        setAppState={setAppState}
      />
    </>
  );
}
