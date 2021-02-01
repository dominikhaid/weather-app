let appState = {
  debug: true,
  theme: 'light',
  activeCity: {city: 'Darmstadt', hometown: true, weatherView: 'current'},
  limit: 10,
  citys: {},
  setAppState: () => {},
  getHometown: () => {
    return {
      darmstadt: {
        city: 'Darmstadt',
        hometown: true,
        Version: 1,
        Key: '168715',
        Type: 'City',
        Rank: 43,
        LocalizedName: 'Darmstadt',
        Country: {ID: 'DE', LocalizedName: 'Deutschland'},
        AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
      },
    };
  },
  getActivecity: () => {
    return {
      darmstadt: {
        hometown: true,
        Version: 1,
        Key: '168715',
        Type: 'City',
        Rank: 43,
        LocalizedName: 'Darmstadt',
        Country: {ID: 'DE', LocalizedName: 'Deutschland'},
        AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
      },
    };
  },
  updateRequestState: () => {
    return 9;
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
    Rank: 43,
    LocalizedName: 'Darmstadt',
    Country: {ID: 'DE', LocalizedName: 'Deutschland'},
    AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
  },
});

export default appState;
