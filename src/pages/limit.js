import React from 'react';
import Link from 'next/link';

export default function Limit() {
  return (
    <React.Fragment>
      <section className="primary">
      <article class="boxed prose lg:prose-lg">
      <h1>Limit erreicht</h1>
      </article>
      <article class="bg-secondary-light boxed prose lg:prose-lg">
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
