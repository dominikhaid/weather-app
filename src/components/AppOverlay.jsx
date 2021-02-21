import React from 'react';
import Check from 'public/images/svg/check-circle.svg';
import SelectionList from './SelectionList';
import DynamicIcon from './DynamicIcon';
import ConfirmButtons from './ConfirmButtons';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER MODAL WITH SELECTION LIST
 * @param {Boolen} state show modal or not
 * @param {Number} active active list item
 * @param {Object} data list items
 * @param {String} header modal caption
 * @param {String} des modal sub caption
 * @param {Function} onConfirm execute on confirm
 * @param {Function} onChange execute setModal acitve item
 * @param {Function} onClose execute onClose
 */
export default function AppOverlay({
  state,
  active,
  data,
  header,
  des,
  onConfirm,
  onChange,
  onClose,
}) {
  AppOverlay.propTypes = {
    state: PropTypes.bool,
    active: PropTypes.number,
    data: PropTypes.array,
    header: PropTypes.string,
    des: PropTypes.string,
    onConfirm: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
  };

  if (!state) return <></>;

  return (
    <section id="app-city-select-overlay">
      <h3 className="flex-none w-100">{header}</h3>
      <p className="text-gray-darkest w-75 ">{des}</p>
      <SelectionList data={data} onSelect={onChange} />
      <ConfirmButtons
        ok="Ok"
        cancel="Abbrechen"
        onConfirm={onConfirm}
        disabled={Number.isNaN(Number(active))}
        onCancel={onClose}
      />
      <DynamicIcon
        animation="animate-up"
        active={!Number.isNaN(Number(active))}
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-25px',
          left: '-50px',
          width: '350px',
        }}
        Icon={Check}
      />
      <p style={{width: '100%', height: '50px'}}></p>
    </section>
  );
}
