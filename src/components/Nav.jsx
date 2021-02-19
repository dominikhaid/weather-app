import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import RequestCount from 'components/RequestCount';
import Cloud from 'public/images/svg/cloud.svg';
import Home from 'public/images/svg/home.svg';
import Settings from 'public/images/svg/cog.svg';
import Search from 'public/images/svg/location-marker.svg';
import Heart from 'public/images/svg/heart.svg';
import Menu from 'public/images/svg/menu.svg';
import MenuAppOverlay from 'components/MenuAppOverlay';
import uuid from 'react-uuid';

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
  getCityByName,
}) {
  Nav.propTypes = {
    limit: PropTypes.number,
    weather: PropTypes.object,
    getActivecity: PropTypes.func,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
    setAppState: PropTypes.func,
    getCityByName: PropTypes.func,
    activeCity: PropTypes.object,
  };

  const [active, setActive] = useState(
    process.browser
      ? window.location.pathname.replace('/app/weather-app', '')
      : '',
  );
  const [subMenu, setSubMenu] = useState({
    menu: false,
    active: false,
  });

  const Icons = ({icons}) => {
    Icons.propTypes = {
      icons: PropTypes.array,
    };

    return (
      <ul id="main-menu-icons" icon="labeled">
        {icons.map(icon => {
          return (
            <li className={active === icon.href ? 'active' : ''} key={uuid()}>
              <p className="m-none text-gray">{icon.title}</p>
              <Link shallow={true} href={icon.href}>
                <button
                  className="btn-ghost"
                  onClick={() => icon.onClick(icon.href)}
                >
                  {icon.icon}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  let icons = [
    {
      href: '/home',
      title: 'Home',
      onClick: e => {
        document.getElementById('__next').classList.remove('menu');
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Home className="flex-1 text-white" />,
    },
    {
      href: '/search',
      title: 'Search',
      onClick: e => {
        document.getElementById('__next').classList.remove('menu');
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Search className="flex-1 text-white" />,
    },
    {
      href: '/weather',
      title: 'Weather',
      onClick: e => {
        document.getElementById('__next').classList.remove('menu');
        setSubMenu({active: true, menu: 'weather'});
        setActive(e);
      },
      icon: <Cloud className="flex-1 text-white" />,
    },
    {
      href: '/settings',
      title: 'Settings',
      onClick: e => {
        document.getElementById('__next').classList.remove('menu');
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Settings className="flex-1 text-white" />,
    },
    {
      href: '/credits',
      title: 'Credits',
      onClick: e => {
        document.getElementById('__next').classList.remove('menu');
        setSubMenu({active: false, menu: ''});
        setActive(e);
      },
      icon: <Heart className="text-white" />,
    },
  ];

  const MobileToggle = () => {
    const [open, setOpen] = useState(false);

    return (
      <button
        onClick={e => {
          const menu = document.getElementById('__next');
          menu && menu.classList.toggle('menu');
          const anim = document.querySelector('.menu_svg__burger-menu');
          anim && anim.classList.add('animate');

          setTimeout(() => {
            anim && anim.classList.remove('animate');
          }, 1000);

          setOpen(!open);
        }}
        className="btn-ghost"
        id="mobile-menu"
      >
        <Menu />
      </button>
    );
  };

  return (
    <nav id="main-menu">
      <article>
        <MobileToggle />
        <Icons icons={icons} />
        <RequestCount limit={limit} />
        <MenuAppOverlay
          getCityByName={getCityByName}
          setSubMenu={setSubMenu}
          state={subMenu}
          getActivecity={getActivecity}
          citys={citys}
          updateCitys={updateCitys}
          activeCity={activeCity}
          setAppState={setAppState}
        />
      </article>
    </nav>
  );
}
