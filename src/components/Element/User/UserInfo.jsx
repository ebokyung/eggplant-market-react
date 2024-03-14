/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './style/UserInfo.scss';

const categoryMap = {
  post: { NameTag: 'p', detailCategory: 'id' },
  chat: { NameTag: 'p', detailCategory: 'chat' },
  search: { NameTag: 'h3', detailCategory: 'id' },
  follow: { NameTag: 'strong', detailCategory: 'intro' },
  comment: { NameTag: 'strong', detailCategory: null },
};

const detailClassMap = {
  id: 'user-id',
  chat: 'chat-content ellipsis',
  intro: 'user-intro ellipsis',
};

// detailcategory : chat, intro, id(default)
export function UserInfo({ category = 'post', userName, detail }) {
  const { NameTag, detailCategory } = categoryMap[category];

  return (
    <div className="user-info">
      {/* NameTag : strong(default), h2, h3, p */}
      <NameTag className="user-name">{userName}</NameTag>
      {/* detailcategory : chat, intro, id(default) */}
      {detailCategory && <p className={detailClassMap[detailCategory]}>{detail}</p>}
    </div>
  );
}
