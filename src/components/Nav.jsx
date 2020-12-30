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
  ];

  return (
    <React.Fragment>
      <section className="boxed-sm bg-secondary" id="main-menue">
        <ul
          className="spaced-lg"
          icon="labeled"
        >
          {data.map(item => {
            if (new RegExp(item.href).test(window.location.pathname))
              return false;
            return (
              <li  key={item.title}>
                <Link href={item.href}>
                  <a
                    className="text-md text-base font-semibold"
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
