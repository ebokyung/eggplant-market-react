import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/EditProfile.scss';
import imageCompression from 'browser-image-compression';
import Header from '../../../components/Element/Header/Header';
import { Information } from '../../../components/Information';
import { storage } from '../../../utils/storage';
import { postImageAPI } from '../../../libs/api/PostImage';
import { getMyProfileAPI, putEditProfileAPI } from '../api';
import SkeletonEditProfile from '../components/SkeletonEditProfile';
import { Meta } from '../../../libs/Meta';
import Navbar from '../../../components/Element/Navbar/Navbar';

export default function EditProfile() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isCompleteDisabled, setIsCompleteDisabled] = useState(false);
  const formRef = useRef();
  const [data, setData] = useState({
    username: '',
    accountname: '',
    intro: '',
    image: '',
  });

  useEffect(() => {
    (async () => {
      const response = await getMyProfileAPI();
      const { username, accountname, intro, image } = response;
      setData({ username, accountname, intro, image });
      setIsLoading(() => false);
    })();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const { accountname, username, intro, image } = formRef.current.elements;

    let profileImgUrl = data.image;

    if (image.files[0]) {
      const options = {
        maxSizeMB: 10,
        maxWidthOrHeight: 200,
      };

      const imgBlob = await imageCompression(image.files[0], options);
      const imgFile = new File([imgBlob], imgBlob.name, { type: imgBlob.type });

      profileImgUrl = await postImageAPI(imgFile);
    }

    const update = {
      ...data,
      accountname: accountname.value,
      username: username.value,
      intro: intro.value,
      image: profileImgUrl,
    };
    setData(update);

    const response = await putEditProfileAPI(update);
    if (response.status !== 422) {
      navigate(`/profile?accountName=${storage.getAccountName()}`);
    }
  }

  if (isLoading) return <SkeletonEditProfile />;

  return (
    <>
      <Meta title="프로필 수정" />
      <Header page="upload" btnText="저장" btnDisabled={isCompleteDisabled} formName="form-edit-profile" />
      <main className="main-profile-edit">
        <div className="l_main-profile-edit">
          <form ref={formRef} onSubmit={handleSubmit} id="form-edit-profile">
            <Information initialData={data} setIsCompleteDisabled={setIsCompleteDisabled} />
          </form>
        </div>
      </main>
      <Navbar />
    </>
  );
}
