import React, {useState} from 'react';
import PropTypes, {bool} from 'prop-types';

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

  if (hidden || data.length > 1) return <></>;
  if (isLoading) return <p>...</p>;
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.title}>
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
