import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/Element/Buttons';
import { Input, ErrorMsg } from '../../../components/Element/Input';

import '../style/SignUp.scss';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState('');
  // const [validEmail, setValidEmail] = useState(false);
  const [pw, setPw] = useState('');
  const [pwError, setPwError] = useState(false);
  // const [validPw, setValidPw] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmailError(false);
    setPwError(false);
    setEmailErrorText('이메일 오류');
  }, []);

  const emailProps = {
    inputId: 'email',
    label: '이메일',
    type: 'email',
    hasError: emailError,
    placeholder: '이메일 주소를 입력해 주세요',
    required: true,
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
  };

  const passwordProps = {
    inputId: 'pw',
    label: '비밀번호',
    type: 'password',
    hasError: pwError,
    placeholder: '비밀번호를 설정해 주세요',
    required: true,
    minLength: '6',
    value: pw,
    onChange: e => {
      setPw(e.target.value);
    },
  };

  return (
    <>
      <header className="signup-header">
        <h1 className="signup-title">이메일로 회원가입</h1>
      </header>
      <main className="signup-main">
        <form className="signup-form" action="">
          <fieldset>
            <Input {...emailProps} />
            {emailError && <ErrorMsg errorText={emailErrorText} />}
          </fieldset>
          <fieldset>
            <Input {...passwordProps} />
            {pwError && <ErrorMsg errorText="*비밀번호는 6자 이상이어야 합니다." />}
          </fieldset>
          <Button className="size-l" onClick={() => navigate('/sign-up-profile')}>
            다음
          </Button>
        </form>
      </main>
    </>
  );
}
