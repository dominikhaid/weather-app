const data_current = [
  {
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
];

export default data_current;
