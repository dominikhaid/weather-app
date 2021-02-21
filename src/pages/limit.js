import React from 'react';
import Head from 'next/head';
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
      <Head>
        <title>Weather App | LIMIT</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <article className="w-100">
        <h1 className="main-headline">Limit erreicht</h1>
        <p>
          Diese App Demo enhält ein Requests Limit von max. 10 Anfragen pro Tag
          pro Benutzer.
        </p>
      </article>
    </React.Fragment>
  );
}
