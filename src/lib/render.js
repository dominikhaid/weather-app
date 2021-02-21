import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {findIcon, parseDate, listItem} from './utils';
import uuid from 'react-uuid';
import PrevDate from 'public/images/svg/chevron-up.svg';
import NextDate from 'public/images/svg/chevron-down.svg';
import {weatherSwitcherControls} from 'src/lib/utils';

//TODO MAKE THIS TOGGLE F/C
const metric = true;

/**
 *@desc NOTE RENDER THE HEADLINE
 */
const DateWeatherBox = ({city, date}) => {
  DateWeatherBox.propTypes = {
    city: PropTypes.string,
    date: PropTypes.string,
  };
  const dateOptions = {
    weekday: 'long',
    year: '2-digit',
    month: '2-digit',
    day: 'numeric',
  };

  if (!city)
    return (
      <h1 className="main-headline">
        &nbsp;
        <br />
        &nbsp;
      </h1>
    );
  return (
    <h1 className="main-headline">
      {city + ' '}
      <br />
      {date
        ? new Date(date).toLocaleDateString('de-DE', dateOptions)
        : new Date().toLocaleDateString('de-DE', dateOptions)}
    </h1>
  );
};

/**
 *@desc NOTE RENDER THE ICON CIRCLE
 */
const MainWeatherBox = ({
  time,
  daytime,
  WeatherText,
  WeatherIcon,
  IsDayTime,
  Temperature,
  RealFeelTemperature,
  RealFeelTemperatureShade,
}) => {
  MainWeatherBox.propTypes = {
    time: PropTypes.string,
    date: PropTypes.string,
    daytime: PropTypes.object,
    WeatherText: PropTypes.string,
    WeatherIcon: PropTypes.number,
    IsDayTime: PropTypes.bool,
    Temperature: PropTypes.object,
    RealFeelTemperature: PropTypes.object,
    RealFeelTemperatureShade: PropTypes.object,
    city: PropTypes.string,
  };
  let iconClass;

  if (time && daytime) iconClass = findIcon(daytime.Icon);

  if (!time && WeatherIcon) {
    iconClass = findIcon(WeatherIcon);
    if (!IsDayTime) iconClass = iconClass.replace('day', 'night');
  }

  const unitIcon = metric ? (
    <i className="wi wi-celsius" />
  ) : (
    <i className="wi wi-fahrenheit" />
  );

  let temperature = '';
  if (Temperature && Temperature.Metric)
    temperature = metric
      ? Temperature.Metric.Value
      : Temperature.Imperial.Value;

  if (Temperature && Temperature.Minimum)
    temperature =
      time === 'night' ? Temperature.Minimum.Value : Temperature.Maximum.Value;

  let realFeel;
  if (RealFeelTemperature && RealFeelTemperature.Metric)
    realFeel = metric
      ? RealFeelTemperature.Metric.Value
      : RealFeelTemperature.Imperial.Value;

  let realShadow;
  if (RealFeelTemperatureShade && RealFeelTemperatureShade.Metric)
    realShadow = metric
      ? RealFeelTemperatureShade.Metric.Value
      : RealFeelTemperatureShade.Imperial.Value;

  return (
    <>
      <div className="weather-main-icon">
        <i className={'wi icon-big ' + iconClass} />
        <p className="temprature">
          <em className="text-xl font-semibold">
            {temperature ? temperature : ''} {unitIcon ? unitIcon : ''}
          </em>
        </p>
      </div>
      <div
        style={{width: 'calc(100% - var(--weather-paddig-x))'}}
        className="app-weather-phrase-long"
      >
        <p className="text-center w-100">
          {WeatherText ? WeatherText : daytime ? daytime.IconPhrase : ''}
          {realFeel
            ? [
                ` Temperatur gefühlt ${realFeel}`,
                unitIcon,
                ` im Schatten ${realShadow}`,
                unitIcon,
              ]
            : ''}
          {daytime ? ', ' + daytime.LongPhrase : ''}
        </p>
      </div>
    </>
  );
};

/**
 *@desc NOTE RENDER THE WEATHER DETAILS
 */
