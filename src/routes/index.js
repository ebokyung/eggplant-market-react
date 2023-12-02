import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Error = lazy(() => import('../pages/Error/Error'));
const Splash = lazy(() => import('../pages/Splash/Splash'));
const Login = lazy(() => import('../pages/Login/routes/Login'));
const LoginEmail = lazy(() => import('../pages/Login/routes/LoginEmail'));
const Home = lazy(() => import('../pages/Home/routes/Home'));
const Search = lazy(() => import('../pages/Search/routes/Search'));
const ChatList = lazy(() => import('../pages/ChatList/routes/ChatList'));
const ChatRoom = lazy(() => import('../pages/ChatRoom/routes/ChatRoom'));
const Product = lazy(() => import('../pages/Product/routes/Product'));
const UserProfile = lazy(() => import('../pages/Profile/routes/UserProfile'));
const Follow = lazy(() => import('../pages/Follow/routes/Follow'));
const SignUp = lazy(() => import('../pages/SignUp/routes/SignUp'));
const PostDetail = lazy(() => import('../pages/Post/routes/PostDetail'));
const EditProfile = lazy(() => import('../pages/EditProfile/routes/EditProfile'));
const Posting = lazy(() => import('../pages/Posting/routes/Posting'));

export default function AppRoutes() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));
  }

  return (
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Splash />} />

        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-email" element={<LoginEmail />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="/chat-room" element={<ChatRoom />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/product" element={<Product />} />
        {['/follower', '/following'].map(path => (
          <Route key={path} path={path} element={<Follow />} />
        ))}
        <Route path="/post" element={<PostDetail />} />
        <Route path="/posting" element={<Posting />} />
      </Routes>
    </Suspense>
  );
}
