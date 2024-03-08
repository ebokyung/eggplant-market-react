import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { getProfileAPI, getProductAPI } from '../api';
import SkeletonProfile from '../components/SkeletonProfile';
import { useScroll } from '../../../hooks/useScroll';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';
import { defaultAxios } from '../../../libs/api/axios';

export default function UserProfile() {
  const location = useLocation();
  const accountname = new URLSearchParams(location.search).get('accountName');
  const [isloading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  const [userProduct, setUserProduct] = useState({});
  const [userPost, setUserPost] = useState([]);

  const VIEW_COUNT = 4;
  const getData = async page => {
    return defaultAxios.get(`/post/${accountname}/userpost?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  };

  useScroll({ getData, setData: setUserPost, setIsLoading });

  useEffect(() => {
    setIsLoading(() => true);
    (async () => {
      const [userProfileData, userProductData] = await Promise.all([getProfileAPI(accountname), getProductAPI(accountname)]);
      setUserProfile(userProfileData);
      setUserProduct(userProductData);
      setIsLoading(() => false);
    })();
  }, [location.search]);

  useLayoutEffect(() => {
    document.body.classList.add('profile-body-color');
    return () => {
      document.body.classList.remove('profile-body-color');
    };
  }, []);

  return (
    <>
      <Meta title="사용자 프로필" />
      <SkipNav page="profile" />
      <Header />
      {isloading ? (
        <SkeletonProfile />
      ) : (
        <main className="main-with-nav main-user-profile">
          <ProfileSection data={userProfile?.profile} />
          <ProductSection data={userProduct?.product} />
          <PostSection data={userPost} />
        </main>
      )}
      <Navbar />
    </>
  );
}
