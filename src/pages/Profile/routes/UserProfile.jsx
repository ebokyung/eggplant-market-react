import React from 'react';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { userProfile, userProduct, userPost } from '../../../libs/dummy';

export function UserProfile() {
  return (
    <>
      <Header />
      <main className="main-with-nav">
        <ProfileSection data={userProfile.profile} />
        {!!userProduct.data && <ProductSection data={userProduct.product} />}
        <PostSection data={userPost.post} />
      </main>
      <Navbar />
    </>
  );
}