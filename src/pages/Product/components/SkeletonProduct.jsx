import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonFieldset from '../../../components/Skeleton/Fieldset';
import Header from '../../../components/Element/Header/Header';

export default function SkeletonProduct() {
  return (
    <>
      <Header page="upload">
        <Skeleton width={90} height={30} />
      </Header>
      <main className="main-product">
        <div className="title">
          <Skeleton width={80} />
        </div>
        <div className="formProduct">
          <Skeleton className="product-img-cover" />
          <SkeletonFieldset />
          <SkeletonFieldset />
          <SkeletonFieldset />
        </div>
      </main>
    </>
  );
}
