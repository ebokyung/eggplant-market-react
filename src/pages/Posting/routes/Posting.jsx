import React, { useRef, useState } from 'react';
import '../style/Posting.scss';
import Header from '../../../components/Element/Header/Header';
import { ProfileImg } from '../../../components/Element/User/ProfileImg';
import { TextArea } from '../components/TextArea';
import { ImageArea } from '../components/ImageArea';
import { singlePost } from '../../../libs/dummy';

function jsType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}

export function Posting() {
  const formRef = useRef();
  const initialData = singlePost.post.image.split(',');
  const [imgData, setImgData] = useState(initialData);

  const onSubmit = () => {
    const { textarea } = formRef.current.elements;
    console.log(textarea.value);

    const postImgData = imgData.map(fileItem => {
      // console.log(jsType(fileItem));
      if (jsType(fileItem) === 'File') {
        // img 서버에 올리고 filename 가져오기
        return `${fileItem.name}의 filename.jpg`;
      }
      return fileItem;
    });
    const result = postImgData.join(',');
    console.log(result);
  };

  return (
    <>
      <Header page="upload" btnDisabled={false} onClick={onSubmit} />
      <main className="posting-main">
        <ProfileImg profileImg="" category="post" />
        <form ref={formRef} className="posting-form" action="">
          <TextArea />
          <ImageArea initialData={initialData} imgData={imgData} setImgData={setImgData} />
        </form>
      </main>
    </>
  );
}
