import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER INPUT FIELD WITH BUTTON
 * @param {String} title button title
 * @param {String} placeholder input placeholder text
 * @param {String} onClick button click
 * @param {Function} onChange input change event
 * @param {Function} value input value
 */
export default function SearchField({
  title,
  placeholder,
  onClick,
  onChange,
  value,
}) {
  SearchField.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  return (
    <fieldset>
      <input
        type="text"
        onChange={e => onChange(e.target)}
        value={value}
        placeholder={placeholder}
      />
      <button
        className="btn-primary"
        onClick={e => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {title}
      </button>
    </fieldset>
  );
}
