import React from 'react';

/**
 * @desc NOTE SETTINGS PAGE
 *@param {Boolen} debug use fake data and skip api calls if true
 *@param {Function} updateRequestState update the request limit
 *@param {Function} updateCitys Seached citys (hometown)
 *@param {Object} citys searched citys
 */
export default function Limit() {
  return (
    <React.Fragment>
      <article className="w-100">
        <h1 className="main-headline">Limit erreicht</h1>
        <p>
          Leider müsssen wir bei diesser Demo ein Limit für Requests auf die
          Accuweather API setzten. Das heutige Limit für Suchanfragen wurde
          erreicht.
        </p>
      </article>
    </React.Fragment>
  );
}
