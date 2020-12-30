import React, {Component} from 'react';

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    setAppState: e => {
      this.setState(e);
    },
    limit: 10,
    updateRequestState: e => {
      this.setState({limit: Number(this.state.limit) - 1});
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
    {
      return (
        <AppContext.Provider value={this.state}>
          <main
            className="container-normal"
            id="main"
          >
            {this.props.children}
          </main>
        </AppContext.Provider>
      );
    }
  }
}

export {AppContext, AppProvider};
