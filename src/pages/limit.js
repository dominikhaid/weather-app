import React from 'react';
import Link from 'next/link';

export default function Limit() {
  return (
    <React.Fragment>
      <section className="p-4xl w-100">
        <article>
          <h1 className="main-headline">Limit erreicht</h1>
          <p>
            Leider müsssen wir bei diesser Demo ein Limit für Requests auf die
            Accuweather API setzten. Das heutige Limit für Suchanfragen wurde
            erreicht.
          </p>
        </article>
      </section>
    </React.Fragment>
  );
}
