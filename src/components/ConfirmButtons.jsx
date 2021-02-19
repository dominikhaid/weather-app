import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER button group confirm
 * @param {String} ok confrim button text
 * @param {String} cancel cancel button text
 * @param {Function} onConfirm confiorm function
 * @param {Function} onCancel cancel function
 * @param {Boolen} disabled disabled state
 */
export default function ConfirmButtons({
  ok,
  cancel,
  onConfirm,
  onCancel,
  disabled,
}) {
  ConfirmButtons.propTypes = {
    ok: PropTypes.string,
    cancel: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    disabled: PropTypes.bool,
  };

  return (
    <div className="spaced mt-xs relative z-50">
      <button className="btn-secondary" onClick={e => onCancel(e)}>
        {cancel}
      </button>
      {disabled && (
        <button disabled={true} className="btn-success">
          {ok}
        </button>
      )}
      {!disabled && (
        <button onClick={e => onConfirm(e)} className="btn-success">
          {ok}
        </button>
      )}
    </div>
  );
}
