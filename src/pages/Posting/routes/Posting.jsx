import React, { useEffect, useState, useRef } from 'react';
import '../style/Posting.scss';
import { useSearchParams } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import { ProfileImg } from '../../../components/Element/User/ProfileImg';
import { TextArea } from '../components/TextArea';
import { ImageArea } from '../components/ImageArea';
import { singlePost } from '../../../libs/dummy';

export function Posting() {
  const formRef = useRef();
  const [searchParams] = useSearchParams();

  const [isError, setIsError] = useState(true);

  const [initialText, setInitialText] = useState('');
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = () => {
    const { textarea } = formRef.current.elements;

    const postImgData = imgData.map(
      // img 서버에 올리고 filename 가져오기
      fileItem => (fileItem instanceof File ? `${fileItem.name}의 filename.jpg` : fileItem),
      // lodash isEqual 로 파일 비교 가능?
      // 파일 비교 -> 같은 이미지가 여러장 올라오면 한장만 서버에 올리면 되니까?
    );
    const result = postImgData.join(`\n`);

    console.log(textarea.value);
    console.log(result);
  };

  // 데이터 처음 불러오기
  useEffect(() => {
    if (searchParams.get('id')) {
      const { post } = singlePost;
      setInitialText(post.content);
      setImgData(post.image.split(','));
    }
    setIsLoading(false);
  }, []);

  // 제출버튼 disabled
  useEffect(() => {
    if (formRef.current) {
      const { textarea } = formRef.current.elements;
      if (textarea.value !== '' || imgData.length !== 0) {
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  }, [formRef, imgData]);

  return isLoading ? (
    <>로딩중</>
  ) : (
    <>
      <Header page="upload" btnDisabled={isError} onClick={onSubmit} />
      <main className="posting-main">
        <ProfileImg profileImg="" category="post" />
        <form ref={formRef} className="posting-form" action="">
          <TextArea initialValue={initialText} />
          <ImageArea imgData={imgData} setImgData={setImgData} />
        </form>
      </main>
    </>
  );
}
