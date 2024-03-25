import React from 'react';
import '../styles/ChatBubble.scss';
import { ProfileImage } from '../../../components/Element/User/ProfileImage';

export function ChatBubble({ data }) {
  const { who, body, src, time } = data;
  return (
    <div className={`chat-cover ${who ? 'my-chat' : 'your-chat'}`}>
      {!who && <ProfileImage src="" size="Regular" />}
      {!src && <p className="chat-content">{body}</p>}
      {src && <img src={src} alt="" />}
      <p className="chat-time">{time}</p>
    </div>
  );
}
