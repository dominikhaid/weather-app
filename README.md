## Weather-App
---
Weather App demo build with Next.js 10 Tailwind.css and the AccuWeather Api. We also included Storybook and some other cool stuff. Live Demo [here](https://www.dominikhaid.de/app/weather-app/?target=_blank). We build this demo using our [base server module](https://github.com/dominikhaid/node-base-server) the [next module](https://github.com/dominikhaid/node-module-next) the [tailwind module](https://github.com/dominikhaid/node-module-tailwind-css) and the [storybook module](https://github.com/dominikhaid/node-modules-storybook).

---
<br/>
<br/>


## Api
---
Right now we use the AccuWeather API on a Free Account.
get a free account @ https://developer.accuweather.com/
free licence (limit 50 querys per day)

---

<br/>
<br/>

## Setup
---
1. yarn/npm install
2. yarn/npm run dev
---
<br/>
<br/>

## Scripts
---
1.  npm run start //start next.js server in production mode
2.  npm run dev //start next.js server in dev mode 
3.  npm run debug //start next.js server in dev mode with debugging enabled @ 9929
4.  npm build //build a static version of the app
5.  format format js, jsx, css files project wide with prettier
6.  npm run storybook //start storybook component library server 
7.  npm run screenshot //screen shot the app with storybook (Stroybook server must be online)
8.  npm run build-storybook //build a static version of the stroybook component library
---
<br/>
<br/>

## Files 
---
```
.
├── babel.config.json
├── config
│   └── server-conf.js //config for next.js && express 
├── .env.development //.env file for dev server
├── .env.production //.env file for prodution server
├── .eslintignore 
├── .eslintrc
├── .gitignore
├── jsconfig.json //path maps for next.js
├── LICENCE.md
├── log
│   └── access.log //server access.log for 404, 505 ect.
├── next.config.js //next.js configuration
├── package.json
├── package-lock.json
├── postcss.config.js
├── .prettierignore
├── .prettierrc
├── .prettierrc.json
├── README.md
├── __screenshots__ //screenshots (npm run screenshot)
├── server.js
├── src
│   ├── bin //server modules
│   │   ├── cors.js
│   │   ├── env.js
│   │   ├── express.js
│   │   ├── helmet.js
│   │   ├── main.js
│   │   ├── morgan.js
│   │   ├── next.js
│   │   └── plugin.js
│   ├── components //app componentes
│   │   ├── AppIcon.jsx
│   │   ├── AppOverlay.jsx
│   │   ├── Background.jsx
│   │   ├── Citylist.jsx
│   │   ├── CitySearch.jsx
│   │   ├── ConfirmButtons.jsx
│   │   ├── DynamicIcon.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuAppOverlay.jsx
│   │   ├── Nav.jsx
│   │   ├── RadioGrp.jsx
│   │   ├── RequestCount.jsx
│   │   ├── ResultBox.jsx
│   │   ├── SearchField.jsx
│   │   ├── SelectionList.jsx
│   │   ├── serviceWorker.js
│   │   └── Viewlist.jsx
│   ├── context //app context for react
│   │   └── AppState.js
│   ├── data //api mockup data (used in debug mode) 
│   │   ├── city.js
│   │   ├── current.js
│   │   ├── fiveday.js
│   │   └── tomorrow.js
│   ├── lib //global methods for rendering the weather data
│   │   ├── render.js
│   │   ├── requests.js
│   │   └── utils.js
│   ├── pages //app pages
│   │   ├── _app.js
│   │   ├── credits.js
│   │   ├── _document.js
│   │   ├── home.js
│   │   ├── index.js
│   │   ├── limit.js
│   │   ├── search.js
│   │   ├── settings.js
│   │   ├── tailwind.js
│   │   └── weather
│   │       └── index.js
│   └── stories //storybook files
│       ├── AppIcon.stories.js
│       ├── AppOverlay.stories.js
│       ├── Background.stories.js
│       ├── cerdits.stories.js
│       ├── Citylist.stories.js
│       ├── CitySearch.stories.js
│       ├── ConfirmButtons.stories.js
│       ├── data-mockup.js
│       ├── DynamicIcon.stories.js
│       ├── Footer.stories.js
│       ├── home.stories.js
│       ├── limit.stories.js
│       ├── MenuAppOverlay.stories.js
│       ├── Nav.stories.js
│       ├── RadioGrp.stories.js
│       ├── RequestCount.stories.js
│       ├── ResultBox.stories.js
│       ├── SearchField.stories.js
│       ├── search.stories.js
│       ├── SelectionList.stories.js
│       ├── settings.stories.js
│       ├── tailwind.stories.js
│       ├── Viewlist.stories.js
│       └── waether.stories.js
├── .storybook //storybook config
├── tailwind //tailwind units
│   ├── colors.js
│   ├── core.js
│   ├── fontsize.js
│   ├── height.js
│   ├── screens.js
│   ├── shadow.js
│   ├── spacing.js
│   └── width.js
├── tailwind.config.js //tailwind config
├── .vscode //debugging and general vscode settings
│   ├── launch.json
│   └── settings.json


16 directories, 100 files

```

