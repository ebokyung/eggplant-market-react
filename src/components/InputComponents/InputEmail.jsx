import React from 'react';
import { Input } from '../Element/Input';

export function InputEmail({ error, seterror }) {
  const emailProps = {
    name: 'email',
    inputId: 'email',
    label: '이메일',
    type: 'email',
    placeholder: '이메일 주소를 입력해 주세요',
    required: true,
    error,
    initialValue: '',
    onBlur: e => {
      const valid = e.target.validity;
      if (!valid.valueMissing) {
        if (valid.typeMismatch) {
          seterror({
            isError: true,
            errorText: '유효하지 않은 형식',
          });
        } else {
          seterror({
            isError: false,
            errorText: '사용 가능한 이메일 입니다.',
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

  return <Input {...emailProps} />;
}
