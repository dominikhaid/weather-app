import React, {useState} from 'react';
import {Radio, Form, Input, Button, Header, Search} from 'semantic-ui-react';
import MainContainer from '@/components/MainContainer';
import {useRouter} from 'next/router';

//example responses from data folder set debug state to true to use this app will run without api then
import fakeLocation from '../data/location';

export default function SearchView(weatherStates) {
  const router = useRouter();
  /**
   * SEARCHBOX
   */
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchRadio, setSearchRadio] = useState('current');

  const handleResultSelect = e => {
    setSearchText(e.textContent);
    setResult([]);
  };

  const handleSearchChange = e => {
    setIsLoading(true);
    setSearchText(e.value);
    setTimeout(() => {
      const re = new RegExp(e.value, 'i');
      setIsLoading(false);

      setResult(
        weatherStates.citysState.map(city => {
          if (re.test(city.city)) return {title: city.city};
          return false;
        }),
      );
    }, 300);
  };

  /**
   * ANALYSE CITYCONTEXT TO PREVENT DOUBLE LOADING DATA
   */
  const findCityContext = (cont, arg) => {
    let dup;
    let weatherType;
    if (cont.length > 0) {
      dup = cont.filter(e => {
        return e.city.toLowerCase() === arg.toLowerCase() || e.plz === arg;
      });
    }
    if (dup && dup.length > 0) return dup;
    return false;
  };

  /**
   * REQUEST FROM SEARCHBOX
   */
  const findLocation = () => {
    const openCityModal = () => {
      let cityList = locationData.map(element => {
        let newCity = {};
        newCity.city = element.city
          ? element.city
          : element.LocalizedName === ''
          ? element.EnglishName
          : element.LocalizedName;
        newCity.Key = element.Key;
        newCity.current = false;
        newCity.tomorrow = false;
        newCity.fiveday = false;
        newCity.PrimaryPostalCode = element.PrimaryPostalCode;
        newCity.lastSearch = searchRadio;
        return newCity;
      });

      weatherStates.modal.setNewState({
        modalState: true,
        modalMode: 'locList',
        modalData: cityList,
        modalHeader: 'Matches',
        modalHeaderDes: 'Auswahl:',
      });
    };

    //TODO ERRO EMPTY INPUT HERE
    if (!searchText || !searchRadio) {
      return;
    }
    let locationData;
    //CHECK IF DATA IS ALREADY IN STORE
    let dup = findCityContext(weatherStates.citysState, searchText);

    if (dup) {
      locationData = dup;
      openCityModal();
    } else if (process.env.NEXT_PUBLIC_DEBUG !== 'false') {
      locationData = fakeLocation;
      console.debug('LOCATION REQUEST FAKE');
      weatherStates.updateRequestState();
      openCityModal();
    } else {
      console.debug('LOCATION REQUEST');
      let url;
      if (searchText.replace(/\d{5}(?:-?\d{4})?/i, '') === '') {
        url = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${process.env.NEXT_PUBLIC_API}&q=${searchText}&language=de&details=false`;
      } else if (
        searchText.replace(
          /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/g,
          '',
        ) !== ''
      ) {
        console.log('wrong');
        return;
      } else {
        url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.NEXT_PUBLIC_API}&q=${searchText}&language=de&details=false`;
      }

      fetch(url, {
        method: 'GET', // or 'PUT'
        // headers: {
        //   // 'Content-Type': 'application/json',
        //   credentials: 'include',
        // },
        // body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          locationData = data;
          openCityModal();
          weatherStates.updateRequestState();
        })
        .catch(error => {
          console.error('Error:', error);
          router.push('/limit');
          return;
        });
    }
  };

  if (!process.browser) {
    //console.debug('Home SERVER');
  } else {
    console.debug('Search CLIENT', weatherStates);
    // if (weatherStates.activePageState !== '/search')
    //   weatherStates.setAppState({activePageState: '/search'});
  }

  return (
    <React.Fragment>
      <MainContainer id={'search'}>
        <div
          className="weatherBoxDay"
          style={{
            maxWidth: '500px',
            textAlign: 'center',
            margin: '2rem 1rem 1rem 1rem',
          }}
        >
          <div className="general" style={{margin: ' 1rem'}}>
            <Header as="h4" icon textAlign="left">
              <Header.Content>Search</Header.Content>
            </Header>
            <Form style={{marginTop: '2rem'}} className="flex-item-4">
              <Form.Field
                style={{width: '100%', margin: ' 1rem 2rem 1.5rem 2rem'}}
              >
                <Search
                  input={{icon: 'search', iconPosition: 'left'}}
                  loading={isLoading}
                  onResultSelect={e => handleResultSelect(e.target)}
                  onSearchChange={e => handleSearchChange(e.target)}
                  results={results}
                  value={searchText}
                />
              </Form.Field>

              <Form.Field>
                <Radio
                  label="Jetzt"
                  name="radioGroup"
                  value="current"
                  checked={searchRadio === 'current'}
                  onChange={e => {
                    setSearchRadio('current');
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Heute"
                  name="radioGroup"
                  value="tomorrow"
                  checked={searchRadio === 'tomorrow'}
                  onChange={e => {
                    setSearchRadio('tomorrow');
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Fünf Tage"
                  name="radioGroup"
                  value="fiveday"
                  checked={searchRadio === 'fiveday'}
                  onChange={e => {
                    setSearchRadio('fiveday');
                  }}
                />
              </Form.Field>
              <div className="flex-item-4">
                <Button
                  className="flex-item-4"
                  style={{maxWidth: '150px', marginLeft: '25px'}}
                  content="suchen"
                  primary
                  onClick={e => {
                    e.preventDefault();
                    findLocation();
                  }}
                />
              </div>
            </Form>
          </div>
        </div>
        <weatherStates.RenderModal
          {...weatherStates.modal}
          citysState={weatherStates.citysState}
        />
      </MainContainer>
    </React.Fragment>
  );
}
