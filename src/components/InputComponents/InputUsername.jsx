import React from 'react';
import { Input } from '../Element/Input';

export function InputUsername({ error, seterror, initialValue = '' }) {
  const userNameProps = {
    name: 'username',
    inputId: 'username',
    label: '사용자 이름',
    placeholder: '2~10자 이내여야 합니다.',
    required: true,
    minLength: '2',
    maxLength: '10',
    error,
    initialValue,
    onBlur: e => {
      const valid = e.target.validity;
      if (!valid.valueMissing) {
        if (valid.tooShort) {
          seterror({
            isError: true,
            errorText: '2~10자 이내여야 합니다.',
          });
        } else {
          seterror({
            isError: false,
            errorText: '',
          });
        }
      } else {
        seterror({
          isError: true,
          errorText: '',
        });
      }
    },
  };
  return <Input {...userNameProps} />;
}
