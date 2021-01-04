import React from 'react';
import Link from 'next/link';

import Cloud from '../../public/images/svg/cloud.svg';
import Home from '../../public/images/svg/home.svg';
import Settings from '../../public/images/svg/cog.svg';
import Search from '../../public/images/svg/location-marker.svg';
import Globe from '../../public/images/svg/globe.svg';

export default function Nav(appStates) {
  if (!process.browser) return <></>;

  let data = [
    {
      href: '/home',
      title: 'Home',
      icon: <Home className="flex-1 text-primary" />,
    },
    {
      href: '/search',
      title: 'Search',
      icon: <Search className="flex-1 text-primary" />,
    },
    {
      href: '/weather',
      title: 'Weather',
      icon: <Cloud className="flex-1 text-primary" />,
    },
    {
      href: '/settings',
      title: 'Settings',
      icon: <Settings className="flex-1 text-primary" />,
    },
    {
      href: '/credits',
      title: 'Credits',
      icon: <Globe className="text-primary" />,
    },
  ];

  return (
    <React.Fragment>
      <section
        className="bg-gray-dark"
        style={{
          position: 'absolute',
          top: '9px',
          left: '-80px',
          width: '80px',
          height: '98%',
        }}
        id="main-menue"
      >
        <ul
          className="mt-7xl ml-sm mr-sm flex flex-wrap flex-column justify-center"
          icon="labeled"
        >
          {data.map(item => {
            if (item.title === 'Weather' && appStates.citysState.length < 1)
              return false;
            return (
              <>
                <p className="mb-none text-gray">{item.title}</p>
                <li
                  className="border-2 border-secondary-dark flex flex-row justify-center bg-secondary-dark rounded-full p-sm text-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-500 ease-in-out"
                  key={item.title}
                >
                  <Link href={item.href}>{item.icon}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
}
