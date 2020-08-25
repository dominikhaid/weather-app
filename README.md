## Weather-App

```
Description: Simple Weather Demo App build with Next.js and AccuWeather Api.
Use yarn install for setup and yarn run next-dev for start local dev server.
At default it configured to live run at http://localhost/app/weather-app.
You can change that at the next.config.js. to change the port use .env files default is 80.
Live demo can be seen here: https://www.dominikhaid/app/weather-app.
Api is turend of bye default the App uses Sample Data from the data folder.
To turn the Api on turn debug to false in .env files.
```

<br/>
<br/>

---

- [Weather-App](#weather-app)
- [Api](#api)
- [Context](#context)
- [Functions](#functions)
- [Pages](#pages)
  - [document](#document)
  - [App](#app)
    - [info](#info)
    - [search](#search)
    - [weather](#weather)
      - [city](#city)
- [Components](#components)
  - [RequestCount](#Requestcount)
  - [ErrorModal](#Errormodal)
  - [Footer](#footer)
  - [Nav](#Nav)

## Api

```
https://developer.accuweather.com/ free licence (limit 50 querys per day)
querys:{
"current":false,
"tomorrow":false,
"fivedays":false,
"hours":false
}

CornJob Top50 Citys: read and write top 50 citys (save requests to api for every visitor)
IpLock: write a list of blocked ips
CronJob: reset IpLock list every Day
```

<br/>
<br/>

---

## Context

```
appContext:
{
"mobileBreak" : 500,
"activePage" : "info",
"errorComp":{"state":false,"msg":false},
"search":false || string,
"requestTotal" : 0,
"ip":false || number,
setRequestCount() {
this.requestTotal += 1
requestTotal >= 5 && this.errorComp = {"state":true,"msg":"Maximum requests reached"}
}
}

weatherContext:
{
"top50":{"state":false, "data":false},
"citys": ["exampleCity": {"current":false, "tomorrow":false,"fivedays":false,"hours":false   }]
}
```

<br/>
<br/>

---

## Functions

```
setRequestCount() handel request Managment
setComponent('searchPage') set argument true
cityWeather() Render city Object to html
renderTop50() Render top50 weather Object to html
```

<br/>
<br/>

```
Component tree

<document>
    <head/>
    <header />
        <app>
            <nav props={appContext} />
            <Component props={[weatherContext, appContext]} />
        </app>
    <footer />
</document>

```

<br/>
<br/>

---

## Pages

- document
- app
- 404
- 505
- infoPage
- searchPage
- weatherPage

<br/>
<br/>

### document

```
Description: Inti Create the Context here
Render: head, header, footer , app (MainScript, NextScript)
```

<br/>
<br/>

### App

```
Description: Inti Create the Context here
Render: nav, component
```

<br/>
<br/>

#### info

```
Description: Display information about the app and usage
Render condition: infoBox === true
Functions: setComponent('searchPage')
Render: infotxt, button(ok)
```

<br/>
<br/>

#### search

```
Description: Display search field
Render condition: searchPage && appContext.requestTotal
Functions:validateSearch('value') ,queryApi('value','query')
Render: infotxt,input, button(search)
```

<br/>
<br/>

#### weather

```
Description: Display Search Results
Render condition: weatherPage === true
State: {"cityComp":false}
Render:
{weatherContext.citys.state  && cityComp(weatherContext.citys)}
{weatherContext.top50.state && top50(weatherContext.top50)}
{!weatherContext.citys.state && !weatherContext.top50.state && errorComp(msg:'Keine Wetter Daten')}
```

<br/>
<br/>

##### City

```
Description: Display Weather Data for Each city
Render condition: weatherContext.citys.length > 0
Render: cityWeather()

renderCitys() {
for each data.citys return
city markup
}

```

<br/>
<br/>

##### Top50

```
Description: Display Weather Data for top 50 Citys
Render condition: weatherContext.top50.data > 0
Render: renderTop50()

renderTop50() {
for each data.citys return
top50 markup
}
```

<br/>
<br/>

---

## Components

- ErrorModal
- Footer
- Nav
- RequestCount

<br/>
<br/>

#### RequestCount

```
Description: Display number of request left
Render condition: infoBox !== true
Functions: setRequestCount()
Render: infotxt[className=appContext.requestTotal >= 5 && alert ], button(ok)
```

<br/>
<br/>

#### ErrorModal

```
Description: Display information about the app and usage
Render condition: infoBox === true
Functions: setComponent('searchPage')
Render: infotxt, button(ok)
```

<br/>
<br/>

#### Footer

```
Description: Display Copyright link to main page and github
Render condition: infoBox === true
Functions: setComponent('searchPage')
Render: infotxt, button(ok)
```

<br/>
<br/>

#### Nav

```
Description: Display Buttons to switch Components
Functions: setComponent('searchPage')
Render: navSearch,navWeather,navInfo
```

<br/>
<br/>
