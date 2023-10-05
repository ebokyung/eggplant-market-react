import React, { useEffect } from 'react';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { userProfile, userProduct, userPost } from '../../../libs/dummy';

export function UserProfile() {
  useEffect(() => {
    document.body.classList.add('profile-body-color');
    return () => {
      document.body.classList.remove('profile-body-color');
    };
  }, []);

  return (
    <>
      <Header />
      <main className="main-with-nav main-user-profile">
        <ProfileSection data={userProfile.profile} />
        {!!userProduct.data && <ProductSection data={userProduct.product} />}
        {!!userPost.post.length && <PostSection data={userPost.post} />}
      </main>
      <Navbar />
    </>
  );
}
