/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import HomeWithPost from '../components/HomeWithPost';
import HomeWithoutPost from '../components/HomeWithoutPost';
import SkeletonHome from '../components/SkeletonHome';
import { scrollHook } from '../../../hooks/scroll';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  scrollHook({ url: '/post/feed', cnt: 4, setData: setPosts, setIsLoading, hasMoreData, setHasMoreData });

  return (
    <>
      <Meta title="피드" />
      <SkipNav page="home" />
      <Header page="main" text="가지마켓 피드" />
      {isLoading ? <SkeletonHome /> : posts.length ? <HomeWithPost posts={posts} /> : <HomeWithoutPost />}
      <Footer />
    </>
  );
}
