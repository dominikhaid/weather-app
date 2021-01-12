import React from 'react';
import PropTypes from 'prop-types';
import Cloud from '@/public/images/svg/cloud.svg';
import Settings from '@/public/images/svg/cog.svg';
import Search from '@/public/images/svg/location-marker.svg';
import Info from '@/public/images/svg/information-circle.svg';
import Map from '@/public/images/svg/map.svg';
import Home from '@/public/images/svg/home.svg';
import Heart from '@/public/images/svg/heart.svg';

function WeatherIcon() {
  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/weather'
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

function LimitIcon() {
  if (process.browser && window.location.pathname !== '/app/weather-app/limit')
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

function HomeIcon() {
  if (process.browser && window.location.pathname !== '/app/weather-app/home')
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

function SettingsIcon() {
  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/settings'
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

function SearchIcon() {
  if (process.browser && window.location.pathname !== '/app/weather-app/search')
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

function CreditsIcon() {
  if (
    process.browser &&
    window.location.pathname !== '/app/weather-app/credits'
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

function AppIcon({children}) {
  AppIcon.propTypes = {
    children: PropTypes.object,
  };

  return (
    <main id="main" className="transform skew-y-1 pt-lg">
      <div
        style={{bottom: '13px'}}
        className="absolute left-none overflow-hidden w-100 h-75"
      >
        <SettingsIcon />
        <HomeIcon />
        <SearchIcon />
        <LimitIcon />
        <WeatherIcon />
        <CreditsIcon />
      </div>
      <div className="transform -skew-y-1 w-100">{children}</div>
    </main>
  );
}

export default AppIcon;
