import React from 'react';
import {useRouter} from 'next/router';

export default function Info(appState) {
  const router = useRouter();

  if (process.browser && !localStorage.home) router.push('/settings');
  if (!process.browser) return <></>;

  

  return (
    <React.Fragment>
      <section className="p-4xl pb-none pt-6xl w-100">
        <article>
          <h1 className="main-headline">Weather App created with Next.js</h1>
          <h2>Home</h2>
          <p>{localStorage.home}</p>
        </article>
      </section>
    </React.Fragment>
  );
}
