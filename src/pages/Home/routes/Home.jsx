/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import HomeWithPost from '../components/HomeWithPost';
import HomeWithoutPost from '../components/HomeWithoutPost';
import SkeletonHome from '../components/SkeletonHome';
import { useScroll } from '../../../hooks/useScroll';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';
import { defaultAxios } from '../../../libs/api/axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const VIEW_COUNT = 6;
  const getData = async page => {
    return defaultAxios.get(`/post/feed?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  };

  useScroll({ getData, setData: setPosts, setIsLoading });

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
