import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Error, Splash } from '../pages';
import { Login, LoginEmail } from '../pages/Login';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { ChatList } from '../pages/ChatList';
import { ChatRoom } from '../pages/ChatRoom';
import { Product } from '../pages/Product/routes/Product';
import { UserProfile } from '../pages/Profile';
import { Follow } from '../pages/Follow';
import { SignUp } from '../pages/SignUp';
import { PostDetail } from '../pages/Post';
import { Posting } from '../pages/Posting/routes/Posting';
import { EditProfile } from '../pages/EditProfile';
import { themeAtom } from '../recoil/theme/atoms';
import { applyThemeToBackground } from '../utils/applyTheme';

export default function AppRoutes() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    setTheme('light');
  } else {
    const storageTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', storageTheme);
    setTheme(storageTheme);
  }

  useEffect(() => {
    applyThemeToBackground(theme);
  }, [useLocation()]);

  return (
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
  );
}
