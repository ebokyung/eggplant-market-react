import React from 'react';
import './Input.scss';

function Input(props) {
  const { inputid, label, type, className, placeholder, required, onChange } = props;

  return (
    <>
      <label htmlFor={inputid}>{label}</label>
      <input type={type || 'text'} id={inputid} className={className} placeholder={placeholder} required={required} onChange={onChange} />
    </>
  );
}

export default Input;
