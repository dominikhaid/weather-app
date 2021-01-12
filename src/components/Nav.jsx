import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import RequestCount from '@/components/RequestCount';
import Cloud from '@/public/images/svg/cloud.svg';
import Home from '@/public/images/svg/home.svg';
import Settings from '@/public/images/svg/cog.svg';
import Search from '@/public/images/svg/location-marker.svg';
import Heart from '@/public/images/svg/heart.svg';

export default function Nav({limit, citys}) {
  Nav.propTypes = {
    limit: PropTypes.number,
    citys: PropTypes.object,
  };

  const [active, setActive] = useState('/home');
  if (!process.browser) return <></>;

  let data = [
    {
      href: '/home',
      title: 'Home',
      icon: <Home className="flex-1 text-white" />,
    },
    {
      href: '/search',
      title: 'Search',
      icon: <Search className="flex-1 text-white" />,
    },
    {
      href: '/weather',
      title: 'Weather',
      icon: <Cloud className="flex-1 text-white" />,
    },
    {
      href: '/settings',
      title: 'Settings',
      icon: <Settings className="flex-1 text-white" />,
    },
    {
      href: '/credits',
      title: 'Credits',
      icon: <Heart className="text-white" />,
    },
  ];

  return (
    <React.Fragment>
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
            if (item.title === 'Weather' && !citys) return false;
            return (
              <li
                className={active === item.href ? 'active' : ''}
                key={item.title}
              >
                <p className="mb-none text-gray">{item.title}</p>
                <Link href={item.href}>
                  <button onClick={() => setActive(item.href)}>
                    {item.icon}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
        <RequestCount {...limit} />
      </section>
    </React.Fragment>
  );
}
