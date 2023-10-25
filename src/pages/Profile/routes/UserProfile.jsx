import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { getProfileAPI, getProductAPI, getPostAPI } from '../api';

export function UserProfile() {
  const location = useLocation();
  const accountname = new URLSearchParams(location.search).get('accountName');
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState();
  const [userProduct, setUserProduct] = useState();
  const [userPost, setUserPost] = useState();

  useEffect(() => {
    document.body.classList.add('profile-body-color');
    return () => {
      document.body.classList.remove('profile-body-color');
    };
  }, []);

  useEffect(() => {
    setLoading(() => true);
    (async () => {
      const [userProfileData, userProductData, userPostData] = await Promise.all([getProfileAPI(accountname), getProductAPI(accountname), getPostAPI(accountname)]);
      setUserProfile(userProfileData);
      setUserProduct(userProductData);
      setUserPost(userPostData);
      setLoading(() => false);
    })();
  }, [location.search]);

  return (
    <>
      <Header />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <main className="main-with-nav main-user-profile">
          <ProfileSection data={userProfile.profile} />
          <ProductSection data={userProduct.product} />
          <PostSection data={userPost.post} />
        </main>
      )}
      <Navbar />
    </>
  );
}
