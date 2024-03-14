import React, { useLayoutEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection } from '../components';
import SkeletonProfile from '../components/SkeletonProfile';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';
import { fetchData } from '../api';

export default function UserProfile() {
  const [searchParams] = useSearchParams();
  const accountname = searchParams.get('accountName');

  const { profile: fetchProfile, product: fetchProduct } = fetchData(accountname);

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
      <main className="main-with-nav main-user-profile">
        <Suspense fallback={<SkeletonProfile />}>
          <ProfileSection fetchData={fetchProfile} accountname={accountname} />
          <ProductSection fetchData={fetchProduct} />
          {/* <PostSection accountname={accountname} /> */}
        </Suspense>
      </main>
      <Navbar />
    </>
  );
}
