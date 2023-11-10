import React from 'react';
import '../styles/ChatList.scss';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { ChatListItem } from '../components/ChatListItem';
import { chatListData } from '../../../libs/dummy';
import { Meta } from '../../../libs/Meta';

export function ChatList() {
  return (
    <>
      <Meta title="채팅 목록" />
      {/* fixed header ? */}
      <Header>
        <span className="a11y-hidden">채팅목록</span>
      </Header>
      <main className="main-with-nav main-chat-list">
        <ul className="chat-list">
          {chatListData.map(item => {
            return (
              <li key={item.id}>
                <ChatListItem data={item} />
              </li>
            );
          })}
        </ul>
      </main>
      <Navbar />
    </>
  );
}
