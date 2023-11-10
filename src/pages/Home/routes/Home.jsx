/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import { HomeWithPost } from '../components/HomeWithPost';
import { HomeWithoutPost } from '../components/HomeWithoutPost';
import { getFeedAPI } from '../api';
import PostSkeleton from '../../../components/Skeleton/PostSkeleton';
import { Meta } from '../../../libs/Meta';

export function Home() {
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
      <Meta title="피드" />
      <Header page="main" text="가지마켓 피드" />
      {isLoading ? (
        <main className="main-with-nav main-with-post">
          <ul className="post-list">
            <li>
              <PostSkeleton />
            </li>
            <li>
              <PostSkeleton />
            </li>
          </ul>
        </main>
      ) : posts.length ? (
        <HomeWithPost posts={posts} />
      ) : (
        <HomeWithoutPost />
      )}
      <Footer />
    </>
  );
}
