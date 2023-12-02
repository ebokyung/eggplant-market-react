import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/Posting.scss';
import Header from '../../../components/Element/Header/Header';
import { ProfileImg } from '../../../components/Element/User/ProfileImg';
import { TextArea } from '../components/TextArea';
import { ImageArea } from '../components/ImageArea';
import { postingAPI, postPostImgAPI, getPostAPI, putPostAPI, getUserAPI } from '../api/index';
import { storage } from '../../../utils/storage';
import { imgReg } from '../../../libs/constant/regex';
import SkeletonPosting from '../components/SkeletonPosting';
import { Meta } from '../../../libs/Meta';

export default function Posting() {
  const formRef = useRef();
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get('postId');
  const navigate = useNavigate();

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isTextError, setIsTextError] = useState(true);

  const [userImg, setUserImg] = useState('');
  const [initialText, setInitialText] = useState('');
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    (async () => {
      if (postId) {
        const { author, content, image } = await getPostAPI(postId);
        setUserImg(author.image);
        setInitialText(content);
        setImgData(image.split(imgReg).filter(img => !!img));
      } else {
        const {
          user: { image },
        } = await getUserAPI();
        setUserImg(image);
      }
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    isTextError && imgData.length === 0 ? setBtnDisabled(true) : setBtnDisabled(false);
  }, [isTextError, imgData]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (isPosting) {
      return;
    }

    setIsPosting(true);

    const { textarea } = formRef.current.elements;

    const postImgData = await Promise.all(
      imgData.map(async fileItem => {
        const data = fileItem instanceof File ? await postPostImgAPI(fileItem) : fileItem;
        return data;
      }),
    );
    const content = {
      post: {
        content: textarea.value,
        image: postImgData.join(' '),
      },
    };
    postId ? await putPostAPI(postId, content) : await postingAPI(content);

    setIsPosting(false);
    navigate(`/profile?accountName=${storage.getAccountName()}`);
  };

  if (isLoading) return <SkeletonPosting />;

  return (
    <>
      <Meta title={`게시글 ${postId ? '수정' : '작성'}`} />
      <Header page="upload" btnDisabled={btnDisabled} formName="form-posting" />
      <main className="main-posting">
        <ProfileImg profileImg={userImg} category="post" />
        <form id="form-posting" onSubmit={handleSubmit} ref={formRef} className="posting-form" action="">
          <TextArea initialValue={initialText} setIsTextError={setIsTextError} />
          <ImageArea imgData={imgData} setImgData={setImgData} />
        </form>
      </main>
    </>
  );
}
