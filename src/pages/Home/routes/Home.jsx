/* eslint-disable no-nested-ternary */
// ---------- Hook 사용시 ---------
import React from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import StylesSpinner from '../../../hocs/spinner.module.scss';
import HomeWithPost from '../components/HomeWithPost';
import HomeWithoutPost from '../components/HomeWithoutPost';
import SkeletonHome from '../components/SkeletonHome';
import { useScroll } from '../../../hooks/useScroll';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';
import { defaultAxios } from '../../../libs/api/axios';

export default function Home() {
  const VIEW_COUNT = 6;

  const fetchPosts = async page => {
    return defaultAxios.get(`/post/feed?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  };

  const { data: posts, fetchStatus } = useScroll(fetchPosts);

  return (
    <>
      <Meta title="피드" />
      <SkipNav page="home" />
      <Header page="main" text="가지마켓 피드" />
      {fetchStatus.isLoading ? (
        <SkeletonHome />
      ) : posts.length ? (
        <>
          <HomeWithPost posts={posts} />
          {fetchStatus.isFetching && (
            <div className={StylesSpinner.spinner}>
              <div className={StylesSpinner.loading} />
              <p>Loading</p>
            </div>
          )}
        </>
      ) : (
        <HomeWithoutPost />
      )}
      <Footer />
    </>
  );
}
