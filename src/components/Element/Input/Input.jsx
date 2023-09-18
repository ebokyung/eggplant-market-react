import React, { useState } from 'react';
import './Input.scss';

export function Input(props) {
  const { inputid, label, type, placeholder, required, onChange, errorText, ...other } = props;
  const [inpValue, setInpValue] = useState('');

  return (
    <fieldset className="fieldset">
      <label htmlFor={inputid}>{label}</label>
      <input
        type={type || 'text'}
        id={inputid}
        className={errorText ? 'error' : null}
        placeholder={placeholder}
        required={required}
        onChange={e => setInpValue(e.target.value)}
        value={inpValue}
        {...other}
      />
      {errorText && <strong className="error-msg">*{errorText}</strong>}
    </fieldset>
  );
}
