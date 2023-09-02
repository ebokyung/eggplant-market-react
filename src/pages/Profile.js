import React from 'react';
import Header from '../components/Element/Header/Header';
import Navbar from '../components/Element/Navbar/Navbar';
import Post from '../components/Element/Post/Post';
import { singlePost } from '../libs/dummy';

function Profile() {
  return (
    <>
      <Header />
      <Post post={singlePost.post} />
      <Navbar />
    </>
  );
}

export default Profile;
