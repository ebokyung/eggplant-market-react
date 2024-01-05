/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/SignUp.scss';
import { Account } from '../components/Account';
import { Information } from '../../../components/Information';
import { Button } from '../../../components/Element/Buttons';
import { postImageAPI } from '../../../libs/api/PostImage';
import { postSignUpAPI } from '../api';
import { Meta } from '../../../libs/Meta';

export default function SignUp() {
  const navigate = useNavigate();
  const [isNext, setIsNext] = useState(false);
  const [isCompleteDisabled, setIsCompleteDisabled] = useState(true);
  const formRef = useRef();
  const [data, setData] = useState({
    email: '',
    password: '',
    username: '',
    accountname: '',
    intro: '',
    image: '',
  });

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
  async function handleSignUp(e) {
    e.preventDefault();
    const { accountname, username, intro, image } = formRef.current.elements;

    let profileImgUrl = '';
    if (image.files[0]) {
      profileImgUrl = await postImageAPI(image.files[0]);
    }

    const update = {
      ...data,
      accountname: accountname.value,
      username: username.value,
      intro: intro.value,
      image: profileImgUrl,
    };
    setData(update);

    const result = await postSignUpAPI(update);
    if (result.status === 422 || result.message === '잘못된 접근입니다.') {
      console.log(result);
    }
    if (result.message === '회원가입 성공') {
      navigate('/login');
    }
  }

  return (
    <>
      <Meta title="회원가입" />
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
          {!isNext ? (
            <Account handleNext={handleNext} />
          ) : (
            <>
              <Information setIsCompleteDisabled={setIsCompleteDisabled} />
              <Button className="size-l" onClick={e => handleSignUp(e)} disabled={isCompleteDisabled}>
                가지마켓 시작하기
              </Button>
            </>
          )}
        </form>
      </main>
    </>
  );
}
