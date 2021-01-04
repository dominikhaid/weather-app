import React, {useState} from 'react';
import WeatherModal from '../components/WeatherModal';
import {useRouter} from 'next/router';

export default function CitySearch({searchRadio, appState}) {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResult] = useState([]);

  const [modal, setModal] = useState({
    state: false,
    data: [],
    header: 'Matches',
    des: 'Auswahl:',
  });

  const handleSearchChange = e => {
    setIsLoading(true);
    setSearchText(e.value);
    setTimeout(() => {
      const re = new RegExp(e.value, 'i');
      setIsLoading(false);

      setResult(
        appState.citysState.map(city => {
          if (re.test(city.city)) return {title: city.city};
          return false;
        }),
      );
    }, 300);
  };

  searchRadio = !searchRadio ? 'home' : searchRadio;

  /**
   * REQUEST FROM SEARCHBOX
   */
  const findLocation = () => {
    const openCityModal = data => {
      let cityList = data.map(element => {
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

      setModal({
        state: true,
        data: cityList,
        header: 'Matches',
        des: 'Auswahl:',
      });
    };

    if (!searchText && !searchRadio) {
      return;
    }

    let dup = appState.citysState.filter(
      e =>
        e.city.toLowerCase() === searchText.toLowerCase() ||
        e.plz === searchText,
    );

    // NOTE FAKE DATA TO SKIP ACCUWEATHER API REQUEST

    dup = [
      {
        Version: 1,
        Key: '168715',
        Type: 'City',
        Rank: 43,
        LocalizedName: 'Darmstadt',
        Country: {ID: 'DE', LocalizedName: 'Deutschland'},
        AdministrativeArea: {ID: 'HE', LocalizedName: 'Hessen'},
      },
    ];

    if (dup && dup.length > 0) openCityModal(dup);

    if (dup && dup.length < 1) {
      let url;

      if (searchText.replace(/\d{5}(?:-?\d{4})?/i, '') === '') {
        url = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${searchText}&language=de&details=false`;
      } else if (
        searchText.replace(
          /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/g,
          '',
        ) !== ''
      ) {
        return;
      } else {
        url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${searchText}&language=de&details=false`;
      }

      fetch(url, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(data => {
          data = data.length < 1 ? [data] : data;
          openCityModal(data);
          appState.updateRequestState();
        })
        .catch(error => {
          router.push('/limit');
          return;
        });
    }
  };

  return (
    <React.Fragment>
      <fieldset>
        <input
          type="text"
          onChange={e => handleSearchChange(e.target)}
          value={searchText}
          placeholder="City / Zip"
        />
        <button
          className="btn-primary"
          onClick={e => {
            e.preventDefault();
            findLocation();
          }}
        >
          Suchen
        </button>
      </fieldset>
      <ul>
        {results.map(city => {
          return (
            <li key={city.title} onClick={e => handleResultSelect(e.target)}>
              {city.title}
            </li>
          );
        })}
      </ul>
      <WeatherModal
        {...modal}
        onClose={() =>
          setModal({
            state: false,
          })
        }
      />
    </React.Fragment>
  );
}
