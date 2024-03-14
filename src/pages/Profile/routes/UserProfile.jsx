import React, { useLayoutEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useSetRecoilState } from 'recoil';
// import { accountnameState } from '../recoils/atoms';
import '../styles/UserProfile.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ProfileSection, ProductSection } from '../components';
import SkeletonProfile from '../components/SkeletonProfile';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';

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
        <React.Suspense fallback={<SkeletonProfile />}>
          <ProfileSection accountname={accountname} />
          <ProductSection accountname={accountname} />
          {/* <PostSection accountname={accountname} /> */}
        </React.Suspense>
      </main>
      <Navbar />
    </>
  );
}
