import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Splash, Login } from '../pages';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { ChatList } from '../pages/ChatList';
import { ChatRoom } from '../pages/ChatRoom';
import { Product } from '../pages/Product/routes/Product';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<Error />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat-room" element={<ChatRoom />} />
      <Route path="/product-upload" element={<Product />} />
      <Route path="/product-modify" element={<Product />} />
    </Routes>
  );
}
