import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
      setTimeout(() => {
        setLoading(() => false);
      }, 30000);
    })();
  }, [location.search]);

  return (
    <>
      <Header />
      {loading ? (
        <main className='"main-with-nav main-user-profile'>
          <div className="profile-container">
            <div className="profile-header">
              <div className="setting-profile-img">
                <Skeleton className="profile-img main" circle />
              </div>
              <Skeleton width={220} style={{ marginBottom: '0.625rem' }} />
              <Skeleton width={150} style={{ marginBottom: '0.625rem' }} />
              <Skeleton style={{ marginBottom: '0.625rem' }} />
              <div className="follow-wrap">
                <Skeleton width={40} height={30} />
              </div>
              <Skeleton className="follow-wrap" width={40} height={30} />
            </div>
            <div className="btn-wrap-my">
              <Skeleton width={80} height={34} style={{ borderRadius: 30 }} inline />
              <Skeleton width={80} height={34} style={{ borderRadius: 30 }} inline />
            </div>
          </div>
          <div className="product-container">
            <Skeleton width={80} style={{ margin: '0 0 1rem 1rem' }} />
            <ul className="product-list">
              <li className="product-item">
                <div className="product">
                  <Skeleton className="product-img" />
                  <Skeleton className="product-name" />
                  <Skeleton className="product-price" />
                </div>
              </li>
              <li className="product-item">
                <div className="product">
                  <Skeleton className="product-img" />
                  <Skeleton className="product-name" />
                  <Skeleton className="product-price" />
                </div>
              </li>
            </ul>
          </div>
          <div className="post-container">
            <div className="post-sec">
              <Skeleton />
            </div>
          </div>
        </main>
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
