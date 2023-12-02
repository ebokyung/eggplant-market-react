import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { getProfileAPI, getProductAPI } from '../api';
import SkeletonProfile from '../components/SkeletonProfile';
import { scrollHook } from '../../../hooks/scroll';

export default function UserProfile() {
  const location = useLocation();
  const accountname = new URLSearchParams(location.search).get('accountName');
  const [isloading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState();
  const [userProduct, setUserProduct] = useState();
  const [userPost, setUserPost] = useState();
  const [hasMoreData, setHasMoreData] = useState(true);

  scrollHook({ url: `/post/${accountname}/userpost`, cnt: 4, setData: setUserPost, hasMoreData, setHasMoreData });

  useEffect(() => {
    document.body.classList.add('profile-body-color');
    return () => {
      document.body.classList.remove('profile-body-color');
    };
  }, []);

  useEffect(() => {
    setIsLoading(() => true);
    (async () => {
      const [userProfileData, userProductData] = await Promise.all([getProfileAPI(accountname), getProductAPI(accountname)]);
      setUserProfile(userProfileData);
      setUserProduct(userProductData);
      setIsLoading(() => false);
    })();
  }, [location.search]);

  return (
    <>
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
