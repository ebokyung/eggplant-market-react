import React, { useEffect, useState, useRef } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import '../style/Posting.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import Header from '../../../components/Element/Header/Header';
import { ProfileImg } from '../../../components/Element/User/ProfileImg';
import { TextArea } from '../components/TextArea';
import { ImageArea } from '../components/ImageArea';
import { postingAPI, postPostImgAPI, getPostAPI, putPostAPI, getUserAPI } from '../api/index';
import { storage } from '../../../utils/storage';
import { imgReg } from '../../../libs/constant/regex';
import uploadIcon from '../../../assets/icon/upload-file.svg';

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

  const onSubmit = async e => {
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

  // 데이터 처음 불러오기
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

  return (
    <>
      {isLoading ? (
        <Header page="upload">
          <Skeleton width={90} height={30} />
        </Header>
      ) : (
        <Header page="upload" btnDisabled={btnDisabled} formName="form-posting" />
      )}

      {isLoading ? (
        <main className="main-posting">
          <div className="profile-img user">
            <Skeleton style={{ display: 'block', height: '100%' }} />
          </div>
          <form action="" className="posting-form">
            <Skeleton className="textarea" height="150px" />

            <ul className="upload-imgs-list">
              <li>
                <Skeleton className="posting-img-cover" style={{ boxShadow: 'none' }} />
              </li>
            </ul>
            <label className="input-file-btn" htmlFor="input-file">
              <img id="image-upload-btn" src={uploadIcon} alt="" />
              <input type="file" id="input-file" accept="image/*" multiple />
            </label>
          </form>
        </main>
      ) : (
        <main className="main-posting">
          <ProfileImg profileImg={userImg} category="post" />
          <form id="form-posting" onSubmit={e => onSubmit(e)} ref={formRef} className="posting-form" action="">
            <TextArea initialValue={initialText} setIsTextError={setIsTextError} />
            <ImageArea imgData={imgData} setImgData={setImgData} />
          </form>
        </main>
      )}
    </>
  );
}
