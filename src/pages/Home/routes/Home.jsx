/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import { HomeWithPost } from '../components/HomeWithPost';
import { HomeWithoutPost } from '../components/HomeWithoutPost';
import PostSkeleton from '../../../components/Skeleton/PostSkeleton';
import { scrollHook } from '../../../hooks/scroll';

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);
  scrollHook({ url: '/post/feed', cnt: 4, setData: setPosts, setIsLoading, hasMoreData, setHasMoreData });
  // const getFeedData = fetchClosure('/post/feed', 4);

  // useEffect(() => {
  //   (async () => {
  //     const res = await getFeedData();
  //     setPosts(res.data.posts);

  //     setIsLoading(false);
  //   })();
  // }, []);

  // const handleScroll = async () => {
  //   if (!hasMoreData) return;

  //   if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
  //     const res = await getFeedData();
  //     if (res.data.posts.length === 0) {
  //       setHasMoreData(false);
  //     } else {
  //       setPosts(prev => prev.concat(res.data.posts));
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const throttledScroll = throttle(handleScroll, 500);
  //   window.addEventListener('scroll', throttledScroll);
  //   return () => {
  //     window.removeEventListener('scroll', throttledScroll);
  //   };
  // }, []);

  return (
    <>
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
