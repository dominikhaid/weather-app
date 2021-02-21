import weatherIcons from 'public/fonts/weather/icon';
import React from 'react';

/**
 *@desc NOTE CONTROL THE WEATHER SWITCHER
 */
export function weatherSwitcherControls() {
  const weather_switcher = document.getElementById('app-view-day-selector');
  const weather_container = document.getElementById('app-weather-view');
  if (
    !weather_switcher ||
    !weather_container ||
    (weather_switcher && window.innerWidth > 767)
  )
    return <></>;

  weather_switcher.classList.add('hidden');
  setTimeout(() => {
    if (weather_switcher && window.innerWidth < 767) {
      weather_switcher.style.top = `calc(${window.scrollY}px + ${
        window.innerHeight
      }px - ${
        weather_switcher.offsetHeight > 0 ? weather_switcher.offsetHeight : 60
      }px + 5px)`;
      weather_switcher.classList.remove('hidden');
    }
  }, 100);
}

/**
 *@desc NOTE CONVERT ACCU WEATHER ICON TO FONT
 *@parma {String} AccuWeather Icon
 */
export function findIcon(a) {
  let res;
  if (Array.isArray(weatherIcons) && a) {
    weatherIcons.forEach(element => {
      if (Number(element.nr) === a) {
        res = element.class;
      }
    });
  }
  return res;
}

/**
 *@desc NOTE CONVERT ACCU WEATHER DATE
 *@param {String} date String
 *@param {String} format String (GMT,TIME)
 */
export function parseDate({date = false, format = false}) {
  date = new Date(date);

  if (format === 'GMT') {
    date = date.toGMTString(date).replace(/(\d\d:\d\d:\d\d.*)/, '');
  }
  if (format === 'TIME') {
    date = date.toTimeString(date).match(/(\d\d:\d\d)|(GMT.*)/);
    date = date[0];
  }
  return date;
}

/**
 *@desc NOTE CREATE LISTITEM ICON RIGHT
 *@param {Array} item Text
 *@param {Object} icon - Display Icon
 *@param {String} label Text
 */
export function listItem({item = false, icon = false, label = false}) {
  return (
    <li
      key={
        Array.isArray(item)
          ? item.join(' ') + label
          : item
          ? item + label
          : '' + label
      }
    >
      <i
        style={{
          height: '40px',
          width: '40px',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
        className={'text-xl mr-lg ' + icon}
      />
      {item && Array.isArray(item) ? item.join(' ') : item ? item : ''}
      {label ? (
        <label
          style={{left: '25px', width: '86%', height: '40px'}}
          className="hidden"
        >
          {label}
        </label>
      ) : (
        ''
      )}
    </li>
  );
}

/**
 *@desc NOTE CREATE LISTITEM ICON RIGHT
 *@param {Array} item Text
 *@param {Object} icon - Display Icon
 *@param {String} label Text
 */
export function listItemInvert({item = false, icon = false, label = false}) {
  return (
    <li>
      {item && Array.isArray(item) ? [...item] : item ? item : ''}
      {icon ? (
        <i
          style={{
            height: '40px',
            width: '40px',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          className={'mr-lg ' + icon}
        />
      ) : (
        ''
      )}
      {label ? <label className="hidden">{label}</label> : ''}
    </li>
  );
}
