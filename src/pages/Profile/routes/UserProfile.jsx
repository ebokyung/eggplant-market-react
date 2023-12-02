import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { getProfileAPI, getProductAPI } from '../api';
import PostSkeleton from '../../../components/Skeleton/PostSkeleton';
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
            <div className="post-tab">
              <div className="tab-btn-wrap">
                <Skeleton width={26} height={26} style={{ marginRight: 5 }} />
                <Skeleton width={26} height={26} />
              </div>
            </div>
            <div className="post-sec">
              <ul className="post-list">
                <PostSkeleton />
              </ul>
            </div>
          </div>
        </main>
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
