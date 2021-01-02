import React from 'react';
import Link from 'next/link';

export default function Nav(appStates) {
  if (!process.browser) return <></>;

  let data = [
    {
      href: '/info',
      title: 'Info',
    },
    {
      href: '/search',
      title: 'Search',
    },
    {
      href: '/weather',
      title: 'Weather',
    },
    {
      href: '/limit',
      title: 'Limit',
    },
  ];

  console.log(appStates.citysState);
  return (
    <React.Fragment>
      <section className="p-lg w-100" id="main-menue">
        <ul className="spaced-lg justify-center" icon="labeled">
          {data.map(item => {
            if (item.title === 'Weather' && appStates.citysState.length < 1)
              return false;
            return (
              <li className="flex-1 text-center p-none" key={item.title}>
                <Link href={item.href}>
                  <a
                    className="flex-1 max-w-25 text-center font-semibold"
                    href={item.href}
                  >
                    <i id={item.title.toLowerCase()} />
                    {item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
}
