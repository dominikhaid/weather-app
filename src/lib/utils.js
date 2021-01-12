import weatherIcons from '@/public/fonts/weather/icon';
import React from 'react';

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
    <li style={{flex: '1 1 50%'}}>
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
        <label style={{left: '25px', width: '86%'}} className="hidden">
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
