/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

import '../style/SignUp.scss';
import { Account } from '../components/Account';
import { Information } from '../../../components/Information';
import { Button } from '../../../components/Element/Buttons';

export function SignUp() {
  const [isNext, setIsNext] = useState(false);
  const [isCompleteDisabled, setIsCompleteDisabled] = useState(true);
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    accountname: '',
    intro: '',
    image: '',
  });

  const formRef = useRef();
  // const navigate = useNavigate();

  useEffect(() => {
    // const { email, password, accountname, username, intro, image } = formRef.current.elements;
    console.log(data);
  }, [data]);

  function handleNext() {
    const { email, password } = formRef.current.elements;
    const update = {
      ...data,
      email: email.value,
      password: password.value,
    };
    setIsNext(true);
    setData(update);
  }
  function handleComplete(e) {
    e.preventDefault();
    const { accountname, username, intro, image } = formRef.current.elements;
    const update = {
      ...data,
      accountname: accountname.value,
      username: username.value,
      intro: intro.value,
      image: image.value,
    };
    setData(update);
  }

  return (
    <>
      <header className="signup-header">
        {!isNext ? (
          <h1 className="signup-title">이메일로 회원가입</h1>
        ) : (
          <>
            <h1 className="signup-title">프로필 설정</h1>
            <p className="subtitle">나중에 언제든지 변경할 수 있습니다</p>
          </>
        )}
      </header>
      <main className="signup-main">
        <form ref={formRef} className="signup-form" action="">
          {!isNext ? <Account handleNext={handleNext} /> : <Information setIsCompleteDisabled={setIsCompleteDisabled} />}
          {isNext && (
            <Button className="size-l" onClick={e => handleComplete(e)} disabled={isCompleteDisabled}>
              감귤마켓 시작하기
            </Button>
          )}
        </form>
      </main>
    </>
  );
}
