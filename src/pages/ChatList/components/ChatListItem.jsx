import React from 'react';
import { Link } from 'react-router-dom';
import { ChatUser } from '../../../components/Element/User';

export function ChatListItem({ data }) {
  const { roomId, members, memberImg, lastMessage, lastChatDate, unreadCount } = data;

  const author = {
    username: members,
    image: memberImg,
    contents: lastMessage,
  };

  return (
    <Link className="chat-item" to="/chat-room" state={{ roomId }}>
      {unreadCount > 0 && <span className="dot" />}
      <ChatUser author={author} />
      <p className="chat-date">{lastChatDate}</p>
    </Link>
  );
}