const DetailWeatherBox = ({
  Precip1hr,
  HoursOfSun,
  RelativeHumidity,
  WindGust,
  UVIndex,
  UVIndexText,
  Pressure,
  daytime,
  Sun,
  Moon,
}) => {
  DetailWeatherBox.propTypes = {
    Precip1hr: PropTypes.object,
    HoursOfSun: PropTypes.number,
    RelativeHumidity: PropTypes.number,
    WindGust: PropTypes.object,
    UVIndex: PropTypes.number,
    UVIndexText: PropTypes.string,
    Pressure: PropTypes.object,
    daytime: PropTypes.object,
    Sun: PropTypes.object,
    Moon: PropTypes.object,
  };

  let precip1hr = <></>;

  if (Precip1hr)
    precip1hr = listItem({
      item: metric
        ? Precip1hr.Metric.Value + Precip1hr.Metric.Unit
        : Precip1hr.Imperial.Value + Precip1hr.Imperial.Unit,
      icon: 'wi wi-raindrops',
      label: 'Niederschlag',
    });

  let relativeHumidity = <></>;
  if (RelativeHumidity)
    relativeHumidity = listItem({
      item: RelativeHumidity + '%',
      icon: 'wi wi-humidity',
      label: 'Luftfeuchte',
    });

  let windGust = <></>;
  if (WindGust)
    windGust = listItem({
      item: metric
        ? [WindGust.Speed.Metric.Value, WindGust.Speed.Metric.Unit]
        : [WindGust.Speed.Imperial.Value, WindGust.Speed.Imperial.Unit],

      icon: 'wi wi-strong-wind',
      label: 'Windböhen',
    });

  let uvIndex = <></>;
  if (UVIndex)
    uvIndex = listItem({
      item: [UVIndex, UVIndexText],
      icon: 'wi wi-hot',
      label: 'UV Index',
    });

  let pressure = <></>;
  if (Pressure)
    pressure = listItem({
      item: metric
        ? [Pressure.Metric.Value, Pressure.Metric.Unit]
        : [Pressure.Imperial.Value, Pressure.Imperial.Unit],

      icon: 'wi wi-barometer',
      label: 'Luftdruck',
    });

  const Daytime = ({daytime}) => {
    if (!daytime) return <></>;

    const RainProbability = () => {
      if (!daytime.RainProbability) return <></>;
      return (
        <>
          {listItem({
            item: daytime.RainProbability + '%',
            icon: 'wi wi-rain',
            label: 'Regenwahr.',
          })}
          {listItem({
            item: daytime.Rain.Value + daytime.Rain.Unit,
            icon: 'wi wi-raindrops',
            label: 'Niederschlag',
          })}
          {listItem({
            item: `${daytime.ThunderstormProbability}%`,
            icon: 'wi wi-thunderstorm',
            label: 'Gewitter',
          })}
        </>
      );
    };

    const SnowProbability = () => {
      if (!daytime.SnowProbability && !daytime.IceProbability) return <></>;
      return (
        <>
          {listItem({
            item: daytime.Snow.Value + daytime.Snow.Unit,
            icon: 'wi wi-snow',
            label: 'Schnee',
          })}
          {listItem({
            item: daytime.Ice.Value + daytime.Ice.Unit,
            icon: 'wi wi-sleet',
            label: 'Eis',
          })}
        </>
      );
    };

    const hoursOfSun = listItem({
      item: [HoursOfSun ? HoursOfSun + ' Std' : '-'],
      icon: 'wi wi-day-sunny',
      label: 'Sonnenstd.',
    });

    const hoursOfRain = listItem({
      item: [daytime.HoursOfRain ? daytime.HoursOfRain + ' Std' : '-'],
      icon: 'wi wi-day-rain',
      label: 'Regen',
    });

    const hoursOfSnow = listItem({
      item: [daytime.HoursOfSnow ? daytime.HoursOfSnow + ' Std' : '-'],
      icon: 'wi wi-day-snow',
      label: 'Schnee',
    });

    const hoursOfIce = listItem({
      item: [daytime.HoursOfIce ? daytime.HoursOfIce + ' Std' : '-'],
      icon: 'wi wi-sleet',
      label: 'Eisregen',
    });

    const cloudCover = listItem({
      item: daytime.CloudCover ? daytime.CloudCover + '%' : '-',
      icon: 'wi wi-cloudy',
      label: 'Wolkendichte',
    });

    const wind = listItem({
      item: metric
        ? [daytime.Wind.Speed.Value, daytime.Wind.Speed.Unit]
        : [daytime.Wind.Speed.Value],
      icon: !daytime.Wind.Direction.Localized
        ? 'wi wi-windy'
        : `wi wi-wind wi-from-${daytime.Wind.Direction.Localized.toLowerCase()}`,
      label: daytime.Wind.Direction.Localized
        ? daytime.Wind.Direction.Localized
        : 'Windgeschw.',
    });

    const windGust = listItem({
      item: metric
        ? [daytime.WindGust.Speed.Value, daytime.WindGust.Speed.Unit]
        : [
            daytime.WindGust.Speed.Imperial.Value,
            daytime.WindGust.Speed.Imperial.Unit,
          ],
      icon: 'wi wi-strong-wind',
      label: 'Windböhen',
    });

    const sunRise = listItem({
      item: parseDate({
        date: Sun.Rise,
        format: 'TIME',
      }),
      icon: 'wi wi-sunrise',
      label: 'Sonnenauf.',
    });
    const moonRise = listItem({
      item: parseDate({
        date: Moon.Rise,
        format: 'TIME',
      }),
      icon: 'wi wi-moonrise',
      label: 'Mondaufgang',
    });

    return (
      <>
        {HoursOfSun ? hoursOfSun : ''}
        {daytime.HoursOfRain ? hoursOfRain : ''}
        {daytime.HoursOfSnow ? hoursOfSnow : ''}
        {daytime.HoursOfIce ? hoursOfIce : ''}
        {daytime.CloudCover ? cloudCover : ''}
        {daytime.Wind ? wind : ''}
        {daytime.WindGust ? windGust : ''}
        <RainProbability />
        <SnowProbability />
        {Sun.Rise ? sunRise : ''}
        {Moon.Rise ? moonRise : ''}
      </>
    );
  };

  return (
    <ul className="m-auto w-100 p-lg flex flex-center flex-column flex-wrap relative weather-list">
      {precip1hr}
      {relativeHumidity}
      {windGust}
      {uvIndex}
      {pressure}
      <Daytime daytime={daytime} />
    </ul>
  );
};

