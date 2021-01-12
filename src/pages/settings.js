import React, {useState} from 'react';
import CitySearch from '@/components/CitySearch';

export default function Settings(appStates) {
  const [theme, setTheme] = useState();

  if (!process.browser) return <></>;

  return (
    <React.Fragment>
      <section className="p-4xl pb-none pt-6xl w-100">
        <article>
          <h1 className="main-headline">Settings</h1>
          <form>
            <h4>Hometown</h4>
            <CitySearch appStates={appStates} />
            <h4>Theme</h4>
            <fieldset style={{maxWidth: '200px', padding: '0'}}>
              <label htmlFor="light">Light</label>
              <input
                type="radio"
                id="light"
                name="radioGroup"
                value="light"
                checked={localStorage.theme === 'light'}
                onChange={e => {
                  localStorage.theme = 'light';
                  e.target.checked = true;
                  document.querySelector('html').classList.remove('dark');
                  document.querySelector('html').classList.add('light');
                  setTheme('light');
                }}
              />
              <label htmlFor="dark">Dark</label>
              <input
                type="radio"
                id="dark"
                name="radioGroup"
                value="dark"
                checked={localStorage.theme === 'dark'}
                onChange={e => {
                  localStorage.theme = 'dark';
                  e.target.checked = true;
                  document.querySelector('html').classList.add('dark');
                  document.querySelector('html').classList.remove('light');
                  setTheme('dark');
                }}
              />
            </fieldset>
          </form>
        </article>
      </section>
    </React.Fragment>
  );
}
