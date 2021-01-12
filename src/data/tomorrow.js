const data_tomorrow = {
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
        {Name: 'Grass', Value: 0, Category: 'Niedrig', CategoryValue: 1},
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
};

export default data_tomorrow;
