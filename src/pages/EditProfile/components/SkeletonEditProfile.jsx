import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonFieldset from '../../../components/Skeleton/Fieldset';
import Header from '../../../components/Element/Header/Header';

export default function SkeletonEditProfile() {
  return (
    <>
      <Header page="upload">
        <Skeleton width={90} height={30} />
      </Header>
      <main className="main-profile-edit">
        <div className="setting-profile-img">
          <Skeleton className="profile-img main" circle />
        </div>
        <SkeletonFieldset />
        <SkeletonFieldset />
        <SkeletonFieldset />
      </main>
    </>
  );
}
