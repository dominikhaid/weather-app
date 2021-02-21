let appState = {
  debug: true,
  theme: 'light',
  activeCity: {city: 'Darmstadt', hometown: true, weatherView: 'current'},
  limit: 10,
  citys: {},
  switcher: {
    hometown: true,
    Version: 1,
    Key: '168715',
    Type: 'City',
    Rank: 43,
    waetherView: 'current',
    current: {
      LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
      EpochTime: 1610361360,
      WeatherText: 'Stark bewölkt',
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperature: {
        Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperatureShade: {
        Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
        Imperial: {Value: 27, Unit: 'F', UnitType: 18},
      },
      RelativeHumidity: 77,
      IndoorRelativeHumidity: 34,
      DewPoint: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      Wind: {
        Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
        Speed: {
          Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
        },
      },
      WindGust: {
        Speed: {
          Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
        },
      },
      UVIndex: 1,
      UVIndexText: 'Niedrig',
      Visibility: {
        Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
        Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
      },
      ObstructionsToVisibility: '',
      CloudCover: 76,
      Ceiling: {
        Metric: {Value: 9754, Unit: 'm', UnitType: 5},
        Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
      },
      Pressure: {
        Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
        Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
      },
      PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
      Past24HourTemperatureDeparture: {
        Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: -2, Unit: 'F', UnitType: 18},
      },
      ApparentTemperature: {
        Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      WindChillTemperature: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      WetBulbTemperature: {
        Metric: {Value: -2, Unit: 'C', UnitType: 17},
        Imperial: {Value: 28, Unit: 'F', UnitType: 18},
      },
      Precip1hr: {
        Metric: {Value: 0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0, Unit: 'in', UnitType: 1},
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PastHour: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past3Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past6Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past9Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past12Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past18Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past24Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
            Imperial: {Value: 37, Unit: 'F', UnitType: 18},
          },
        },
      },
      MobileLink:
        'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      Link:
        'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
    },
    fiveday: {
      Headline: {
        EffectiveDate: '2020-08-22T08:00:00+02:00',
        EffectiveEpochDate: 1598076000,
        Severity: 4,
        Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
        Category: 'cooler',
        EndDate: '2020-08-22T20:00:00+02:00',
        EndEpochDate: 1598119200,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-18T07:00:00+02:00',
          EpochDate: 1597726800,
          Sun: {
            Rise: '2020-08-18T06:21:00+02:00',
            EpochRise: 1597724460,
            Set: '2020-08-18T20:37:00+02:00',
            EpochSet: 1597775820,
          },
          Moon: {
            Rise: '2020-08-18T04:57:00+02:00',
            EpochRise: 1597719420,
            Set: '2020-08-18T20:48:00+02:00',
            EpochSet: 1597776480,
            Phase: 'WaningCrescent',
            Age: 29,
          },
          Temperature: {
            Minimum: {
              Value: 14.6,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 5.4,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 31,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 4,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 16,
            IconPhrase: 'Stark bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Vereinzelte Gewitter',
            LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
            PrecipitationProbability: 51,
            ThunderstormProbability: 60,
            RainProbability: 51,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 237,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 46.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 314,
                Localized: 'NW',
                English: 'NW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 71,
          },
          Night: {
            Icon: 41,
            IconPhrase: 'Teilweise bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Abends in Abständen Gewitter',
            LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 5.6,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 195,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 72,
                Localized: 'ONO',
                English: 'ENE',
              },
            },
            TotalLiquid: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 42,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
        {
          Date: '2020-08-19T07:00:00+02:00',
          EpochDate: 1597813200,
          Sun: {
            Rise: '2020-08-19T06:22:00+02:00',
            EpochRise: 1597810920,
            Set: '2020-08-19T20:35:00+02:00',
            EpochSet: 1597862100,
          },
          Moon: {
            Rise: '2020-08-19T06:17:00+02:00',
            EpochRise: 1597810620,
            Set: '2020-08-19T21:17:00+02:00',
            EpochSet: 1597864620,
            Phase: 'New',
            Age: 0,
          },
          Temperature: {
            Minimum: {
              Value: 17.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.9,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 6.2,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 4.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 30,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 4,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Ein wenig Sonne und angenehm',
            LongPhrase:
              'Ein wenig Sonnenschein für Wolken weichend und angenehm',
            PrecipitationProbability: 3,
            ThunderstormProbability: 0,
            RainProbability: 3,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 193,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 182,
                Localized: 'S',
                English: 'S',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 60,
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend bewölkt',
            LongPhrase: 'Überwiegend bewölkt',
            PrecipitationProbability: 23,
            ThunderstormProbability: 0,
            RainProbability: 23,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 7.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 155,
                Localized: 'SSO',
                English: 'SSE',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 141,
                Localized: 'SO',
                English: 'SE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 78,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
        },
        {
          Date: '2020-08-20T07:00:00+02:00',
          EpochDate: 1597899600,
          Sun: {
            Rise: '2020-08-20T06:24:00+02:00',
            EpochRise: 1597897440,
            Set: '2020-08-20T20:33:00+02:00',
            EpochSet: 1597948380,
          },
          Moon: {
            Rise: '2020-08-20T07:41:00+02:00',
            EpochRise: 1597902060,
            Set: '2020-08-20T21:42:00+02:00',
            EpochSet: 1597952520,
            Phase: 'WaxingCrescent',
            Age: 1,
          },
          Temperature: {
            Minimum: {
              Value: 20.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 31.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 11.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 8.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 28,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 2,
            IconPhrase: 'Überwiegend sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Viel Sonne und wärmer',
            LongPhrase: 'Größtenteils sonnig und wärmer',
            PrecipitationProbability: 9,
            ThunderstormProbability: 3,
            RainProbability: 9,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 183,
                Localized: 'S',
                English: 'S',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 200,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 20,
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Vielfach klar',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend klar und warm',
            LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
            PrecipitationProbability: 4,
            ThunderstormProbability: 1,
            RainProbability: 4,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 127,
                Localized: 'SO',
                English: 'SE',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 89,
                Localized: 'O',
                English: 'E',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 13,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
        },
        {
          Date: '2020-08-21T07:00:00+02:00',
          EpochDate: 1597986000,
          Sun: {
            Rise: '2020-08-21T06:25:00+02:00',
            EpochRise: 1597983900,
            Set: '2020-08-21T20:31:00+02:00',
            EpochSet: 1598034660,
          },
          Moon: {
            Rise: '2020-08-21T09:04:00+02:00',
            EpochRise: 1597993440,
            Set: '2020-08-21T22:04:00+02:00',
            EpochSet: 1598040240,
            Phase: 'WaxingCrescent',
            Age: 2,
          },
          Temperature: {
            Minimum: {
              Value: 19.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 33.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.3,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 9.0,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 23,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 5,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 3,
            IconPhrase: 'Teils sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Teilweise sonnig und heiß',
            LongPhrase: 'Teilweise sonnig und heiß',
            PrecipitationProbability: 6,
            ThunderstormProbability: 2,
            RainProbability: 6,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 192,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 35,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase:
              'Abends möglicher Schauer, sonst einige Wolken und warm',
            PrecipitationProbability: 42,
            ThunderstormProbability: 29,
            RainProbability: 42,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 271,
                Localized: 'W',
                English: 'W',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 356,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 49,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
        },
        {
          Date: '2020-08-22T07:00:00+02:00',
          EpochDate: 1598072400,
          Sun: {
            Rise: '2020-08-22T06:26:00+02:00',
            EpochRise: 1598070360,
            Set: '2020-08-22T20:29:00+02:00',
            EpochSet: 1598120940,
          },
          Moon: {
            Rise: '2020-08-22T10:27:00+02:00',
            EpochRise: 1598084820,
            Set: '2020-08-22T22:25:00+02:00',
            EpochSet: 1598127900,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 23.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 2.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 16,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 6,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Schauer oder Gewitter; kühler',
            LongPhrase: 'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 239,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 236,
                Localized: 'SW',
                English: 'SW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 93,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Einige Wolken',
            LongPhrase: 'Einige Wolken',
            PrecipitationProbability: 10,
            ThunderstormProbability: 0,
            RainProbability: 10,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 220,
                Localized: 'SW',
                English: 'SW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 43,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
        },
      ],
    },
    tomorrow: {
      Headline: {
        EffectiveDate: '2020-08-17T02:00:00+02:00',
        EffectiveEpochDate: 1597622400,
        Severity: 3,
        Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
        Category: 'thunderstorm',
        EndDate: '2020-08-17T14:00:00+02:00',
        EndEpochDate: 1597665600,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-17T07:00:00+02:00',
          EpochDate: 1597640400,
          Sun: {
            Rise: '2020-08-17T06:19:00+02:00',
            EpochRise: 1597637940,
            Set: '2020-08-17T20:39:00+02:00',
            EpochSet: 1597689540,
          },
          Moon: {
            Rise: '2020-08-17T03:43:00+02:00',
            EpochRise: 1597628580,
            Set: '2020-08-17T20:12:00+02:00',
            EpochSet: 1597687920,
            Phase: 'WaningCrescent',
            Age: 28,
          },
          Temperature: {
            Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
            Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperature: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperatureShade: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
          },
          HoursOfSun: 3.4,
          DegreeDaySummary: {
            Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
            Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 39,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 15,
            IconPhrase: 'Gewitter',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Am Morgen zeitweise Regen',
            LongPhrase:
              'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
            PrecipitationProbability: 65,
            ThunderstormProbability: 40,
            RainProbability: 65,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
            },
            WindGust: {
              Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
            },
            TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 2.5,
            HoursOfRain: 2.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 85,
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase: 'Stellenweise Wolken',
            PrecipitationProbability: 15,
            ThunderstormProbability: 4,
            RainProbability: 15,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
            },
            WindGust: {
              Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
            },
            TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 63,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
      ],
    },
    active: 'current',
  },
  setAppState: () => {},
  getHometown: () => {
    return {
      city: 'Darmstadt',
      hometown: true,
      Version: 1,
      Key: '168715',
      Type: 'City',
      weatherView: 'home',
      current: {
        LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
        EpochTime: 1610361360,
        WeatherText: 'Stark bewölkt',
        WeatherIcon: 6,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperature: {
          Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperatureShade: {
          Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
          Imperial: {Value: 27, Unit: 'F', UnitType: 18},
        },
        RelativeHumidity: 77,
        IndoorRelativeHumidity: 34,
        DewPoint: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        Wind: {
          Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
          Speed: {
            Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
          },
        },
        WindGust: {
          Speed: {
            Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
          },
        },
        UVIndex: 1,
        UVIndexText: 'Niedrig',
        Visibility: {
          Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
          Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
        },
        ObstructionsToVisibility: '',
        CloudCover: 76,
        Ceiling: {
          Metric: {Value: 9754, Unit: 'm', UnitType: 5},
          Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
        },
        Pressure: {
          Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
          Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
        },
        PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
        Past24HourTemperatureDeparture: {
          Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: -2, Unit: 'F', UnitType: 18},
        },
        ApparentTemperature: {
          Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        WindChillTemperature: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        WetBulbTemperature: {
          Metric: {Value: -2, Unit: 'C', UnitType: 17},
          Imperial: {Value: 28, Unit: 'F', UnitType: 18},
        },
        Precip1hr: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          PastHour: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past3Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past6Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past9Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past12Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past18Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past24Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
              Imperial: {Value: 37, Unit: 'F', UnitType: 18},
            },
          },
        },
        MobileLink:
          'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
        Link:
          'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      },
      fiveday: {
        Headline: {
          EffectiveDate: '2020-08-22T08:00:00+02:00',
          EffectiveEpochDate: 1598076000,
          Severity: 4,
          Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
          Category: 'cooler',
          EndDate: '2020-08-22T20:00:00+02:00',
          EndEpochDate: 1598119200,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-18T07:00:00+02:00',
            EpochDate: 1597726800,
            Sun: {
              Rise: '2020-08-18T06:21:00+02:00',
              EpochRise: 1597724460,
              Set: '2020-08-18T20:37:00+02:00',
              EpochSet: 1597775820,
            },
            Moon: {
              Rise: '2020-08-18T04:57:00+02:00',
              EpochRise: 1597719420,
              Set: '2020-08-18T20:48:00+02:00',
              EpochSet: 1597776480,
              Phase: 'WaningCrescent',
              Age: 29,
            },
            Temperature: {
              Minimum: {
                Value: 14.6,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 5.4,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 31,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 4,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 16,
              IconPhrase: 'Stark bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Vereinzelte Gewitter',
              LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
              PrecipitationProbability: 51,
              ThunderstormProbability: 60,
              RainProbability: 51,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 14.8,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 237,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 46.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 314,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 71,
            },
            Night: {
              Icon: 41,
              IconPhrase: 'Teilweise bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Abends in Abständen Gewitter',
              LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.6,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 195,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 72,
                  Localized: 'ONO',
                  English: 'ENE',
                },
              },
              TotalLiquid: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 42,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
          {
            Date: '2020-08-19T07:00:00+02:00',
            EpochDate: 1597813200,
            Sun: {
              Rise: '2020-08-19T06:22:00+02:00',
              EpochRise: 1597810920,
              Set: '2020-08-19T20:35:00+02:00',
              EpochSet: 1597862100,
            },
            Moon: {
              Rise: '2020-08-19T06:17:00+02:00',
              EpochRise: 1597810620,
              Set: '2020-08-19T21:17:00+02:00',
              EpochSet: 1597864620,
              Phase: 'New',
              Age: 0,
            },
            Temperature: {
              Minimum: {
                Value: 17.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 27.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.9,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 6.2,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 30,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 4,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Ein wenig Sonne und angenehm',
              LongPhrase:
                'Ein wenig Sonnenschein für Wolken weichend und angenehm',
              PrecipitationProbability: 3,
              ThunderstormProbability: 0,
              RainProbability: 3,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 193,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 182,
                  Localized: 'S',
                  English: 'S',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 60,
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend bewölkt',
              LongPhrase: 'Überwiegend bewölkt',
              PrecipitationProbability: 23,
              ThunderstormProbability: 0,
              RainProbability: 23,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 7.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 155,
                  Localized: 'SSO',
                  English: 'SSE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 141,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 78,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          },
          {
            Date: '2020-08-20T07:00:00+02:00',
            EpochDate: 1597899600,
            Sun: {
              Rise: '2020-08-20T06:24:00+02:00',
              EpochRise: 1597897440,
              Set: '2020-08-20T20:33:00+02:00',
              EpochSet: 1597948380,
            },
            Moon: {
              Rise: '2020-08-20T07:41:00+02:00',
              EpochRise: 1597902060,
              Set: '2020-08-20T21:42:00+02:00',
              EpochSet: 1597952520,
              Phase: 'WaxingCrescent',
              Age: 1,
            },
            Temperature: {
              Minimum: {
                Value: 20.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 31.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 30.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 11.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 8.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 28,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Überwiegend sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Viel Sonne und wärmer',
              LongPhrase: 'Größtenteils sonnig und wärmer',
              PrecipitationProbability: 9,
              ThunderstormProbability: 3,
              RainProbability: 9,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 183,
                  Localized: 'S',
                  English: 'S',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 200,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 20,
            },
            Night: {
              Icon: 34,
              IconPhrase: 'Vielfach klar',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend klar und warm',
              LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
              PrecipitationProbability: 4,
              ThunderstormProbability: 1,
              RainProbability: 4,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 127,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 89,
                  Localized: 'O',
                  English: 'E',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 13,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          },
          {
            Date: '2020-08-21T07:00:00+02:00',
            EpochDate: 1597986000,
            Sun: {
              Rise: '2020-08-21T06:25:00+02:00',
              EpochRise: 1597983900,
              Set: '2020-08-21T20:31:00+02:00',
              EpochSet: 1598034660,
            },
            Moon: {
              Rise: '2020-08-21T09:04:00+02:00',
              EpochRise: 1597993440,
              Set: '2020-08-21T22:04:00+02:00',
              EpochSet: 1598040240,
              Phase: 'WaxingCrescent',
              Age: 2,
            },
            Temperature: {
              Minimum: {
                Value: 19.5,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 33.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 34.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 9.0,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 9.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 23,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 5,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Teils sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Teilweise sonnig und heiß',
              LongPhrase: 'Teilweise sonnig und heiß',
              PrecipitationProbability: 6,
              ThunderstormProbability: 2,
              RainProbability: 6,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 192,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 35,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase:
                'Abends möglicher Schauer, sonst einige Wolken und warm',
              PrecipitationProbability: 42,
              ThunderstormProbability: 29,
              RainProbability: 42,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 271,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 356,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 49,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          },
          {
            Date: '2020-08-22T07:00:00+02:00',
            EpochDate: 1598072400,
            Sun: {
              Rise: '2020-08-22T06:26:00+02:00',
              EpochRise: 1598070360,
              Set: '2020-08-22T20:29:00+02:00',
              EpochSet: 1598120940,
            },
            Moon: {
              Rise: '2020-08-22T10:27:00+02:00',
              EpochRise: 1598084820,
              Set: '2020-08-22T22:25:00+02:00',
              EpochSet: 1598127900,
              Phase: 'WaxingCrescent',
              Age: 3,
            },
            Temperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 2.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 16,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 6,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Schauer oder Gewitter; kühler',
              LongPhrase:
                'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 239,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 20.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 236,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 93,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Einige Wolken',
              LongPhrase: 'Einige Wolken',
              PrecipitationProbability: 10,
              ThunderstormProbability: 0,
              RainProbability: 10,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 220,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 43,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          },
        ],
      },
      tomorrow: {
        Headline: {
          EffectiveDate: '2020-08-17T02:00:00+02:00',
          EffectiveEpochDate: 1597622400,
          Severity: 3,
          Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
          Category: 'thunderstorm',
          EndDate: '2020-08-17T14:00:00+02:00',
          EndEpochDate: 1597665600,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-17T07:00:00+02:00',
            EpochDate: 1597640400,
            Sun: {
              Rise: '2020-08-17T06:19:00+02:00',
              EpochRise: 1597637940,
              Set: '2020-08-17T20:39:00+02:00',
              EpochSet: 1597689540,
            },
            Moon: {
              Rise: '2020-08-17T03:43:00+02:00',
              EpochRise: 1597628580,
              Set: '2020-08-17T20:12:00+02:00',
              EpochSet: 1597687920,
              Phase: 'WaningCrescent',
              Age: 28,
            },
            Temperature: {
              Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
              Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperature: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperatureShade: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
            },
            HoursOfSun: 3.4,
            DegreeDaySummary: {
              Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
              Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 39,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 15,
              IconPhrase: 'Gewitter',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Am Morgen zeitweise Regen',
              LongPhrase:
                'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
              PrecipitationProbability: 65,
              ThunderstormProbability: 40,
              RainProbability: 65,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
              },
              WindGust: {
                Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
              },
              TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 2.5,
              HoursOfRain: 2.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 85,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase: 'Stellenweise Wolken',
              PrecipitationProbability: 15,
              ThunderstormProbability: 4,
              RainProbability: 15,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
              },
              WindGust: {
                Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
              },
              TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 63,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
        ],
      },
      Rank: 43,
      LocalizedName: 'Darmstadt',
      Country: {ID: 'DE', LocalizedName: 'Deutschland'},
      AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
    };
  },
  getActivecity: () => {
    return {
      hometown: true,
      Version: 1,
      Key: '168715',
      Type: 'City',
      Rank: 43,
      waetherView: 'current',
      current: {
        LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
        EpochTime: 1610361360,
        WeatherText: 'Stark bewölkt',
        WeatherIcon: 6,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperature: {
          Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperatureShade: {
          Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
          Imperial: {Value: 27, Unit: 'F', UnitType: 18},
        },
        RelativeHumidity: 77,
        IndoorRelativeHumidity: 34,
        DewPoint: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        Wind: {
          Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
          Speed: {
            Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
          },
        },
        WindGust: {
          Speed: {
            Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
          },
        },
        UVIndex: 1,
        UVIndexText: 'Niedrig',
        Visibility: {
          Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
          Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
        },
        ObstructionsToVisibility: '',
        CloudCover: 76,
        Ceiling: {
          Metric: {Value: 9754, Unit: 'm', UnitType: 5},
          Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
        },
        Pressure: {
          Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
          Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
        },
        PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
        Past24HourTemperatureDeparture: {
          Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: -2, Unit: 'F', UnitType: 18},
        },
        ApparentTemperature: {
          Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        WindChillTemperature: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        WetBulbTemperature: {
          Metric: {Value: -2, Unit: 'C', UnitType: 17},
          Imperial: {Value: 28, Unit: 'F', UnitType: 18},
        },
        Precip1hr: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          PastHour: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past3Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past6Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past9Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past12Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past18Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past24Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
              Imperial: {Value: 37, Unit: 'F', UnitType: 18},
            },
          },
        },
        MobileLink:
          'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
        Link:
          'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      },
      fiveday: {
        Headline: {
          EffectiveDate: '2020-08-22T08:00:00+02:00',
          EffectiveEpochDate: 1598076000,
          Severity: 4,
          Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
          Category: 'cooler',
          EndDate: '2020-08-22T20:00:00+02:00',
          EndEpochDate: 1598119200,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-18T07:00:00+02:00',
            EpochDate: 1597726800,
            Sun: {
              Rise: '2020-08-18T06:21:00+02:00',
              EpochRise: 1597724460,
              Set: '2020-08-18T20:37:00+02:00',
              EpochSet: 1597775820,
            },
            Moon: {
              Rise: '2020-08-18T04:57:00+02:00',
              EpochRise: 1597719420,
              Set: '2020-08-18T20:48:00+02:00',
              EpochSet: 1597776480,
              Phase: 'WaningCrescent',
              Age: 29,
            },
            Temperature: {
              Minimum: {
                Value: 14.6,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 5.4,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 31,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 4,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 16,
              IconPhrase: 'Stark bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Vereinzelte Gewitter',
              LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
              PrecipitationProbability: 51,
              ThunderstormProbability: 60,
              RainProbability: 51,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 14.8,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 237,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 46.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 314,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 71,
            },
            Night: {
              Icon: 41,
              IconPhrase: 'Teilweise bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Abends in Abständen Gewitter',
              LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.6,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 195,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 72,
                  Localized: 'ONO',
                  English: 'ENE',
                },
              },
              TotalLiquid: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 42,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
          {
            Date: '2020-08-19T07:00:00+02:00',
            EpochDate: 1597813200,
            Sun: {
              Rise: '2020-08-19T06:22:00+02:00',
              EpochRise: 1597810920,
              Set: '2020-08-19T20:35:00+02:00',
              EpochSet: 1597862100,
            },
            Moon: {
              Rise: '2020-08-19T06:17:00+02:00',
              EpochRise: 1597810620,
              Set: '2020-08-19T21:17:00+02:00',
              EpochSet: 1597864620,
              Phase: 'New',
              Age: 0,
            },
            Temperature: {
              Minimum: {
                Value: 17.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 27.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.9,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 6.2,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 30,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 4,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Ein wenig Sonne und angenehm',
              LongPhrase:
                'Ein wenig Sonnenschein für Wolken weichend und angenehm',
              PrecipitationProbability: 3,
              ThunderstormProbability: 0,
              RainProbability: 3,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 193,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 182,
                  Localized: 'S',
                  English: 'S',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 60,
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend bewölkt',
              LongPhrase: 'Überwiegend bewölkt',
              PrecipitationProbability: 23,
              ThunderstormProbability: 0,
              RainProbability: 23,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 7.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 155,
                  Localized: 'SSO',
                  English: 'SSE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 141,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 78,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          },
          {
            Date: '2020-08-20T07:00:00+02:00',
            EpochDate: 1597899600,
            Sun: {
              Rise: '2020-08-20T06:24:00+02:00',
              EpochRise: 1597897440,
              Set: '2020-08-20T20:33:00+02:00',
              EpochSet: 1597948380,
            },
            Moon: {
              Rise: '2020-08-20T07:41:00+02:00',
              EpochRise: 1597902060,
              Set: '2020-08-20T21:42:00+02:00',
              EpochSet: 1597952520,
              Phase: 'WaxingCrescent',
              Age: 1,
            },
            Temperature: {
              Minimum: {
                Value: 20.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 31.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 30.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 11.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 8.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 28,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Überwiegend sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Viel Sonne und wärmer',
              LongPhrase: 'Größtenteils sonnig und wärmer',
              PrecipitationProbability: 9,
              ThunderstormProbability: 3,
              RainProbability: 9,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 183,
                  Localized: 'S',
                  English: 'S',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 200,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 20,
            },
            Night: {
              Icon: 34,
              IconPhrase: 'Vielfach klar',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend klar und warm',
              LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
              PrecipitationProbability: 4,
              ThunderstormProbability: 1,
              RainProbability: 4,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 127,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 89,
                  Localized: 'O',
                  English: 'E',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 13,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          },
          {
            Date: '2020-08-21T07:00:00+02:00',
            EpochDate: 1597986000,
            Sun: {
              Rise: '2020-08-21T06:25:00+02:00',
              EpochRise: 1597983900,
              Set: '2020-08-21T20:31:00+02:00',
              EpochSet: 1598034660,
            },
            Moon: {
              Rise: '2020-08-21T09:04:00+02:00',
              EpochRise: 1597993440,
              Set: '2020-08-21T22:04:00+02:00',
              EpochSet: 1598040240,
              Phase: 'WaxingCrescent',
              Age: 2,
            },
            Temperature: {
              Minimum: {
                Value: 19.5,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 33.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 34.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 9.0,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 9.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 23,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 5,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Teils sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Teilweise sonnig und heiß',
              LongPhrase: 'Teilweise sonnig und heiß',
              PrecipitationProbability: 6,
              ThunderstormProbability: 2,
              RainProbability: 6,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 192,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 35,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase:
                'Abends möglicher Schauer, sonst einige Wolken und warm',
              PrecipitationProbability: 42,
              ThunderstormProbability: 29,
              RainProbability: 42,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 271,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 356,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 49,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          },
          {
            Date: '2020-08-22T07:00:00+02:00',
            EpochDate: 1598072400,
            Sun: {
              Rise: '2020-08-22T06:26:00+02:00',
              EpochRise: 1598070360,
              Set: '2020-08-22T20:29:00+02:00',
              EpochSet: 1598120940,
            },
            Moon: {
              Rise: '2020-08-22T10:27:00+02:00',
              EpochRise: 1598084820,
              Set: '2020-08-22T22:25:00+02:00',
              EpochSet: 1598127900,
              Phase: 'WaxingCrescent',
              Age: 3,
            },
            Temperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 2.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 16,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 6,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Schauer oder Gewitter; kühler',
              LongPhrase:
                'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 239,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 20.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 236,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 93,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Einige Wolken',
              LongPhrase: 'Einige Wolken',
              PrecipitationProbability: 10,
              ThunderstormProbability: 0,
              RainProbability: 10,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 220,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 43,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          },
        ],
      },
      tomorrow: {
        Headline: {
          EffectiveDate: '2020-08-17T02:00:00+02:00',
          EffectiveEpochDate: 1597622400,
          Severity: 3,
          Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
          Category: 'thunderstorm',
          EndDate: '2020-08-17T14:00:00+02:00',
          EndEpochDate: 1597665600,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-17T07:00:00+02:00',
            EpochDate: 1597640400,
            Sun: {
              Rise: '2020-08-17T06:19:00+02:00',
              EpochRise: 1597637940,
              Set: '2020-08-17T20:39:00+02:00',
              EpochSet: 1597689540,
            },
            Moon: {
              Rise: '2020-08-17T03:43:00+02:00',
              EpochRise: 1597628580,
              Set: '2020-08-17T20:12:00+02:00',
              EpochSet: 1597687920,
              Phase: 'WaningCrescent',
              Age: 28,
            },
            Temperature: {
              Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
              Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperature: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperatureShade: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
            },
            HoursOfSun: 3.4,
            DegreeDaySummary: {
              Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
              Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 39,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 15,
              IconPhrase: 'Gewitter',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Am Morgen zeitweise Regen',
              LongPhrase:
                'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
              PrecipitationProbability: 65,
              ThunderstormProbability: 40,
              RainProbability: 65,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
              },
              WindGust: {
                Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
              },
              TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 2.5,
              HoursOfRain: 2.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 85,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase: 'Stellenweise Wolken',
              PrecipitationProbability: 15,
              ThunderstormProbability: 4,
              RainProbability: 15,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
              },
              WindGust: {
                Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
              },
              TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 63,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
        ],
      },
      LocalizedName: 'Darmstadt',
      Country: {ID: 'DE', LocalizedName: 'Deutschland'},
      AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
    };
  },
  updateRequestState: () => {
    return 9;
  },
  getCityByName: () => {
    return {
      city: 'Darmstadt',
      hometown: true,
      Version: 1,
      Key: '168715',
      Type: 'City',
      weatherView: 'home',
      current: {
        LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
        EpochTime: 1610361360,
        WeatherText: 'Stark bewölkt',
        WeatherIcon: 6,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperature: {
          Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        RealFeelTemperatureShade: {
          Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
          Imperial: {Value: 27, Unit: 'F', UnitType: 18},
        },
        RelativeHumidity: 77,
        IndoorRelativeHumidity: 34,
        DewPoint: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        Wind: {
          Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
          Speed: {
            Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
          },
        },
        WindGust: {
          Speed: {
            Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
            Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
          },
        },
        UVIndex: 1,
        UVIndexText: 'Niedrig',
        Visibility: {
          Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
          Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
        },
        ObstructionsToVisibility: '',
        CloudCover: 76,
        Ceiling: {
          Metric: {Value: 9754, Unit: 'm', UnitType: 5},
          Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
        },
        Pressure: {
          Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
          Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
        },
        PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
        Past24HourTemperatureDeparture: {
          Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: -2, Unit: 'F', UnitType: 18},
        },
        ApparentTemperature: {
          Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
          Imperial: {Value: 30, Unit: 'F', UnitType: 18},
        },
        WindChillTemperature: {
          Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
          Imperial: {Value: 24, Unit: 'F', UnitType: 18},
        },
        WetBulbTemperature: {
          Metric: {Value: -2, Unit: 'C', UnitType: 17},
          Imperial: {Value: 28, Unit: 'F', UnitType: 18},
        },
        Precip1hr: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          PastHour: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past3Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past6Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past9Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past12Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past18Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
          Past24Hours: {
            Metric: {Value: 0, Unit: 'mm', UnitType: 3},
            Imperial: {Value: 0, Unit: 'in', UnitType: 1},
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
              Imperial: {Value: 32, Unit: 'F', UnitType: 18},
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
              Imperial: {Value: 19, Unit: 'F', UnitType: 18},
            },
            Maximum: {
              Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
              Imperial: {Value: 37, Unit: 'F', UnitType: 18},
            },
          },
        },
        MobileLink:
          'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
        Link:
          'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      },
      fiveday: {
        Headline: {
          EffectiveDate: '2020-08-22T08:00:00+02:00',
          EffectiveEpochDate: 1598076000,
          Severity: 4,
          Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
          Category: 'cooler',
          EndDate: '2020-08-22T20:00:00+02:00',
          EndEpochDate: 1598119200,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-18T07:00:00+02:00',
            EpochDate: 1597726800,
            Sun: {
              Rise: '2020-08-18T06:21:00+02:00',
              EpochRise: 1597724460,
              Set: '2020-08-18T20:37:00+02:00',
              EpochSet: 1597775820,
            },
            Moon: {
              Rise: '2020-08-18T04:57:00+02:00',
              EpochRise: 1597719420,
              Set: '2020-08-18T20:48:00+02:00',
              EpochSet: 1597776480,
              Phase: 'WaningCrescent',
              Age: 29,
            },
            Temperature: {
              Minimum: {
                Value: 14.6,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 5.4,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 31,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 4,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 16,
              IconPhrase: 'Stark bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Vereinzelte Gewitter',
              LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
              PrecipitationProbability: 51,
              ThunderstormProbability: 60,
              RainProbability: 51,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 14.8,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 237,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 46.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 314,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 71,
            },
            Night: {
              Icon: 41,
              IconPhrase: 'Teilweise bewölkt mit Gewittern',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Abends in Abständen Gewitter',
              LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.6,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 195,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 72,
                  Localized: 'ONO',
                  English: 'ENE',
                },
              },
              TotalLiquid: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 1.3,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 42,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
          {
            Date: '2020-08-19T07:00:00+02:00',
            EpochDate: 1597813200,
            Sun: {
              Rise: '2020-08-19T06:22:00+02:00',
              EpochRise: 1597810920,
              Set: '2020-08-19T20:35:00+02:00',
              EpochSet: 1597862100,
            },
            Moon: {
              Rise: '2020-08-19T06:17:00+02:00',
              EpochRise: 1597810620,
              Set: '2020-08-19T21:17:00+02:00',
              EpochSet: 1597864620,
              Phase: 'New',
              Age: 0,
            },
            Temperature: {
              Minimum: {
                Value: 17.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 26.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 27.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.8,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.9,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 6.2,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 30,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 4,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Ein wenig Sonne und angenehm',
              LongPhrase:
                'Ein wenig Sonnenschein für Wolken weichend und angenehm',
              PrecipitationProbability: 3,
              ThunderstormProbability: 0,
              RainProbability: 3,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 193,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 182,
                  Localized: 'S',
                  English: 'S',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 60,
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend bewölkt',
              LongPhrase: 'Überwiegend bewölkt',
              PrecipitationProbability: 23,
              ThunderstormProbability: 0,
              RainProbability: 23,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 7.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 155,
                  Localized: 'SSO',
                  English: 'SSE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 141,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 78,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          },
          {
            Date: '2020-08-20T07:00:00+02:00',
            EpochDate: 1597899600,
            Sun: {
              Rise: '2020-08-20T06:24:00+02:00',
              EpochRise: 1597897440,
              Set: '2020-08-20T20:33:00+02:00',
              EpochSet: 1597948380,
            },
            Moon: {
              Rise: '2020-08-20T07:41:00+02:00',
              EpochRise: 1597902060,
              Set: '2020-08-20T21:42:00+02:00',
              EpochSet: 1597952520,
              Phase: 'WaxingCrescent',
              Age: 1,
            },
            Temperature: {
              Minimum: {
                Value: 20.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 31.8,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 30.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 11.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 8.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 28,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 6,
                Category: 'Hoch',
                CategoryValue: 3,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Überwiegend sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Viel Sonne und wärmer',
              LongPhrase: 'Größtenteils sonnig und wärmer',
              PrecipitationProbability: 9,
              ThunderstormProbability: 3,
              RainProbability: 9,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 183,
                  Localized: 'S',
                  English: 'S',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 200,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 20,
            },
            Night: {
              Icon: 34,
              IconPhrase: 'Vielfach klar',
              HasPrecipitation: false,
              ShortPhrase: 'Überwiegend klar und warm',
              LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
              PrecipitationProbability: 4,
              ThunderstormProbability: 1,
              RainProbability: 4,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 127,
                  Localized: 'SO',
                  English: 'SE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 89,
                  Localized: 'O',
                  English: 'E',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 13,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          },
          {
            Date: '2020-08-21T07:00:00+02:00',
            EpochDate: 1597986000,
            Sun: {
              Rise: '2020-08-21T06:25:00+02:00',
              EpochRise: 1597983900,
              Set: '2020-08-21T20:31:00+02:00',
              EpochSet: 1598034660,
            },
            Moon: {
              Rise: '2020-08-21T09:04:00+02:00',
              EpochRise: 1597993440,
              Set: '2020-08-21T22:04:00+02:00',
              EpochSet: 1598040240,
              Phase: 'WaxingCrescent',
              Age: 2,
            },
            Temperature: {
              Minimum: {
                Value: 19.5,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 33.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 34.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 19.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 32.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 9.0,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 9.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 23,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 5,
                Category: 'Mittel',
                CategoryValue: 2,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Teils sonnig',
              HasPrecipitation: false,
              ShortPhrase: 'Teilweise sonnig und heiß',
              LongPhrase: 'Teilweise sonnig und heiß',
              PrecipitationProbability: 6,
              ThunderstormProbability: 2,
              RainProbability: 6,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 192,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 35,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase:
                'Abends möglicher Schauer, sonst einige Wolken und warm',
              PrecipitationProbability: 42,
              ThunderstormProbability: 29,
              RainProbability: 42,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 271,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 356,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.4,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.5,
              HoursOfRain: 0.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 49,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          },
          {
            Date: '2020-08-22T07:00:00+02:00',
            EpochDate: 1598072400,
            Sun: {
              Rise: '2020-08-22T06:26:00+02:00',
              EpochRise: 1598070360,
              Set: '2020-08-22T20:29:00+02:00',
              EpochSet: 1598120940,
            },
            Moon: {
              Rise: '2020-08-22T10:27:00+02:00',
              EpochRise: 1598084820,
              Set: '2020-08-22T22:25:00+02:00',
              EpochSet: 1598127900,
              Phase: 'WaxingCrescent',
              Age: 3,
            },
            Temperature: {
              Minimum: {
                Value: 14.7,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 25.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 24.6,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 13.9,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            HoursOfSun: 2.6,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 16,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Stickstoffdioxid',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 6,
              IconPhrase: 'Stark bewölkt',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Moderate',
              ShortPhrase: 'Schauer oder Gewitter; kühler',
              LongPhrase:
                'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
              PrecipitationProbability: 55,
              ThunderstormProbability: 40,
              RainProbability: 55,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 239,
                  Localized: 'WSW',
                  English: 'WSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 20.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 236,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              TotalLiquid: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 2.5,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 1.0,
              HoursOfRain: 1.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 93,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Teilweise bewölkt',
              HasPrecipitation: false,
              ShortPhrase: 'Einige Wolken',
              LongPhrase: 'Einige Wolken',
              PrecipitationProbability: 10,
              ThunderstormProbability: 0,
              RainProbability: 10,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 11.1,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 220,
                  Localized: 'SW',
                  English: 'SW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.7,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 203,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 43,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          },
        ],
      },
      tomorrow: {
        Headline: {
          EffectiveDate: '2020-08-17T02:00:00+02:00',
          EffectiveEpochDate: 1597622400,
          Severity: 3,
          Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
          Category: 'thunderstorm',
          EndDate: '2020-08-17T14:00:00+02:00',
          EndEpochDate: 1597665600,
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
        },
        DailyForecasts: [
          {
            Date: '2020-08-17T07:00:00+02:00',
            EpochDate: 1597640400,
            Sun: {
              Rise: '2020-08-17T06:19:00+02:00',
              EpochRise: 1597637940,
              Set: '2020-08-17T20:39:00+02:00',
              EpochSet: 1597689540,
            },
            Moon: {
              Rise: '2020-08-17T03:43:00+02:00',
              EpochRise: 1597628580,
              Set: '2020-08-17T20:12:00+02:00',
              EpochSet: 1597687920,
              Phase: 'WaningCrescent',
              Age: 28,
            },
            Temperature: {
              Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
              Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperature: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
            },
            RealFeelTemperatureShade: {
              Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
              Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
            },
            HoursOfSun: 3.4,
            DegreeDaySummary: {
              Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
              Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 39,
                Category: 'Gut',
                CategoryValue: 1,
                Type: 'Ozon',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
              {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
              {
                Name: 'UVIndex',
                Value: 2,
                Category: 'Niedrig',
                CategoryValue: 1,
              },
            ],
            Day: {
              Icon: 15,
              IconPhrase: 'Gewitter',
              HasPrecipitation: true,
              PrecipitationType: 'Rain',
              PrecipitationIntensity: 'Light',
              ShortPhrase: 'Am Morgen zeitweise Regen',
              LongPhrase:
                'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
              PrecipitationProbability: 65,
              ThunderstormProbability: 40,
              RainProbability: 65,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
              },
              WindGust: {
                Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
              },
              TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 2.5,
              HoursOfRain: 2.5,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 85,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Heiter bis wolkig',
              HasPrecipitation: false,
              ShortPhrase: 'Stellenweise Wolken',
              LongPhrase: 'Stellenweise Wolken',
              PrecipitationProbability: 15,
              ThunderstormProbability: 4,
              RainProbability: 15,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
              },
              WindGust: {
                Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
                Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
              },
              TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
              Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
              Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 63,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
            Link:
              'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          },
        ],
      },
      Rank: 43,
      LocalizedName: 'Darmstadt',
      Country: {ID: 'DE', LocalizedName: 'Deutschland'},
      AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
    };
  },
  updateCitys: () => {},
};

Object.defineProperty(appState.citys, 'Darmstadt', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    city: 'Darmstadt',
    hometown: true,
    Version: 1,
    Key: '168715',
    Type: 'City',
    weatherView: 'home',
    current: {
      LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
      EpochTime: 1610361360,
      WeatherText: 'Stark bewölkt',
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperature: {
        Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperatureShade: {
        Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
        Imperial: {Value: 27, Unit: 'F', UnitType: 18},
      },
      RelativeHumidity: 77,
      IndoorRelativeHumidity: 34,
      DewPoint: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      Wind: {
        Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
        Speed: {
          Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
        },
      },
      WindGust: {
        Speed: {
          Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
        },
      },
      UVIndex: 1,
      UVIndexText: 'Niedrig',
      Visibility: {
        Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
        Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
      },
      ObstructionsToVisibility: '',
      CloudCover: 76,
      Ceiling: {
        Metric: {Value: 9754, Unit: 'm', UnitType: 5},
        Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
      },
      Pressure: {
        Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
        Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
      },
      PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
      Past24HourTemperatureDeparture: {
        Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: -2, Unit: 'F', UnitType: 18},
      },
      ApparentTemperature: {
        Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      WindChillTemperature: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      WetBulbTemperature: {
        Metric: {Value: -2, Unit: 'C', UnitType: 17},
        Imperial: {Value: 28, Unit: 'F', UnitType: 18},
      },
      Precip1hr: {
        Metric: {Value: 0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0, Unit: 'in', UnitType: 1},
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PastHour: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past3Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past6Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past9Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past12Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past18Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past24Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
            Imperial: {Value: 37, Unit: 'F', UnitType: 18},
          },
        },
      },
      MobileLink:
        'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      Link:
        'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
    },
    fiveday: {
      Headline: {
        EffectiveDate: '2020-08-22T08:00:00+02:00',
        EffectiveEpochDate: 1598076000,
        Severity: 4,
        Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
        Category: 'cooler',
        EndDate: '2020-08-22T20:00:00+02:00',
        EndEpochDate: 1598119200,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-18T07:00:00+02:00',
          EpochDate: 1597726800,
          Sun: {
            Rise: '2020-08-18T06:21:00+02:00',
            EpochRise: 1597724460,
            Set: '2020-08-18T20:37:00+02:00',
            EpochSet: 1597775820,
          },
          Moon: {
            Rise: '2020-08-18T04:57:00+02:00',
            EpochRise: 1597719420,
            Set: '2020-08-18T20:48:00+02:00',
            EpochSet: 1597776480,
            Phase: 'WaningCrescent',
            Age: 29,
          },
          Temperature: {
            Minimum: {
              Value: 14.6,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 5.4,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 31,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 4,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 16,
            IconPhrase: 'Stark bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Vereinzelte Gewitter',
            LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
            PrecipitationProbability: 51,
            ThunderstormProbability: 60,
            RainProbability: 51,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 237,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 46.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 314,
                Localized: 'NW',
                English: 'NW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 71,
          },
          Night: {
            Icon: 41,
            IconPhrase: 'Teilweise bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Abends in Abständen Gewitter',
            LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 5.6,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 195,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 72,
                Localized: 'ONO',
                English: 'ENE',
              },
            },
            TotalLiquid: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 42,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
        {
          Date: '2020-08-19T07:00:00+02:00',
          EpochDate: 1597813200,
          Sun: {
            Rise: '2020-08-19T06:22:00+02:00',
            EpochRise: 1597810920,
            Set: '2020-08-19T20:35:00+02:00',
            EpochSet: 1597862100,
          },
          Moon: {
            Rise: '2020-08-19T06:17:00+02:00',
            EpochRise: 1597810620,
            Set: '2020-08-19T21:17:00+02:00',
            EpochSet: 1597864620,
            Phase: 'New',
            Age: 0,
          },
          Temperature: {
            Minimum: {
              Value: 17.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.9,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 6.2,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 4.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 30,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 4,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Ein wenig Sonne und angenehm',
            LongPhrase:
              'Ein wenig Sonnenschein für Wolken weichend und angenehm',
            PrecipitationProbability: 3,
            ThunderstormProbability: 0,
            RainProbability: 3,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 193,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 182,
                Localized: 'S',
                English: 'S',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 60,
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend bewölkt',
            LongPhrase: 'Überwiegend bewölkt',
            PrecipitationProbability: 23,
            ThunderstormProbability: 0,
            RainProbability: 23,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 7.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 155,
                Localized: 'SSO',
                English: 'SSE',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 141,
                Localized: 'SO',
                English: 'SE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 78,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
        },
        {
          Date: '2020-08-20T07:00:00+02:00',
          EpochDate: 1597899600,
          Sun: {
            Rise: '2020-08-20T06:24:00+02:00',
            EpochRise: 1597897440,
            Set: '2020-08-20T20:33:00+02:00',
            EpochSet: 1597948380,
          },
          Moon: {
            Rise: '2020-08-20T07:41:00+02:00',
            EpochRise: 1597902060,
            Set: '2020-08-20T21:42:00+02:00',
            EpochSet: 1597952520,
            Phase: 'WaxingCrescent',
            Age: 1,
          },
          Temperature: {
            Minimum: {
              Value: 20.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 31.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 11.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 8.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 28,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 2,
            IconPhrase: 'Überwiegend sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Viel Sonne und wärmer',
            LongPhrase: 'Größtenteils sonnig und wärmer',
            PrecipitationProbability: 9,
            ThunderstormProbability: 3,
            RainProbability: 9,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 183,
                Localized: 'S',
                English: 'S',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 200,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 20,
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Vielfach klar',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend klar und warm',
            LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
            PrecipitationProbability: 4,
            ThunderstormProbability: 1,
            RainProbability: 4,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 127,
                Localized: 'SO',
                English: 'SE',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 89,
                Localized: 'O',
                English: 'E',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 13,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
        },
        {
          Date: '2020-08-21T07:00:00+02:00',
          EpochDate: 1597986000,
          Sun: {
            Rise: '2020-08-21T06:25:00+02:00',
            EpochRise: 1597983900,
            Set: '2020-08-21T20:31:00+02:00',
            EpochSet: 1598034660,
          },
          Moon: {
            Rise: '2020-08-21T09:04:00+02:00',
            EpochRise: 1597993440,
            Set: '2020-08-21T22:04:00+02:00',
            EpochSet: 1598040240,
            Phase: 'WaxingCrescent',
            Age: 2,
          },
          Temperature: {
            Minimum: {
              Value: 19.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 33.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.3,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 9.0,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 23,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 5,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 3,
            IconPhrase: 'Teils sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Teilweise sonnig und heiß',
            LongPhrase: 'Teilweise sonnig und heiß',
            PrecipitationProbability: 6,
            ThunderstormProbability: 2,
            RainProbability: 6,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 192,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 35,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase:
              'Abends möglicher Schauer, sonst einige Wolken und warm',
            PrecipitationProbability: 42,
            ThunderstormProbability: 29,
            RainProbability: 42,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 271,
                Localized: 'W',
                English: 'W',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 356,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 49,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
        },
        {
          Date: '2020-08-22T07:00:00+02:00',
          EpochDate: 1598072400,
          Sun: {
            Rise: '2020-08-22T06:26:00+02:00',
            EpochRise: 1598070360,
            Set: '2020-08-22T20:29:00+02:00',
            EpochSet: 1598120940,
          },
          Moon: {
            Rise: '2020-08-22T10:27:00+02:00',
            EpochRise: 1598084820,
            Set: '2020-08-22T22:25:00+02:00',
            EpochSet: 1598127900,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 23.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 2.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 16,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 6,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Schauer oder Gewitter; kühler',
            LongPhrase: 'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 239,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 236,
                Localized: 'SW',
                English: 'SW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 93,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Einige Wolken',
            LongPhrase: 'Einige Wolken',
            PrecipitationProbability: 10,
            ThunderstormProbability: 0,
            RainProbability: 10,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 220,
                Localized: 'SW',
                English: 'SW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 43,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
        },
      ],
    },
    tomorrow: {
      Headline: {
        EffectiveDate: '2020-08-17T02:00:00+02:00',
        EffectiveEpochDate: 1597622400,
        Severity: 3,
        Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
        Category: 'thunderstorm',
        EndDate: '2020-08-17T14:00:00+02:00',
        EndEpochDate: 1597665600,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-17T07:00:00+02:00',
          EpochDate: 1597640400,
          Sun: {
            Rise: '2020-08-17T06:19:00+02:00',
            EpochRise: 1597637940,
            Set: '2020-08-17T20:39:00+02:00',
            EpochSet: 1597689540,
          },
          Moon: {
            Rise: '2020-08-17T03:43:00+02:00',
            EpochRise: 1597628580,
            Set: '2020-08-17T20:12:00+02:00',
            EpochSet: 1597687920,
            Phase: 'WaningCrescent',
            Age: 28,
          },
          Temperature: {
            Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
            Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperature: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperatureShade: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
          },
          HoursOfSun: 3.4,
          DegreeDaySummary: {
            Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
            Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 39,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 15,
            IconPhrase: 'Gewitter',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Am Morgen zeitweise Regen',
            LongPhrase:
              'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
            PrecipitationProbability: 65,
            ThunderstormProbability: 40,
            RainProbability: 65,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
            },
            WindGust: {
              Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
            },
            TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 2.5,
            HoursOfRain: 2.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 85,
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase: 'Stellenweise Wolken',
            PrecipitationProbability: 15,
            ThunderstormProbability: 4,
            RainProbability: 15,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
            },
            WindGust: {
              Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
            },
            TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 63,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
      ],
    },
    Rank: 43,
    LocalizedName: 'Darmstadt',
    Country: {ID: 'DE', LocalizedName: 'Deutschland'},
    AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
  },
});

Object.defineProperty(appState.citys, 'Waschenbach', {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    city: 'Waschenbach',
    hometown: false,
    Version: 1,
    Key: '168715',
    Type: 'City',
    weatherView: 'home',
    current: {
      LocalObservationDateTime: '2021-01-11T11:36:00+01:00',
      EpochTime: 1610361360,
      WeatherText: 'Stark bewölkt',
      WeatherIcon: 6,
      HasPrecipitation: false,
      PrecipitationType: null,
      IsDayTime: true,
      Temperature: {
        Metric: {Value: -0.9, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperature: {
        Metric: {Value: -1.3, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      RealFeelTemperatureShade: {
        Metric: {Value: -2.7, Unit: 'C', UnitType: 17},
        Imperial: {Value: 27, Unit: 'F', UnitType: 18},
      },
      RelativeHumidity: 77,
      IndoorRelativeHumidity: 34,
      DewPoint: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      Wind: {
        Direction: {Degrees: 203, Localized: 'SSW', English: 'SSW'},
        Speed: {
          Metric: {Value: 9.2, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 5.7, Unit: 'mi/h', UnitType: 9},
        },
      },
      WindGust: {
        Speed: {
          Metric: {Value: 14.9, Unit: 'km/h', UnitType: 7},
          Imperial: {Value: 9.3, Unit: 'mi/h', UnitType: 9},
        },
      },
      UVIndex: 1,
      UVIndexText: 'Niedrig',
      Visibility: {
        Metric: {Value: 16.1, Unit: 'km', UnitType: 6},
        Imperial: {Value: 10, Unit: 'mi', UnitType: 2},
      },
      ObstructionsToVisibility: '',
      CloudCover: 76,
      Ceiling: {
        Metric: {Value: 9754, Unit: 'm', UnitType: 5},
        Imperial: {Value: 32000, Unit: 'ft', UnitType: 0},
      },
      Pressure: {
        Metric: {Value: 1024, Unit: 'mb', UnitType: 14},
        Imperial: {Value: 30.24, Unit: 'inHg', UnitType: 12},
      },
      PressureTendency: {LocalizedText: 'Steigend', Code: 'R'},
      Past24HourTemperatureDeparture: {
        Metric: {Value: -1.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: -2, Unit: 'F', UnitType: 18},
      },
      ApparentTemperature: {
        Metric: {Value: -1.1, Unit: 'C', UnitType: 17},
        Imperial: {Value: 30, Unit: 'F', UnitType: 18},
      },
      WindChillTemperature: {
        Metric: {Value: -4.4, Unit: 'C', UnitType: 17},
        Imperial: {Value: 24, Unit: 'F', UnitType: 18},
      },
      WetBulbTemperature: {
        Metric: {Value: -2, Unit: 'C', UnitType: 17},
        Imperial: {Value: 28, Unit: 'F', UnitType: 18},
      },
      Precip1hr: {
        Metric: {Value: 0, Unit: 'mm', UnitType: 3},
        Imperial: {Value: 0, Unit: 'in', UnitType: 1},
      },
      PrecipitationSummary: {
        Precipitation: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        PastHour: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past3Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past6Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past9Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past12Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past18Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
        Past24Hours: {
          Metric: {Value: 0, Unit: 'mm', UnitType: 3},
          Imperial: {Value: 0, Unit: 'in', UnitType: 1},
        },
      },
      TemperatureSummary: {
        Past6HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past12HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: -0.2, Unit: 'C', UnitType: 17},
            Imperial: {Value: 32, Unit: 'F', UnitType: 18},
          },
        },
        Past24HourRange: {
          Minimum: {
            Metric: {Value: -7.4, Unit: 'C', UnitType: 17},
            Imperial: {Value: 19, Unit: 'F', UnitType: 18},
          },
          Maximum: {
            Metric: {Value: 2.9, Unit: 'C', UnitType: 17},
            Imperial: {Value: 37, Unit: 'F', UnitType: 18},
          },
        },
      },
      MobileLink:
        'http://m.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
      Link:
        'http://www.accuweather.com/de/de/frankfurt/60311/current-weather/168720',
    },
    fiveday: {
      Headline: {
        EffectiveDate: '2020-08-22T08:00:00+02:00',
        EffectiveEpochDate: 1598076000,
        Severity: 4,
        Text: 'Zunehmend wärmer, dann wieder deutlich kühler Samstag',
        Category: 'cooler',
        EndDate: '2020-08-22T20:00:00+02:00',
        EndEpochDate: 1598119200,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-18T07:00:00+02:00',
          EpochDate: 1597726800,
          Sun: {
            Rise: '2020-08-18T06:21:00+02:00',
            EpochRise: 1597724460,
            Set: '2020-08-18T20:37:00+02:00',
            EpochSet: 1597775820,
          },
          Moon: {
            Rise: '2020-08-18T04:57:00+02:00',
            EpochRise: 1597719420,
            Set: '2020-08-18T20:48:00+02:00',
            EpochSet: 1597776480,
            Phase: 'WaningCrescent',
            Age: 29,
          },
          Temperature: {
            Minimum: {
              Value: 14.6,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 5.4,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 31,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 4,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 16,
            IconPhrase: 'Stark bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Vereinzelte Gewitter',
            LongPhrase: 'Wechselhaft bewölkt und vereinzelte Gewitter',
            PrecipitationProbability: 51,
            ThunderstormProbability: 60,
            RainProbability: 51,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 14.8,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 237,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 46.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 314,
                Localized: 'NW',
                English: 'NW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 71,
          },
          Night: {
            Icon: 41,
            IconPhrase: 'Teilweise bewölkt mit Gewittern',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Abends in Abständen Gewitter',
            LongPhrase: 'Am Abend stellenweise Gewitter, sonst aufklarend',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 5.6,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 195,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 72,
                Localized: 'ONO',
                English: 'ENE',
              },
            },
            TotalLiquid: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 1.3,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 42,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
        {
          Date: '2020-08-19T07:00:00+02:00',
          EpochDate: 1597813200,
          Sun: {
            Rise: '2020-08-19T06:22:00+02:00',
            EpochRise: 1597810920,
            Set: '2020-08-19T20:35:00+02:00',
            EpochSet: 1597862100,
          },
          Moon: {
            Rise: '2020-08-19T06:17:00+02:00',
            EpochRise: 1597810620,
            Set: '2020-08-19T21:17:00+02:00',
            EpochSet: 1597864620,
            Phase: 'New',
            Age: 0,
          },
          Temperature: {
            Minimum: {
              Value: 17.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 26.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 27.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 17.8,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.9,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 6.2,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 4.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 30,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 4,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Ein wenig Sonne und angenehm',
            LongPhrase:
              'Ein wenig Sonnenschein für Wolken weichend und angenehm',
            PrecipitationProbability: 3,
            ThunderstormProbability: 0,
            RainProbability: 3,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 193,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 182,
                Localized: 'S',
                English: 'S',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 60,
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend bewölkt',
            LongPhrase: 'Überwiegend bewölkt',
            PrecipitationProbability: 23,
            ThunderstormProbability: 0,
            RainProbability: 23,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 7.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 155,
                Localized: 'SSO',
                English: 'SSE',
              },
            },
            WindGust: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 141,
                Localized: 'SO',
                English: 'SE',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 78,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=2&unit=c',
        },
        {
          Date: '2020-08-20T07:00:00+02:00',
          EpochDate: 1597899600,
          Sun: {
            Rise: '2020-08-20T06:24:00+02:00',
            EpochRise: 1597897440,
            Set: '2020-08-20T20:33:00+02:00',
            EpochSet: 1597948380,
          },
          Moon: {
            Rise: '2020-08-20T07:41:00+02:00',
            EpochRise: 1597902060,
            Set: '2020-08-20T21:42:00+02:00',
            EpochSet: 1597952520,
            Phase: 'WaxingCrescent',
            Age: 1,
          },
          Temperature: {
            Minimum: {
              Value: 20.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 31.8,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.4,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 30.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 11.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 8.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 28,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 6,
              Category: 'Hoch',
              CategoryValue: 3,
            },
          ],
          Day: {
            Icon: 2,
            IconPhrase: 'Überwiegend sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Viel Sonne und wärmer',
            LongPhrase: 'Größtenteils sonnig und wärmer',
            PrecipitationProbability: 9,
            ThunderstormProbability: 3,
            RainProbability: 9,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 183,
                Localized: 'S',
                English: 'S',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 200,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 20,
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Vielfach klar',
            HasPrecipitation: false,
            ShortPhrase: 'Überwiegend klar und warm',
            LongPhrase: 'Klar mit stellenweiser Bewölkung und warm',
            PrecipitationProbability: 4,
            ThunderstormProbability: 1,
            RainProbability: 4,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 127,
                Localized: 'SO',
                English: 'SE',
              },
            },
            WindGust: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 89,
                Localized: 'O',
                English: 'E',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 13,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=3&unit=c',
        },
        {
          Date: '2020-08-21T07:00:00+02:00',
          EpochDate: 1597986000,
          Sun: {
            Rise: '2020-08-21T06:25:00+02:00',
            EpochRise: 1597983900,
            Set: '2020-08-21T20:31:00+02:00',
            EpochSet: 1598034660,
          },
          Moon: {
            Rise: '2020-08-21T09:04:00+02:00',
            EpochRise: 1597993440,
            Set: '2020-08-21T22:04:00+02:00',
            EpochSet: 1598040240,
            Phase: 'WaxingCrescent',
            Age: 2,
          },
          Temperature: {
            Minimum: {
              Value: 19.5,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 33.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 34.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 19.3,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 32.3,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 9.0,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 9.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 23,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 5,
              Category: 'Mittel',
              CategoryValue: 2,
            },
          ],
          Day: {
            Icon: 3,
            IconPhrase: 'Teils sonnig',
            HasPrecipitation: false,
            ShortPhrase: 'Teilweise sonnig und heiß',
            LongPhrase: 'Teilweise sonnig und heiß',
            PrecipitationProbability: 6,
            ThunderstormProbability: 2,
            RainProbability: 6,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 192,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 35,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase:
              'Abends möglicher Schauer, sonst einige Wolken und warm',
            PrecipitationProbability: 42,
            ThunderstormProbability: 29,
            RainProbability: 42,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 9.3,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 271,
                Localized: 'W',
                English: 'W',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 356,
                Localized: 'N',
                English: 'N',
              },
            },
            TotalLiquid: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.4,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.5,
            HoursOfRain: 0.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 49,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=4&unit=c',
        },
        {
          Date: '2020-08-22T07:00:00+02:00',
          EpochDate: 1598072400,
          Sun: {
            Rise: '2020-08-22T06:26:00+02:00',
            EpochRise: 1598070360,
            Set: '2020-08-22T20:29:00+02:00',
            EpochSet: 1598120940,
          },
          Moon: {
            Rise: '2020-08-22T10:27:00+02:00',
            EpochRise: 1598084820,
            Set: '2020-08-22T22:25:00+02:00',
            EpochSet: 1598127900,
            Phase: 'WaxingCrescent',
            Age: 3,
          },
          Temperature: {
            Minimum: {
              Value: 14.7,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 25.2,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperature: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 24.6,
              Unit: 'C',
              UnitType: 17,
            },
          },
          RealFeelTemperatureShade: {
            Minimum: {
              Value: 13.9,
              Unit: 'C',
              UnitType: 17,
            },
            Maximum: {
              Value: 23.7,
              Unit: 'C',
              UnitType: 17,
            },
          },
          HoursOfSun: 2.6,
          DegreeDaySummary: {
            Heating: {
              Value: 0.0,
              Unit: 'C',
              UnitType: 17,
            },
            Cooling: {
              Value: 2.0,
              Unit: 'C',
              UnitType: 17,
            },
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 16,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Stickstoffdioxid',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Mold',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'Tree',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 6,
            IconPhrase: 'Stark bewölkt',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Moderate',
            ShortPhrase: 'Schauer oder Gewitter; kühler',
            LongPhrase: 'Überwiegend bewölkt, möglicherweise Gewitter; kühler',
            PrecipitationProbability: 55,
            ThunderstormProbability: 40,
            RainProbability: 55,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 13.0,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 239,
                Localized: 'WSW',
                English: 'WSW',
              },
            },
            WindGust: {
              Speed: {
                Value: 20.4,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 236,
                Localized: 'SW',
                English: 'SW',
              },
            },
            TotalLiquid: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 2.5,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 1.0,
            HoursOfRain: 1.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 93,
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Teilweise bewölkt',
            HasPrecipitation: false,
            ShortPhrase: 'Einige Wolken',
            LongPhrase: 'Einige Wolken',
            PrecipitationProbability: 10,
            ThunderstormProbability: 0,
            RainProbability: 10,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {
                Value: 11.1,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 220,
                Localized: 'SW',
                English: 'SW',
              },
            },
            WindGust: {
              Speed: {
                Value: 16.7,
                Unit: 'km/h',
                UnitType: 7,
              },
              Direction: {
                Degrees: 203,
                Localized: 'SSW',
                English: 'SSW',
              },
            },
            TotalLiquid: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Rain: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Snow: {
              Value: 0.0,
              Unit: 'cm',
              UnitType: 4,
            },
            Ice: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 43,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=5&unit=c',
        },
      ],
    },
    tomorrow: {
      Headline: {
        EffectiveDate: '2020-08-17T02:00:00+02:00',
        EffectiveEpochDate: 1597622400,
        Severity: 3,
        Text: 'Regen und Gewitter Sonntagnacht spät bis Montagmorgen',
        Category: 'thunderstorm',
        EndDate: '2020-08-17T14:00:00+02:00',
        EndEpochDate: 1597665600,
        MobileLink:
          'http://m.accuweather.com/de/de/darmstadt/64283/extended-weather-forecast/168715?unit=c',
        Link:
          'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?unit=c',
      },
      DailyForecasts: [
        {
          Date: '2020-08-17T07:00:00+02:00',
          EpochDate: 1597640400,
          Sun: {
            Rise: '2020-08-17T06:19:00+02:00',
            EpochRise: 1597637940,
            Set: '2020-08-17T20:39:00+02:00',
            EpochSet: 1597689540,
          },
          Moon: {
            Rise: '2020-08-17T03:43:00+02:00',
            EpochRise: 1597628580,
            Set: '2020-08-17T20:12:00+02:00',
            EpochSet: 1597687920,
            Phase: 'WaningCrescent',
            Age: 28,
          },
          Temperature: {
            Minimum: {Value: 15.2, Unit: 'C', UnitType: 17},
            Maximum: {Value: 24.4, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperature: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.9, Unit: 'C', UnitType: 17},
          },
          RealFeelTemperatureShade: {
            Minimum: {Value: 15.3, Unit: 'C', UnitType: 17},
            Maximum: {Value: 23.3, Unit: 'C', UnitType: 17},
          },
          HoursOfSun: 3.4,
          DegreeDaySummary: {
            Heating: {Value: 0.0, Unit: 'C', UnitType: 17},
            Cooling: {Value: 2.0, Unit: 'C', UnitType: 17},
          },
          AirAndPollen: [
            {
              Name: 'AirQuality',
              Value: 39,
              Category: 'Gut',
              CategoryValue: 1,
              Type: 'Ozon',
            },
            {
              Name: 'Grass',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Mold', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'Ragweed',
              Value: 0,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
            {Name: 'Tree', Value: 0, Category: 'Niedrig', CategoryValue: 1},
            {
              Name: 'UVIndex',
              Value: 2,
              Category: 'Niedrig',
              CategoryValue: 1,
            },
          ],
          Day: {
            Icon: 15,
            IconPhrase: 'Gewitter',
            HasPrecipitation: true,
            PrecipitationType: 'Rain',
            PrecipitationIntensity: 'Light',
            ShortPhrase: 'Am Morgen zeitweise Regen',
            LongPhrase:
              'KÃ¼hler; am Morgen Regenschauer; spÃ¤ter im Verlauf des Tages Schauer oder Gewitter',
            PrecipitationProbability: 65,
            ThunderstormProbability: 40,
            RainProbability: 65,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 11.1, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 231, Localized: 'SW', English: 'SW'},
            },
            WindGust: {
              Speed: {Value: 16.7, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 227, Localized: 'SW', English: 'SW'},
            },
            TotalLiquid: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Rain: {Value: 4.3, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 2.5,
            HoursOfRain: 2.5,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 85,
          },
          Night: {
            Icon: 36,
            IconPhrase: 'Heiter bis wolkig',
            HasPrecipitation: false,
            ShortPhrase: 'Stellenweise Wolken',
            LongPhrase: 'Stellenweise Wolken',
            PrecipitationProbability: 15,
            ThunderstormProbability: 4,
            RainProbability: 15,
            SnowProbability: 0,
            IceProbability: 0,
            Wind: {
              Speed: {Value: 9.3, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 205, Localized: 'SSW', English: 'SSW'},
            },
            WindGust: {
              Speed: {Value: 14.8, Unit: 'km/h', UnitType: 7},
              Direction: {Degrees: 197, Localized: 'SSW', English: 'SSW'},
            },
            TotalLiquid: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Rain: {Value: 0.0, Unit: 'mm', UnitType: 3},
            Snow: {Value: 0.0, Unit: 'cm', UnitType: 4},
            Ice: {Value: 0.0, Unit: 'mm', UnitType: 3},
            HoursOfPrecipitation: 0.0,
            HoursOfRain: 0.0,
            HoursOfSnow: 0.0,
            HoursOfIce: 0.0,
            CloudCover: 63,
          },
          Sources: ['AccuWeather'],
          MobileLink:
            'http://m.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
          Link:
            'http://www.accuweather.com/de/de/darmstadt/64283/daily-weather-forecast/168715?day=1&unit=c',
        },
      ],
    },
    Rank: 43,
    LocalizedName: 'Waschenbach',
    Country: {ID: 'DE', LocalizedName: 'Deutschland'},
    AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
  },
});

export default appState;
