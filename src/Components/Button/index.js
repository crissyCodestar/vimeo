import React, { Component } from 'react';
import classNames from 'classnames';
import './button.css';

export const TYPES = {
  OUTLINE: 'outline',
  WARNING: 'warning',

};

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

export const MI = {
  MATERIAL_ICON: 'material-icon'
}

export const Button = ({type, onClick, text, colorValue, size, color, link}) => (
  <a  href={link} target='blank'>
    <button

      type={type}
      onClick={onClick}
      style={{backgroundColor: color}}
       className={classNames(
        'btn',
          MI.MATERIAL_ICON,
         colorValue || TYPES.OUTLINE ,
         size || SIZES.MEDIUM,
       )}
    >
    {text}


    </button>
  </a>
);
