import React, { useState, useEffect } from 'react';
import { Button } from '../../../components/Element/Buttons';
import { Input, ErrorMsg } from '../../../components/Element/Input';

const apiResult = false;

export function LoginForm() {
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const validateEmail = email => {
    if (emailRegEx.test(email)) {
      setEmailValue(email);
      setIsEmailValid(true);
    } else setIsEmailValid(false);
  };

  useEffect(() => {
    setIsDisabled(!(emailValue && passwordValue && !isError));
  }, [emailValue, passwordValue, isError]);

  const submitLoginForm = () => {
    // api 연결
    console.log('로그인 폼 제출');
    if (!apiResult) setIsError(true);
  };

  return (
    <form>
      <Input
        inputid="email"
        label="이메일"
        type="email"
        className={!isEmailValid || isError ? 'error' : undefined}
        required
        onChange={e => {
          validateEmail(e.target.value);
        }}
      />
      {!isEmailValid && <ErrorMsg errorText="이메일 양식에 맞게 아이디를 입력해주세요." />}
      <Input
        inputid="pw"
        label="비밀번호"
        type="password"
        className={isError ? 'error' : undefined}
        required
        onChange={e => {
          setPasswordValue(e.target.value);
        }}
      />
      {isError && <ErrorMsg errorText="이메일 또는 비밀번호가 일치하지 않습니다." />}
      <Button className="size-l btn-login" disabled={isDisabled} onClick={() => submitLoginForm()}>
        로그인
      </Button>
    </form>
  );
}
