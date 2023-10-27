import React from 'react';
import { defaultAxios } from '../../libs/api/axios';
import { Input } from '../Element/Input';

async function validateEmail(email) {
  try {
    const res = await defaultAxios.post(`/user/emailvalid`, {
      user: {
        email,
      },
    });
    return res.data.message;
  } catch (e) {
    return e;
  }
}

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
        const emailRegEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[a-zA-Z]+([-_.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!emailRegEx.test(e.target.value)) {
          seterror({
            isError: true,
            errorText: '유효하지 않은 형식입니다.',
          });
        } else {
          // 유효성 검사
          (async () => {
            const resMsg = await validateEmail(e.target.value);
            if (resMsg === '사용 가능한 이메일 입니다.') {
              seterror({
                isError: false,
                errorText: resMsg,
              });
            } else if (resMsg === '이미 가입된 이메일 주소 입니다.') {
              seterror({
                isError: true,
                errorText: resMsg,
              });
            }
          })();
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