/**
 *@desc NOTE RENDER DAY / NIGHT SWICHTER WEATHERVIEW
 */
const DayTimeSwitcher = ({
  dates,
  activeDate,
  setActiveDate,
  activeTime,
  setActiveTime,
}) => {
  DayTimeSwitcher.propTypes = {
    dates: PropTypes.array,
    activeDate: PropTypes.string,
    visible: PropTypes.bool,
    setShowDates: PropTypes.func,
    setActiveDate: PropTypes.func,
    activeTime: PropTypes.string,
    setActiveTime: PropTypes.func,
  };

  const dateFindOptions = {
    weekday: 'long',
    month: 'long',
  };

  if (!activeTime) return <></>;
  return (
    <div className="app-view-time-selector normal">
      {activeTime === 'day' ? (
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            let aktDateInd = dates.findIndex(e => e === activeDate);
            aktDateInd = dates[aktDateInd];

            const aktDateObj = document.getElementById(
              `day-${new Date(aktDateInd)
                .toLocaleDateString('de-DE', dateFindOptions)
                .replace(/\s/g, '-')
                .toLowerCase()}`,
            );

            if (!aktDateObj) return;
            aktDateObj.classList.add('hidden');
            aktDateObj.nextElementSibling.classList.remove('hidden');
            weatherSwitcherControls();
            setActiveDate(aktDateInd);
            setActiveTime(activeTime === 'day' ? 'night' : 'day');
          }}
        >
          <i className="wi wi-day-sunny"></i>
          {window.innerWidth > 767
            ? activeTime === 'day'
              ? 'Day'
              : 'Night'
            : ''}
        </a>
      ) : (
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            let aktDateInd = dates.findIndex(e => e === activeDate);
            aktDateInd = dates[aktDateInd];

            const aktDateObj = document.getElementById(
              `day-${new Date(aktDateInd)
                .toLocaleDateString('de-DE', dateFindOptions)
                .replace(/\s/g, '-')
                .toLowerCase()}`,
            );

            if (!aktDateObj) return;
            aktDateObj.nextElementSibling.classList.add('hidden');
            aktDateObj.classList.remove('hidden');

            weatherSwitcherControls();

            setActiveDate(aktDateInd);
            setActiveTime(activeTime === 'day' ? 'night' : 'day');
          }}
        >
          <i className="wi wi-night-clear"></i>
          {window.innerWidth > 767
            ? activeTime === 'day'
              ? 'Day'
              : 'Night'
            : ''}
        </a>
      )}
    </div>
  );
};

