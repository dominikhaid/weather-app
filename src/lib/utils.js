import weatherIcons from '../../public/fonts/weather/icon';

/**
 *CONVERT ACCU WEATHER ICON TO FONT
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
 *CONVERT ACCU WEATHER DATE
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
 *CREATE LISTITEM ICON RIGHT
 */
export function listItem({item = false, icon = false, label = false}) {
  return (
    <li>
      {icon ? <i className={icon} /> : ''}
      {item && Array.isArray(item) ? [...item] : item ? item : ''}
      {label ? <label>{label}</label> : ''}
    </li>
  );
}

/**
 *CREATE LISTITEM ICON LEFT
 */
export function listItemInvert({item = false, icon = false, label = false}) {
  return (
    <li>
      {item && Array.isArray(item) ? [...item] : item ? item : ''}
      {icon ? <i className={icon} /> : ''}
      {label ? <label>{label}</label> : ''}
    </li>
  );
}
