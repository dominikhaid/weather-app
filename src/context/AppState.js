import React, {Component} from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

/**
 * @desc HOC MAIN APP CONTEXT
 */
class AppProvider extends Component {
  static propTypes = {
    getActivecity: PropTypes.func,
    booleanProp: PropTypes.bool,
    numberProp: PropTypes.number,
    stringProp: PropTypes.string,
    functionProp: PropTypes.func,
    children: PropTypes.object,
  };

  state = {
    debug: false,
    activeCity: {},
    setAppState: e => {
      this.setState(e);
    },
    limit: 10,
    updateRequestState: () => {
      this.setState({limit: Number(this.state.limit) - 1});
    },
    getActivecity: () => {
      if (!this.state.citys) return false;
      let activeCity = Object.entries(this.state.citys).find(e => {
        if (e.length > 0 && e[1] !== undefined)
          return e[1].city === this.state.activeCity.city;
        return {};
      });

      if (activeCity) return activeCity[1];
      return {};
    },
    getCityByName: (citySearch = false) => {
      if (!citySearch) return false;
      let cityFound = Object.entries(this.state.citys).find(e => {
        if (e.length > 0 && e[1] !== undefined) return e[1].city === citySearch;
        return {};
      });

      if (cityFound) return cityFound[1];
      return {};
    },
    getHometown: () => {
      if (!this.state.citys) return false;

      let hometown = Object.entries(this.state.citys).find(e => {
        if (e.length > 0 && e[1] !== undefined) return e[1].hometown === true;
        return {};
      });

      if (hometown) return hometown[1];
      return {};
    },
    citys: {},
    updateCitys: (city = false) => {
      let data_exists = true,
        updatedCitys = {};

      if (!city) return false;

      if (city.current && city.weatherView === 'current') {
        data_exists = true;
      } else if (city.tomorrow && city.weatherView === 'tomorrow') {
        data_exists = true;
      } else if (city.fiveday && city.weatherView === 'fiveday') {
        data_exists = true;
      } else if (city.fiveday && city.weatherView === 'home') {
        data_exists = true;
      } else {
        data_exists = false;
      }

      if (city.hometown) {
        let old = this.state.getHometown();

        if (old) {
          old.hometown = false;

          Object.defineProperty(updatedCitys, old.city, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: old,
          });
        }
      }

      // NOTE ADD NEW DATA TO THE CITYS STATE FROM WEATHER API CALL
      if (data_exists) {
        data_exists = JSON.parse(JSON.stringify(city));

        delete data_exists.activeCity;
        delete data_exists.weatherView;

        updatedCitys = JSON.parse(JSON.stringify(this.state.citys));

        Object.defineProperty(updatedCitys, data_exists.city, {
          enumerable: true,
          configurable: true,
          writable: true,
          value: data_exists,
        });

        this.setState({
          activeCity: {
            city: city.city,
            weatherView: city.weatherView ? city.weatherView : 'home',
          },
          citys: updatedCitys,
        });
      }

      // NOTE CHANGE ACTIVE CITY FOR REUQEST WEATHER DATA
      if (!data_exists) {
        let city_exists = Object.keys(this.state.citys).find(e => {
          if (e) return e === city.city;
          return false;
        });

        if (!city_exists) {
          if (this.state.citys)
            updatedCitys = JSON.parse(JSON.stringify(this.state.citys));

          Object.defineProperty(updatedCitys, city.city, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: city,
          });

          this.setState({
            activeCity: {
              city: city.city,
              weatherView: city.weatherView ? city.weatherView : 'home',
            },
            citys: updatedCitys,
          });
        }

        if (city_exists) {
          const cityStates = JSON.parse(JSON.stringify(this.state.citys));
          if ('hometown' in city) {
            Object.entries(cityStates).find(e => {
              if (e[1].city === city.city) e[1].hometown = true;
              return e[1].city === city.city;
            });
          }
          this.setState({
            activeCity: {
              city: city.city,
              weatherView: city.weatherView ? city.weatherView : 'home',
            },
            citys: cityStates,
          });
        }
      }
    },
  };

  render() {
    const {children} = this.props;
    return (
      <AppContext.Provider value={this.state}>{children}</AppContext.Provider>
    );
  }
}

export {AppContext, AppProvider};
