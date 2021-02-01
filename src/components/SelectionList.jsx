import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER ANIMATED ICON
 * @param {Array} data list data
 * @param {Number} index active item index overwrite
 * @param {Function} onSelect function to execute onSelect
 */
export default function SelectionList({data, index, onSelect}) {
  SelectionList.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  };

  const [active, setActive] = useState(index);

  return (
    <>
      <ul className="py-2xl w-100">
        {data.map((city, index) => {
          return (
            <li key={data.city} className={active === index ? 'active' : ''}>
              <button
                className="btn-ghost"
                onClick={e => {
                  e.preventDefault();
                  setActive(index);
                  onSelect(index);
                }}
              >
                {city.city}&nbsp;
                {city.plz}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
