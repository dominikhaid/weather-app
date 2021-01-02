import React from 'react';

export default function Info(weatherStates) {
  return (
    <React.Fragment>
      <section className="p-4xl w-100">
        <article>
          <h1 className="main-headline">Weather App created with Next.js</h1>
          <h2>Credits</h2>
          <p>
            Der Dank geht an dieser Stelle an den Schöpfer der Weather-Icons
            Erikflowers,
            <br /> die Macher von Next.js und TailwindCSS.
          </p>
          <p className="spaced justify-start py-2xl">
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
      </section>
    </React.Fragment>
  );
}
