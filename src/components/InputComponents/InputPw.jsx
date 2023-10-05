import React from 'react';
import { Input } from '../Element/Input';

export function InputPw({ error, seterror }) {
  const passwordProps = {
    name: 'password',
    inputId: 'pw',
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 설정해 주세요',
    required: true,
    minLength: '6',
    error,
    initialValue: '',
    onBlur: e => {
      const valid = e.target.validity;
      if (!valid.valueMissing) {
        if (valid.tooShort) {
          seterror({
            isError: true,
            errorText: '비밀번호는 6자 이상이어야 합니다.',
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

  return <Input {...passwordProps} />;
}
