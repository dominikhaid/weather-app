import React from 'react';
import Head from 'next/head';

/**
 * @desc NOTE RENDER CERDITS PAGE
 */
export default function Credits() {
  return (
    <>
      <Head>
        <title>Weather App | Search</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="w-100">
        <h1 className="main-headline">Credits</h1>
        <p>
          Der Dank geht an dieser Stelle an den Schöpfer der Weather-Icons
          Erikflowers,
          <br /> die Macher von Next.js und TailwindCSS.
        </p>
        <p className="spaced justify-start py-ög">
          <a className="flex-1" href="https://nextjs.org/" traget="blank">
            @Next.js
          </a>
          <a
            className="flex-1"
            href="https://developer.accuweather.com/"
            traget="blank"
          >
            @AccuWeather
          </a>
          <a
            className="flex-1"
            href="https://erikflowers.github.io/weather-icons/"
            traget="blank"
          >
            @erikflowers
          </a>
        </p>
      </article>
    </>
  );
}
