import React from 'react';
import PropTypes from 'prop-types';

/**
 * @desc NOTE RENDER ANIMATED ICON
 * @param {Boolen} active Display or not
 * @param {String} animation Animation class to use
 * @param {Object} Icon Icon to display
 * @param {Object} style Inline css style
 */
export default function DynamicIcon({active, animation, Icon, style}) {
  DynamicIcon.propTypes = {
    active: PropTypes.bool,
    animation: PropTypes.string,
    style: PropTypes.object,
    Icon: PropTypes.func,
  };

  if (!Icon || typeof Icon !== 'function') return <></>;
  if (active) return <Icon className={animation} style={style}></Icon>;
  return <></>;
}
