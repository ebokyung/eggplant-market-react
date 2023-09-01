import React from 'react';
import '../styles/ChatBubble.scss';
import ProfileImg from '../../../components/Element/User/ProfileImg';

export function ChatBubble({ data }) {
  const { who, body, src, time } = data;
  return (
    <div className={`chat-cover ${who ? 'my-chat' : 'your-chat'}`}>
      {!who && <ProfileImg category="chat" />}
      {!src && <p className="chat-content">{body}</p>}
      {src && <img src={src} alt="" />}
      <p className="chat-time">{time}</p>
    </div>
  );
}
