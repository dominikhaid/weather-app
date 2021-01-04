import React from 'react';

export default function Credits(weatherStates) {
  return (
    <React.Fragment>
      <section className="p-4xl pb-none pt-6xl w-100">
        <article>
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
      </section>
    </React.Fragment>
  );
}
