import React, {useState} from 'react';
import PropTypes, {bool} from 'prop-types';
import uuid from 'react-uuid';

/**
 * @desc NOTE RENDER RESULT
 * @param {Array} data array of reults
 * @param {Boolen} isLoading isLoading..
 * @param {Function} onConfirm confiorm function
 * @param {Boolen} visible control visiblity
 * @param {Function} onSelect callback when select item
 */
export default function ResultBox({data, isLoading, visible, onSelect}) {
  ResultBox.propTypes = {
    data: PropTypes.array,
    isLoading: bool,
    visible: bool,
    onSelect: PropTypes.func,
  };
  const [hidden, setHidden] = useState(visible !== undefined ? visible : false);

  if (hidden || !data || data.length < 1) return <></>;
  if (isLoading) return <p>...</p>;
  return (
    <ul id="app-search-results">
      <li>Results:</li>
      {data.map(item => {
        return (
          <li key={uuid()}>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                setHidden(true);
                onSelect(item.title);
              }}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
