import React, {useState} from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

/**
 * @desc NOTE RENDER ANIMATED ICON
 * @param {Array} data list data
 * @param {Number} index active item index overwrite
 * @param {Function} onSelect function to execute onSelect
 */
export default function SelectionList({data, index, onSelect}) {
  SelectionList.propTypes = {
    data: PropTypes.array,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  };

  const [active, setActive] = useState(index);

  return (
    <>
      <ul className="w-100">
        {data.map((city, ind) => {
          return (
            <li key={ind} className={active === ind ? 'active' : ''}>
              <button
                className="btn-ghost"
                onClick={e => {
                  e.preventDefault();
                  setActive(ind);
                  onSelect(ind);
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
