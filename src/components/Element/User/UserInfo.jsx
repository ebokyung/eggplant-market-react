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

// userNameTag : strong(default), h2, h3, p
// detailcategory : chat, intro, id(default)
export default function UserInfo({ category = 'post', userName, detail }) {
  const { NameTag, detailCategory } = categoryMap[category];
  return (
    <div className="user-info">
      <NameTag className="user-name">{userName}</NameTag>
      {detailCategory ? <p className={detailClassMap[detailCategory]}>{detail}</p> : null}
    </div>
  );
}
