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
export default function WeatherModal({
  state,
  active,
  data,
  header,
  des,
  onConfirm,
  onChange,
  onClose,
}) {
  WeatherModal.propTypes = {
    state: PropTypes.bool,
    active: PropTypes.number,
    data: PropTypes.object,
    header: PropTypes.string,
    des: PropTypes.string,
    onConfirm: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
  };

  if (!state) return <></>;

  return (
    <section style={{top: '0', left: '0'}} id="citySelector">
      <h3 className="flex-none">{header}</h3>
      <h4 className="flex-none">{des}</h4>
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
          left: '180px',
          width: '350px',
        }}
        Icon={Check}
      />
    </section>
  );
}
