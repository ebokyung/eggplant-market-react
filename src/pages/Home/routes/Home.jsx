import React from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import HomeFeed from '../components/HomeFeed';
import '../style/Home.scss';
import { Meta } from '../../../libs/Meta';
import { SkipNav } from '../../../components/Element/SkipNav/SkipNav';

export default function Home() {
  return (
    <>
      <Meta title="피드" />
      <SkipNav page="home" />
      <Header page="main" text="가지마켓 피드" />
      <HomeFeed />
      <Footer />
    </>
  );
}