/**
 *@desc NOTE RenderPrevDay
 */
const RenderPrevDay = ({dates, activeDate, setActiveDate, setActiveTime}) => {
  RenderPrevDay.propTypes = {
    dates: PropTypes.array,
    activeDate: PropTypes.string,
    setActiveDate: PropTypes.func,
    setShowDates: PropTypes.func,
    setActiveTime: PropTypes.func,
  };

  const dateFindOptions = {
    weekday: 'long',
    month: 'long',
  };

  return (
    <a
      id="prev-day"
      href="/"
      onClick={e => {
        e.preventDefault();
        let prevDateInd = dates.findIndex(e => e === activeDate);
        let newDateInd = dates[prevDateInd - 1];
        prevDateInd = dates[prevDateInd];

        const newDateObj = document.getElementById(
          `day-${new Date(newDateInd)
            .toLocaleDateString('de-DE', dateFindOptions)
            .replace(/\s/g, '-')
            .toLowerCase()}`,
        );

        const prevDateObj = document.getElementById(
          `day-${new Date(prevDateInd)
            .toLocaleDateString('de-DE', dateFindOptions)
            .replace(/\s/g, '-')
            .toLowerCase()}`,
        );

        if (!newDateObj || !prevDateObj) return;
        newDateObj.classList.remove('hidden');
        prevDateObj.classList.add('hidden');
        prevDateObj.nextElementSibling.classList.add('hidden');

        weatherSwitcherControls();

        setActiveTime('day');
        setActiveDate(newDateInd);
      }}
      key="prevDate"
    >
      <PrevDate className="color-white" />
    </a>
  );
};

/**
 *@desc NOTE RenderPrevDay
 */
const RenderNextDay = ({dates, activeDate, setActiveDate, setActiveTime}) => {
  RenderNextDay.propTypes = {
    dates: PropTypes.array,
    activeDate: PropTypes.string,
    setActiveDate: PropTypes.func,
    setActiveTime: PropTypes.func,
  };

  const dateFindOptions = {
    weekday: 'long',
    month: 'long',
  };

  return (
    <a
      id="next-day"
      href="/"
      onClick={e => {
        e.preventDefault();
        let prevDateInd = dates.findIndex(e => e === activeDate);
        let newDateInd = dates[prevDateInd + 1];
        prevDateInd = dates[prevDateInd];

        const newDateObj = document.getElementById(
          `day-${new Date(newDateInd)
            .toLocaleDateString('de-DE', dateFindOptions)
            .replace(/\s/g, '-')
            .toLowerCase()}`,
        );

        const prevDateObj = document.getElementById(
          `day-${new Date(prevDateInd)
            .toLocaleDateString('de-DE', dateFindOptions)
            .replace(/\s/g, '-')
            .toLowerCase()}`,
        );

        if (!newDateObj || !prevDateObj) return;
        newDateObj.classList.remove('hidden');
        prevDateObj.classList.add('hidden');
        prevDateObj.nextElementSibling.classList.add('hidden');

        weatherSwitcherControls();

        setActiveTime('day');
        setActiveDate(newDateInd);
      }}
      key="nextDate"
    >
      <NextDate className="color-white" />
    </a>
  );
};

