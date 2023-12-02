/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import { getFeedAPI } from '../api';
import SkeletonHome from '../components/SkeletonHome';
import HomeWithoutPost from '../components/HomeWithoutPost';
import HomeWithPost from '../components/HomeWithPost';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getFeedAPI('/post/feed/');
      setPosts(res.posts);

      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Header page="main" text="가지마켓 피드" />
      {isLoading ? <SkeletonHome /> : posts.length ? <HomeWithPost posts={posts} /> : <HomeWithoutPost />}
      <Footer />
    </>
  );
}
