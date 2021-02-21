import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppOverlay from 'components/AppOverlay';
import ResultBox from './ResultBox';
import Searchfield from './SearchField';
import {useRouter} from 'next/router';
import fake_city_data from 'data/city';

/**
 * @desc NOTE RENDER SEARCHFIELD WITH A MODAL DISPLAYING THE RESULT
 * @param {String} ok confrim button text
 * @param {String} cancel cancel button text
 * @param {Function} onConfirm confiorm function
 * @param {Function} onCancel cancel function
 * @param {Boolen} disabled disabled state
 */
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
  const [results, setResult] = useState(false);
  const [modal, setModal] = useState({
    state: false,
    data: [],
    header: 'Matches',
  });
  const [active, setActive] = useState();

  //NOTE WE NEED TO GET OUR HOMETOWN AS DEFAULT INPUT TEXT
  if (
    process.browser &&
    searchText === false &&
    localStorage.home &&
    window.location.pathname === '/app/weather-app/settings'
  )
    setSearchText(JSON.parse(localStorage.home).city);

  const handleSearchChange = e => {
    setIsLoading(true);
    setSearchText(e.value);
    setTimeout(() => {
      setIsLoading(false);

      let filter_results = Object.values(citys).filter(city =>
        new RegExp(e.value, 'i').test(city.city),
      );

      if (
        e.value.replace(/\s/, '') === '' ||
        Object.keys(citys).length < 1 ||
        !filter_results ||
        filter_results.length < 1
      )
        return setResult(false);

      setResult(
        filter_results.map(city => {
          return {title: city.city};
        }),
      );
    }, 300);
  };

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

      if (cityList.length === 1 && cityList[0].city === undefined) {
        setModal({
          state: true,
          data: [],
          header: 'No Match',
          des:
            'Leider haben wir keine passenden Ergebnisse zu deiner Eingabe gefunden !',
        });
        return false;
      }

      setModal({
        state: true,
        data: cityList,
        header: 'Matches',
      });
      return true;
    };

    let url;

    if (!searchText || !searchRadio) return;
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

    if (debug && dup.length < 1)
      dup = JSON.parse(JSON.stringify(fake_city_data));
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
      <Searchfield
        value={searchText ? searchText : ''}
        onChange={handleSearchChange}
        placeholder="City / Zip"
        title="Suchen"
        onClick={findLocation}
      />
      <ResultBox
        data={results ? results : []}
        isLoading={isLoading}
        onSelect={setSearchText}
      />
      <AppOverlay
        {...modal}
        active={active}
        onConfirm={e => {
          e.preventDefault(e);
          const menu = document.getElementById('__next');
          menu && menu.classList.remove('menu');

          if (
            modal.data[active].weatherView === 'home' &&
            modal.data[active].city &&
            modal.data[active].Key
          ) {
            localStorage.home = JSON.stringify({
              city: modal.data[active].city,
              Key: modal.data[active].Key,
              hometown: true,
            });
            router.push('/');
          } else {
            updateCitys({...modal.data[active], activeCity: true});
            router.push('/weather');
          }
          setModal({
            state: false,
          });
        }}
        onChange={setActive}
        updateCitys={updateCitys}
        onClose={() =>
          setModal({
            state: false,
          })
        }
      />
    </React.Fragment>
  );
}
