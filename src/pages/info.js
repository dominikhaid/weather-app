import React from 'react';

export default function Info(weatherStates) {
  return (
    <React.Fragment>
      <section className="primary">
        <article class="boxed prose lg:prose-lg">
          <h1>Weather App created with Next.js</h1>
        </article>
        <article className="boxed bg-secondary-light">
          <h2>Credits</h2>
          <p className="mb-10">
            Der Dank geht an dieser Stelle an den Schöpfer der Weather-Icons
            Erikflowers, die Macher von Next.js und TailwindCSS.
          </p>
          <p className="spaced justify-start">
            <a href="https://nextjs.org/" traget="blank">
              @Next.js
            </a>
            <a href="https://developer.accuweather.com/" traget="blank">
              @AccuWeather
            </a>
            <a
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
