import React from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import { HomeWithPost, HomeWithoutPost } from '../components';

import { posts } from '../../../libs/dummy';
import '../style/Home.scss';

export function Home() {
  const data = posts;
  return (
    <>
      <Header page="main" text="가지마켓 피드" />
      {data.posts.length ? <HomeWithPost data={data} /> : <HomeWithoutPost />}
      <Footer />
    </>
  );
}
