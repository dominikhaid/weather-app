import React, {useState} from 'react';
import PropTypes from 'prop-types';
import WeatherModal from '@/components/WeatherModal';
import {useRouter} from 'next/router';
import fake_city_data from '@/data/city';

export default function CitySearch({
  searchRadio,
  citys,
  updateCitys,
  debug,
  updateRequestState,
}) {
  CitySearch.propTypes = {
    debug: PropTypes.bool,
    updateRequestState: PropTypes.func,
    searchRadio: PropTypes.string,
    citys: PropTypes.object,
    updateCitys: PropTypes.func,
  };

  const router = useRouter();
  const [searchText, setSearchText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResult] = useState([]);

  //NOTE WE NEED TO GET OUR HOMETOWN AS DEFAULT INPUT TEXT
  if (
    process.browser &&
    searchText === false &&
    localStorage.home &&
    window.location.pathname === '/app/weather-app/settings'
  )
    setSearchText(JSON.parse(localStorage.home).city);

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
      setIsLoading(false);

      setResult(
        Object.values(citys).map(city => {
          if (new RegExp(e.value, 'i').test(city.city))
            return {title: city.city};
          return false;
        }),
      );
    }, 300);
  };

  const handleResultSelect = e => {
    setIsLoading(true);
    setSearchText(e.value);
    setTimeout(() => {
      setIsLoading(false);

      setResult(
        Object.values(citys).map(city => {
          if (new RegExp(e.value, 'i').test(city.city))
            return {title: city.city};
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
        newCity.weatherView = searchRadio;
        return newCity;
      });

      setModal({
        state: true,
        data: cityList,
        header: 'Matches',
        des: 'Auswahl:',
      });
      return true;
    };

    let url;
    if (!searchText && !searchRadio) return;
    if (
      !new RegExp(
        /^([a-zA-Z\u0080-\u024F]+(?:. |-| |))*[a-zA-Z\u0080-\u024F]|\d{5}(?:-?\d{4})*$/,
      ).test(searchText)
    )
      return;

    if (new RegExp(/\d{5}(?:-?\d{4})?/i).test(searchText))
      url = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${searchText}&language=de&details=false`;
    if (!new RegExp(/\d{5}(?:-?\d{4})?/i).test(searchText))
      url = `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=8wLXgmovDvbNRzsyvwoE5VxdoGZZKAil&q=${searchText}&language=de&details=false`;

    let dup = Object.values(citys).filter(
      e =>
        e.city.toLowerCase() === searchText.toLowerCase() ||
        e.plz === searchText,
    );

    if (debug) dup = fake_city_data;

    if (dup && dup.length > 0) openCityModal(dup);
    if (dup && dup.length > 0) return;

    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        data = data.length < 1 ? [data] : data;
        openCityModal(data);
        updateRequestState();
      })
      .catch(() => {
        router.push('/limit');
        return;
      });
  };

  return (
    <React.Fragment>
      <fieldset>
        <input
          type="text"
          onChange={e => handleSearchChange(e.target)}
          value={searchText ? searchText : ''}
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
            <li key={city.title}>
              <a href="/" onClick={e => handleResultSelect(e.target)}>
                {city.title}
              </a>
            </li>
          );
        })}
      </ul>
      <WeatherModal
        {...modal}
        {...updateCitys}
        onClose={() =>
          setModal({
            state: false,
          })
        }
      />
    </React.Fragment>
  );
}
