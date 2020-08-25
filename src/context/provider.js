import React, {Component} from 'react';
import AppContext from '@/context/app-context';

class Provider extends Component {
  state = {
    mobileBreak: 500,
    activePageState: '/info',
    setAppState: e => {
      this.setState(e);
    },
    errorComp: {state: false, msg: false},
    requestState: 10,
    updateRequestState: e => {
      this.setState({requestState: Number(this.state.requestState) - 1});
    },
    activeCity: false,
    updateActiveCity: e => {
      let res;
      //CHECK IF CITY ALREADY EXISTS AND DATA FOR CURRENT SEARCH IS ALREADY THERE
      //JUST USE THIS TO UPDATE THE CITY FROM SEARCH IF YOU OVERWRITE HERE WE GOT UNNECESSARY REQUESTS
      if (this.state.citysState && this.state.citysState.length > 0) {
        res = this.state.citysState.filter(city => {
          if (e.lastSearch === 'current') {
            return e.city === city.city && city.current;
          } else if (e.lastSearch === 'tomorrow') {
            return e.city === city.city && city.tomorrow;
          } else if (e.lastSearch === 'fiveday') {
            return e.city === city.city && city.fiveday;
          }
        });
      }
      //IF CITY NOT EXISTS OR DATA IS NOT THERE UPDATE THE ACTIVECITYSTATE
      if (!res || res.length < 1 || res === undefined)
        this.setState({activeCity: e});
    },
    citysState: [],
    updateCitysState: e => {
      let res;
      let resInd;

      //ChECK IF CITY ALREADY EXIST
      if (this.state.citysState && this.state.citysState.length > 0) {
        res = this.state.citysState.filter((city, index) => {
          resInd = index;
          return e.city === city.city;
        });
      }

      //IF CITY EXISTS GET THE CITY OBJECT AND UPDATE IT WITHOUT JUST OVERWRITE IT
      let newStateArray;
      if (res && res.length > 0) {
        if (e.lastSearch === 'current') {
          newStateArray = [...this.state.citysState];

          e.tomorrow = newStateArray[resInd].tomorrow;
          e.fiveday = newStateArray[resInd].fiveday;
        } else if (e.lastSearch === 'tomorrow') {
          newStateArray = [...this.state.citysState];

          e.current = newStateArray[resInd].current;
          e.fiveday = newStateArray[resInd].fiveday;
        } else if (e.lastSearch === 'fiveday') {
          newStateArray = [...this.state.citysState];

          e.current = newStateArray[resInd].current;
          e.tomorrow = newStateArray[resInd].tomorrow;
        }
        newStateArray[resInd] = e;

        this.setState({citysState: [...newStateArray]});
        return true;
      }

      console.debug('UPDATECITYCONTEXT', res, e);
      //IF CITY NOT EXISTS ADD IT
      this.setState({
        citysState: [...this.state.citysState, e],
      });
      return true;
    },
    weatherView: 'current',
    setWeatherView: e => {
      this.setState({weatherView: e});
    },
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export {Provider};