/**
 *@desc NOTE ShowAllDates
 */
const ShowAllDates = ({
  visible,
  setActiveDate,
  activeDate,
  setShowDates,
  dates,
  setActiveTime,
}) => {
  ShowAllDates.propTypes = {
    dates: PropTypes.array,
    activeDate: PropTypes.string,
    visible: PropTypes.bool,
    setShowDates: PropTypes.func,
    setActiveDate: PropTypes.func,
    setActiveTime: PropTypes.func,
  };

  const dateOptions = {
    month: '2-digit',
    day: 'numeric',
  };

  const dateFindOptions = {
    weekday: 'long',
    month: 'long',
  };

  const createDates = () => {
    return dates.map((date, index) => {
      return (
        <a
          id={`d-${index}`}
          href="/"
          onClick={e => {
            e.preventDefault();
            let prevDateInd = dates.findIndex(e => e === activeDate);
            prevDateInd = dates[prevDateInd];
            let newDateInd = dates.findIndex(
              a => a === dates[Number(e.target.id.replace('d-', ''))],
            );
            newDateInd = dates[newDateInd];

            const newDateObj = document.getElementById(
              `day-${new Date(newDateInd)
                .toLocaleDateString('de-DE', dateFindOptions)
                .replace(/\s/g, '-')
                .toLowerCase()}`,
            );

            const prevDateObj = document.getElementById(
              `day-${new Date(prevDateInd)
                .toLocaleDateString('de-DE', dateFindOptions)
                .replace(/\s/g, '-')
                .toLowerCase()}`,
            );

            if (!newDateObj || !prevDateObj) return <></>;
            newDateObj.classList.remove('hidden');
            prevDateObj.classList.add('hidden');
            prevDateObj.nextElementSibling.classList.add('hidden');

            weatherSwitcherControls();

            setShowDates(false);
            setActiveTime('day');
            setActiveDate(dates[Number(e.target.id.replace('d-', ''))]);
          }}
          key={uuid()}
          className="circle"
        >
          {new Date(date).toLocaleDateString('de-DE', dateOptions)}
        </a>
      );
    });
  };

  if (window.innerWidth < 768) return <></>;

  if (!visible || !dates)
    return (
      <>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            setShowDates(true);
          }}
          key="curDate"
          className="circle"
        >
          {new Date(activeDate).toLocaleDateString('de-DE', dateOptions)}
        </a>
      </>
    );

  return (
    <>
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          setShowDates(true);
        }}
        key="curDate"
        className="circle"
      >
        {new Date(activeDate).toLocaleDateString('de-DE', dateOptions)}
      </a>
      {createDates()}
    </>
  );
};

/**
 *@desc NOTE RENDER DAY SWITCHER FOR 5 DAY VIEW
 */
const DateSwitcherNormal = ({dates}) => {
  DateSwitcherNormal.propTypes = {
    dates: PropTypes.array,
  };

  const [activeDate, setActiveDate] = useState(dates[0]);
  const [showDates, setShowDates] = useState(false);
  const daytimes = ['day', 'night'];
  const [activeTime, setActiveTime] = useState(daytimes[0]);

  if (!dates) return <></>;
  return dates.length > 1 ? (
    <>
      <div className="app-weather-dates font-semibold">
        <DayTimeSwitcher
          dates={dates}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          activeTime={activeTime}
          setActiveTime={setActiveTime}
        />
        <RenderPrevDay
          dates={dates}
          setActiveTime={setActiveTime}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
        />
        <ShowAllDates
          setActiveDate={setActiveDate}
          activeDate={activeDate}
          setShowDates={setShowDates}
          dates={dates}
          visible={showDates}
          setActiveTime={setActiveTime}
        />
        <RenderNextDay
          dates={dates}
          setActiveTime={setActiveTime}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          setShowDates={setShowDates}
        />
      </div>
    </>
  ) : (
    <DayTimeSwitcher
      dates={dates}
      activeDate={activeDate}
      setActiveDate={setActiveDate}
      activeTime={activeTime}
      setActiveTime={setActiveTime}
    />
  );
};

