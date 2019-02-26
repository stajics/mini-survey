import React from 'react';

const Button = ({ text, iconSrc, onClick }) => (
  <button className="button" onClick={onClick}>
    <img className="button__icon" src={iconSrc} alt="" />
    <label className="button__text text">{text}</label>
  </button>
);

export default Button;