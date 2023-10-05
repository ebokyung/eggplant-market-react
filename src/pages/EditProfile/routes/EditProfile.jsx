import React, { useEffect, useRef, useState } from 'react';

import Header from '../../../components/Element/Header/Header';
import { Information } from '../../../components/Information';

import '../style/EditProfile.scss';

import { userProfile } from '../../../libs/dummy/userData';

export function EditProfile() {
  const [isCompleteDisabled, setIsCompleteDisabled] = useState(false);
  // dummy
  const { profile } = userProfile;
  // formRef
  const formRef = useRef();

  // 데이터
  const [data, setData] = useState({
    username: profile.username,
    accountname: profile.accountname,
    intro: profile.intro,
    image: profile.image,
  });

  function handleSubmit() {
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

  // 데이터 변경 확인용
  useEffect(() => {
    console.log('username', data.username);
    console.log('accountname', data.accountname);
    console.log('image', data.image);
    console.log('intro', data.intro);
  }, [data]);

  return (
    <>
      <Header page="upload" btnText="저장" btnDisabled={isCompleteDisabled} onClick={() => handleSubmit()} />
      <main className="main-profile-edit">
        <form ref={formRef} action="">
          <Information initialData={profile} setIsCompleteDisabled={setIsCompleteDisabled} />
        </form>
      </main>
    </>
  );
}
