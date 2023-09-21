import React, { useState, forwardRef } from 'react';
import './Input.scss';

export const Input = forwardRef((props, ref) => {
  const { inputId, label, type, placeholder, required, errorState, defaultValue, ...other } = props;
  const [inpValue, setInpValue] = useState(defaultValue);

  return (
    <fieldset className="fieldset">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type || 'text'}
        id={inputId}
        className={errorState.isError ? 'error' : null}
        placeholder={placeholder}
        required={required}
        onChange={() => setInpValue(ref.current.value)}
        ref={ref}
        defaultValue={inpValue}
        {...other}
      />
      {errorState.isError && <strong className="error-msg">*{errorState.errorMsg}</strong>}
    </fieldset>
  );
});
