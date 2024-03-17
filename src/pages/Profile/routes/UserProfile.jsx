import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection, PostSection } from '../components';
import { SkeletonProfileSection, SkeletonProductSection } from '../components/SkeletonProfile';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';

function SkeletonTopSection() {
  return (
    <>
      <SkeletonProfileSection />
      <SkeletonProductSection />
    </>
  );
}

export default function UserProfile() {
  const [searchParams] = useSearchParams();
  const accountname = searchParams.get('accountName');

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
        <React.Suspense fallback={<SkeletonTopSection />}>
          <ProfileSection accountname={accountname} />
          <ProductSection accountname={accountname} />
        </React.Suspense>
        <PostSection accountname={accountname} />
      </main>
      <Navbar />
    </>
  );
}
