## Weather-App

```
Description: Simple Weather Demo App build with Next.js and AccuWeather Api.
Use yarn install for setup and yarn run next-dev for start local dev server.
At default it configured to live run at http://localhost/app/weather-app.
You can change that at the next.config.js. to change the port use .env files default is 80.
Live demo can be seen here: https://www.dominikhaid.de/app/weather-app.
Api is turend of bye default the App uses Sample Data from the data folder.
To turn the Api on turn debug to false in .env files.
```

<br/>
<br/>

---

## Api

```
get a free account @ https://developer.accuweather.com/
free licence (limit 50 querys per day)

used querys:{
"current":false,
"tomorrow":false,
"fivedays":false,
"hours":false
}
```

<br/>
<br/>

## Setup

1. yarn install
2. yarn run next-dev

## Scripts

1.  yarn runn next-static -> static build / deploy
2.  yarn run next-dev -> dev server
3.  yarn run format -> format .js files
