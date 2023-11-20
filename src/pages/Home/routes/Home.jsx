/* eslint-disable no-nested-ternary */
import React, { useEffect, useState, Suspense } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import { getFeedAPI } from '../api';
import PostSkeleton from '../../../components/Skeleton/PostSkeleton';

const HomeWithoutPost = React.lazy(() => import('../components/HomeWithoutPost'));
const HomeWithPost = React.lazy(() => import('../components/HomeWithPost'));

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
      <Suspense fallback={<div>로딩 중...</div>}>
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
      </Suspense>
      <Footer />
    </>
  );
}
