import React from 'react';
import './Input.scss';

export function Input(props) {
  const { inputid, label, type, className, placeholder, required, onChange, ...other } = props;

  return (
    <>
      <label htmlFor={inputid}>{label}</label>
      <input type={type || 'text'} id={inputid} className={className} placeholder={placeholder} required={required} onChange={onChange} {...other} />
    </>
  );
}