/**
 *@desc NOTE RENDER DAY AND TIME SWITCHER
 */
const WeatherViewNavigation = ({dates}) => {
  WeatherViewNavigation.propTypes = {
    dates: PropTypes.array,
  };

  if (!dates) return <></>;
  return (
    <section key={uuid()} id="app-view-day-selector" className="normal">
      <DateSwitcherNormal dates={dates} />
    </section>
  );
};

/**
 *@desc NOTE RENDER WEATHER DAY BOX
 *@parma (accuWeather obj)
 */
function createDay({
  index = false,
  obj = false,
  city = false,
  daytime = false,
  time = 'day',
}) {
  if (!obj || !daytime) return;
  const dateOptions = {
    weekday: 'long',
    month: 'long',
  };

  return (
    <section
      key={uuid()}
      id={`${time}-${new Date(obj.Date)
        .toLocaleDateString('de-DE', dateOptions)
        .replace(/\s/g, '-')
        .toLowerCase()}`}
      className={`general ${
        (index && index > 0) || time !== 'day' ? 'hidden' : ''
      }`}
    >
      <DateWeatherBox city={city} date={obj.Date} />
      <MainWeatherBox {...obj} time={time} daytime={daytime} city={city} />
      <DetailWeatherBox {...obj} daytime={daytime} />
    </section>
  );
}

/**
 *@desc NOTE RENDER METHOD TOMORROW WEATHER VIEW
 *@parma (accuWeather obj)
 */
export const weatherTomorrow = queryResTomorrow => {
  if (!queryResTomorrow.tomorrow.DailyForecasts) return <></>;
  return (
    <article className="w-100 tomorrow" id="app-weather-view">
      {createDay({
        obj: queryResTomorrow.tomorrow.DailyForecasts[0],
        daytime: queryResTomorrow.tomorrow.DailyForecasts[0].Day,
        time: 'day',
        city: queryResTomorrow.city,
      })}
      {createDay({
        obj: queryResTomorrow.tomorrow.DailyForecasts[0],
        daytime: queryResTomorrow.tomorrow.DailyForecasts[0].Night,
        time: 'night',
        city: queryResTomorrow.city,
      })}
      <WeatherViewNavigation
        dates={[queryResTomorrow.tomorrow.DailyForecasts[0].Date]}
      />
    </article>
  );
};

/**
 *@desc NOTE RENDER METHOD FIVEDAY WEATHER VIEW
 *@parma (accuWeather obj)
 **/
export const weatherFiveDay = queryResFiveDay => {
  let days = [];
  let dates = [];
  if (!queryResFiveDay.fiveday.DailyForecasts) return <></>;
  queryResFiveDay.fiveday.DailyForecasts.map((element, index) => {
    days.push(
      createDay({
        index: index,
        obj: element,
        daytime: element.Day,
        time: 'day',
        city: queryResFiveDay.city,
      }),
    );
    days.push(
      createDay({
        index: index,
        obj: element,
        daytime: element.Night,
        time: 'night',
        city: queryResFiveDay.city,
      }),
    );
    dates.push(element.Date);
  });

  return (
    <article className="w-100 five-day" id="app-weather-view">
      {[...days]}
      <WeatherViewNavigation dates={dates} />
    </article>
  );
};

/**
 * NOTE RENDER METHOD CURRENT WEATHER VIEW
 *@parma (accuWeather obj)
 **/
export const weatherCurrent = queryResCurrent => {
  if (!queryResCurrent.current.LocalObservationDateTime) return <></>;
  return (
    <article className="w-100 current" id="app-weather-view">
      <section key={uuid()} className="general">
        <DateWeatherBox
          city={queryResCurrent.city}
          date={queryResCurrent.current.LocalObservationDateTime}
        />
        <MainWeatherBox {...queryResCurrent.current} />
        <DetailWeatherBox {...queryResCurrent.current} />
      </section>
    </article>
  );
};
