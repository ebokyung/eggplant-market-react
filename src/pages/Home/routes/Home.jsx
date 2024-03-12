/* eslint-disable no-nested-ternary */
// ---------- Hook 사용시 ---------
import React from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import '../style/Home.scss';
import HomeWithPost from '../components/HomeWithPost';
import HomeWithoutPost from '../components/HomeWithoutPost';
import SkeletonHome from '../components/SkeletonHome';
import Spinner from '../../../components/Element/Spinner/Spinner';
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
          {fetchStatus.isFetching && <Spinner />}
        </>
      ) : (
        <HomeWithoutPost />
      )}
      <Footer />
    </>
  );
}

// -------- HoC 사용시 ----------

// /* eslint-disable no-nested-ternary */
// import React from 'react';
// import Header from '../../../components/Element/Header/Header';
// import Footer from '../../../components/Element/Navbar/Navbar';
// import '../style/Home.scss';
// import HomeWithPost from '../components/HomeWithPost';
// import HomeWithoutPost from '../components/HomeWithoutPost';
// import SkeletonHome from '../components/SkeletonHome';
// import { Meta } from '../../../libs/Meta';
// import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';
// import withInfiniteScroll from '../../../hocs/withInfiniteScroll';

// function HomeFeed({ data }) {
//   if (!data.length) return <HomeWithoutPost />;
//   return <HomeWithPost posts={data} />;
// }

// export default function Home() {
//   const VIEW_COUNT = 6;
//   const WithInfiniteHomeFeed = withInfiniteScroll(SkeletonHome, HomeFeed, `/post/feed`, VIEW_COUNT);
//   return (
//     <>
//       <Meta title="피드" />
//       <SkipNav page="home" />
//       <Header page="main" text="가지마켓 피드" />
//       <WithInfiniteHomeFeed />
//       <Footer />
//     </>
//   );
// }
