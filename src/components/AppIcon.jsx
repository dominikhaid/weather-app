import React from 'react';
import PropTypes from 'prop-types';
import Cloud from 'public/images/svg/cloud.svg';
import Settings from 'public/images/svg/cog.svg';
import Search from 'public/images/svg/location-marker.svg';
import Info from 'public/images/svg/information-circle.svg';
import Map from 'public/images/svg/map.svg';
import Home from 'public/images/svg/home.svg';
import Heart from 'public/images/svg/heart.svg';

function WeatherIcon({icon}) {
  WeatherIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/weather' &&
    icon !== null &&
    icon !== 'weather'
  )
    return <></>;

  return (
    <>
      <Cloud
        className="animate-bounce"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
        }}
      />
      <Cloud
        className="animate-wiggle"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-105px',
          left: '-100px',
          width: '400px',
        }}
      />
      <Cloud
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-110px',
          left: '-100px',
          width: '300px',
        }}
      />
    </>
  );
}

function LimitIcon({icon}) {
  LimitIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/limit' &&
    icon !== null &&
    icon !== 'limit'
  )
    return <></>;

  return (
    <>
      <Info
        style={{
          fill: 'white',
          fillOpacity: '0.03',
          position: 'absolute',
          bottom: '-80px',
          left: '-75px',
          width: '350px',
        }}
      />
    </>
  );
}

function HomeIcon({icon}) {
  HomeIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/home' &&
    icon !== null &&
    icon !== 'home'
  )
    return <></>;

  return (
    <>
      <Home
        style={{
          fill: 'white',
          fillOpacity: '0.03',
          position: 'absolute',
          bottom: '-80px',
          left: '-75px',
          width: '350px',
        }}
      />
      <Cloud
        className="animate-bounce"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '105px',
          left: '100px',
          width: '200px',
        }}
      />
    </>
  );
}

function SettingsIcon({icon}) {
  SettingsIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/settings' &&
    icon !== null &&
    icon !== 'settings'
  )
    return <></>;

  return (
    <>
      <Settings
        className="animate-rotateSlow"
        style={{
          fill: 'white',
          fillOpacity: '0.03',
          position: 'absolute',
          bottom: '-80px',
          left: '-75px',
          width: '350px',
        }}
      />
      <Settings
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-60px',
          left: '34px',
          width: '200px',
        }}
      />
    </>
  );
}

function SearchIcon({icon}) {
  SearchIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/search' &&
    icon !== null &&
    icon !== 'search'
  )
    return <></>;

  return (
    <>
      <Map
        style={{
          fill: 'white',
          fillOpacity: '0.03',
          position: 'absolute',
          bottom: '-80px',
          left: '-50px',
          width: '350px',
        }}
      />
      <Search
        className="animate-bounce"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '80px',
          left: '15px',
          width: '150px',
        }}
      />
    </>
  );
}

function CreditsIcon({icon}) {
  CreditsIcon.propTypes = {
    icon: PropTypes.string,
  };

  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/credits' &&
    icon !== null &&
    icon !== 'credits'
  )
    return <></>;

  return (
    <>
      <Heart
        className="animate-bounce"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-40px',
          left: '80px',
          width: '250px',
        }}
      />
      <Heart
        style={{
          fill: 'white',
          fillOpacity: '0.1',
          position: 'absolute',
          bottom: '-80px',
          left: '-75px',
          width: '350px',
        }}
      />
    </>
  );
}

function AppIcon({icon, children}) {
  AppIcon.propTypes = {
    children: PropTypes.array,
    icon: PropTypes.string,
  };

  return (
    <div id="app-main-container" className="transform -skew-y-1 pt-lg">
      <aside className="app-icons absolute left-none overflow-hidden w-100 h-75">
        <SettingsIcon icon={icon} />
        <HomeIcon icon={icon} />
        <SearchIcon icon={icon} />
        <LimitIcon icon={icon} />
        <WeatherIcon icon={icon} />
        <CreditsIcon icon={icon} />
      </aside>
      <div id="app-container">{children}</div>
    </div>
  );
}

export default AppIcon;
