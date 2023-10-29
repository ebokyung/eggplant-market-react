import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Element/Buttons';
import { Input } from '../../../components/Element/Input';
import { signInApi } from '../api';

export function LoginForm() {
  const navigate = useNavigate();
  const formRef = useRef();
  const [emailError, setEmailError] = useState({
    isError: true,
    errorText: '',
  });
  const [pwError, setPwError] = useState({
    isError: true,
    errorText: '',
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [isShowPw, setIsShowPw] = useState(false);

  const validateEmail = email => {
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    if (!email.validity.valueMissing && emailRegEx.test(email.value)) {
      setEmailError({ isError: false, errorText: '' });
    } else setEmailError({ isError: true, errorText: '이메일 양식에 맞게 아이디를 입력해주세요.' });
  };

  const validatePw = pw => {
    if (!pw.validity.valueMissing) setPwError({ isError: false, errorText: '' });
    else setPwError({ isError: true, errorText: '' });
  };

  useEffect(() => {
    setIsBtnDisabled(!(!emailError.isError && !pwError.isError));
  }, [emailError, pwError]);

  const handlePwShow = () => {
    setIsShowPw(prev => !prev);
  };

  const submitLoginForm = async e => {
    e.preventDefault();
    const { email, password } = formRef.current.elements;
    const data = {
      email: email.value,
      password: password.value,
    };
    const response = await signInApi(data);
    // api 연결
    if (response.status === 422) setPwError({ isError: false, errorText: response.message });
    if (response.status === 200) navigate('/home');
  };

  return (
    <form onSubmit={submitLoginForm} ref={formRef}>
      <Input inputId="email" name="email" label="이메일" type="email" required onBlur={e => validateEmail(e.target)} error={emailError} />
      <Input inputId="pw" name="password" label="비밀번호" type={isShowPw ? 'text' : 'password'} required onBlur={e => validatePw(e.target)} error={pwError} />

      <button className="show-pw" type="button" onClick={handlePwShow}>
        {isShowPw ? 'HIDE' : 'SHOW'}
      </button>
      <Button type="submit" className="size-l btn-login" disabled={isBtnDisabled}>
        로그인
      </Button>
    </form>
  );
}
