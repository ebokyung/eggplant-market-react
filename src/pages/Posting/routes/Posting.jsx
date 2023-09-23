import React, { useRef } from 'react';
import '../style/Posting.scss';
import Header from '../../../components/Element/Header/Header';
import { ProfileImg } from '../../../components/Element/User/ProfileImg';
import { TextArea } from '../components/TextArea';

import { ImageArea } from '../components/ImageArea';

export function Posting() {
  const formRef = useRef();

  const onSubmit = () => {
    const { textarea, images } = formRef.current.elements;
    console.log(textarea.value);
    console.log(images.files);
  };

  return (
    <>
      <Header page="upload" btnDisabled={false} onClick={onSubmit} />
      <main className="posting-main">
        <ProfileImg profileImg="" category="post" />
        <form ref={formRef} className="posting-form" action="">
          <TextArea />
          <ImageArea />
        </form>
      </main>
    </>
  );
}
