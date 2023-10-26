import React from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from '../Element/Input';
import { defaultAxios } from '../../libs/api/axios';

async function validateAccountName(accountname) {
  try {
    const res = await defaultAxios.post(`/user/accountnamevalid`, {
      user: {
        accountname,
      },
    });
    return res.data.message;
  } catch (e) {
    return e;
  }
}

export function InputAcctname({ error, seterror, initialValue = '' }) {
  const isSignUp = useLocation().pathname.includes('sign-up');
  const acctProps = {
    name: 'accountname',
    inputId: 'accountname',
    label: '계정 ID',
    placeholder: '영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.',
    required: true,
    readOnly: !isSignUp,
    error,
    pattern: '^[0-9a-zA-Z._]*$',
    initialValue,
    onBlur: e => {
      if (isSignUp) {
        const valid = e.target.validity;
        if (!valid.valueMissing) {
          if (valid.patternMismatch) {
            seterror({
              isError: true,
              errorText: '영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.',
            });
          } else {
            // 유효성 검사
            (async () => {
              const resMsg = await validateAccountName(e.target.value);
              if (resMsg === '사용 가능한 계정ID 입니다.') {
                seterror({
                  isError: false,
                  errorText: resMsg,
                });
              } else if (resMsg === '이미 가입된 계정ID 입니다.') {
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
      }
    },
  };
  return <Input {...acctProps} />;
}
