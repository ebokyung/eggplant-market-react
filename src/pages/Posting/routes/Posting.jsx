import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/Posting.scss';
import imageCompression from 'browser-image-compression';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { TextArea } from '../components/TextArea';
import { ImageArea } from '../components/ImageArea';
import { postingAPI, postPostImgAPI, getPostAPI, putPostAPI, getUserAPI } from '../api/index';
import { storage } from '../../../utils/storage';
import { imgReg } from '../../../libs/constant/regex';
import SkeletonPosting from '../components/SkeletonPosting';
import { Meta } from '../../../libs/Meta';
import { ProfileImage } from '../../../components/Element/User';

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

    const options = {
      maxSizeMB: 10,
      maxWidthOrHeight: 600,
    };

    const compressedBlob = await Promise.all(
      imgData.map(async fileItem => {
        const data = fileItem instanceof File ? await imageCompression(fileItem, options) : fileItem;
        return data;
      }),
    );

    const compressedFile = compressedBlob.map(fileItem => {
      const data = fileItem instanceof Blob ? new File([fileItem], fileItem.name, { type: fileItem.type }) : fileItem;
      return data;
    });

    setIsPosting(true);

    const { textarea } = formRef.current.elements;

    const postImgData = await Promise.all(
      compressedFile.map(async fileItem => {
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

  return (
    <>
      <Meta title={`게시글 ${postId ? '수정' : '작성'}`} />
      {isLoading ? (
        <SkeletonPosting />
      ) : (
        <>
          <Header page="upload" btnDisabled={btnDisabled} formName="form-posting" />
          <main className="main-posting">
            <div className="l_main-posting">
              <ProfileImage src={userImg} size="Regular" />
              <form id="form-posting" onSubmit={handleSubmit} ref={formRef} className="posting-form" action="">
                <TextArea initialValue={initialText} setIsTextError={setIsTextError} />
                <ImageArea imgData={imgData} setImgData={setImgData} />
              </form>
            </div>
          </main>
        </>
      )}
      <Navbar />
    </>
  );
}
