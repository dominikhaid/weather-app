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
  };

  state = {
    debug: true,
    theme: false,
    activeCity: false,
    setAppState: e => {
      this.setState(e);
    },
    limit: 10,
    updateRequestState: () => {
      this.setState({limit: Number(this.state.limit) - 1});
    },
    getActivecity: () => {
      if (!this.state.citys) return false;
      let activeCity = Object.entries(this.state.citys).find(
        e => e[1].activeCity === true,
      );

      if (activeCity) return activeCity[1];
      return false;
    },
    getHometown: () => {
      if (!this.state.citys) return false;

      let hometown = Object.entries(this.state.citys).find(
        e => e[1].hometown === true,
      );

      if (hometown) return hometown[1];
      return false;
    },
    citys: false,
    updateCitys: (city = false) => {
      let oldHometown,
        oldActiveCity,
        updatedCitys = {};

      if (!city) return false;

      Object.defineProperty(updatedCitys, city.city, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: city,
      });

      if (city.activeCity === true) this.state.getActivecity();
      if (oldActiveCity) oldActiveCity.activeCity = false;

      if (city.hometown === true) this.state.getHometown();
      if (oldHometown) oldHometown.hometown = false;

      if (oldActiveCity) updatedCitys = {...updatedCitys, oldActiveCity};
      if (oldHometown) updatedCitys = {...updatedCitys, oldHometown};

      this.setState({
        activeCity: {
          city: city.city,
          weatherView: city.weatherView ? city.weatherView : 'home',
        },
        citys: updatedCitys,
      });
    },
  };

  render() {
    if (
      process.browser &&
      !this.state.theme &&
      !('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
      this.setState({theme: 'dark'});

    if (
      process.browser &&
      !this.state.theme &&
      !('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    )
      this.setState({theme: 'light'});
    if (process.browser)
      document.querySelector('html').classList.add(this.state.theme);

    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {AppContext, AppProvider};
