import React, {useState} from 'react';
import CitySearch from '../components/CitySearch';

export default function SearchView(appState) {
  const [searchRadio, setSearchRadio] = useState('current');
  return (
    <React.Fragment>
      <section className="p-4xl  pt-6xl pb-none w-100">
        <form>
          <h1 className="main-headline">Get Your Weather Info</h1>
          <h2>Search</h2>
          <CitySearch searchRadio={searchRadio} appState={appState} />
          <fieldset style={{maxWidth: '380px'}}>
            <label for="jetzt">Jetzt</label>
            <input
              type="radio"
              id="jetzt"
              name="radioGroup"
              value="current"
              checked={searchRadio === 'current'}
              onChange={e => {
                e.target.checked = true;
                setSearchRadio('current');
              }}
            />
            <label for="heute">Heute</label>
            <input
              type="radio"
              id="heute"
              checked={searchRadio === 'tomorrow'}
              value="tomorrow"
              onChange={e => {
                e.target.checked = true;
                setSearchRadio('tomorrow');
              }}
            />
            <label for="fiveday">Fünf Tage</label>
            <input
              type="radio"
              id="fiveday"
              checked={searchRadio === 'fiveday'}
              value="fiveday"
              onChange={e => {
                e.target.checked = true;
                setSearchRadio('fiveday');
              }}
            />
          </fieldset>
        </form>
      </section>
    </React.Fragment>
  );
}
