import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER RADIOBUTTON GROUP
 * @param {Array} fields array of Radio fields to render
 */
export default function RadioGrp({fields}) {
  RadioGrp.propTypes = {
    fields: PropTypes.array,
  };

  return (
    <fieldset style={{maxWidth: '200px', padding: '0'}}>
      {fields.map(item => {
        return (
          <>
            <label htmlFor={item.id}>{item.label}</label>
            <input
              type="radio"
              id={item.id}
              name={item.goup}
              value={item.value}
              checked={item.checked}
              onChange={e => item.onChange(e)}
            />
          </>
        );
      })}
    </fieldset>
  );
}
