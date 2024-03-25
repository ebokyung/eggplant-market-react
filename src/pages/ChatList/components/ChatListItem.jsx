import React from 'react';
import { Link } from 'react-router-dom';
import { UserInfo } from '../../../components/Element/User';
import { ProfileImage } from '../../../components/Element/User/ProfileImage';

export function ChatListItem({ data }) {
  const { roomId, members, memberImg, lastMessage, lastChatDate, unreadCount } = data;
  return (
    <Link className="chat-item" to="/chat-room" state={{ roomId }}>
      {unreadCount > 0 && <span className="dot" />}
      <ProfileImage src={memberImg} size="Regular" />
      <UserInfo category="chat" userName={members} detail={lastMessage} className="user-info" />
      <p className="chat-date">{lastChatDate}</p>
    </Link>
  );
}
