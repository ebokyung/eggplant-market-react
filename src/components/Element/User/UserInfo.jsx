import React from 'react';
import './style/UserInfo.scss';

const categoryMap = {
  post: { nameTag: 'p', detailCategory: 'id' },
  chat: { nameTag: 'p', detailCategory: 'chat' },
  search: { nameTag: 'h3', detailCategory: 'id' },
  follow: { nameTag: 'strong', detailCategory: 'intro' },
  comment: { nameTag: 'strong', detailCategory: null },
};

const detailClassMap = {
  id: 'user-id',
  chat: 'chat-content ellipsis',
  intro: 'user-intro ellipsis',
};

// userNameTag : strong(default), h2, h3, p
// detailcategory : chat, intro, id(default)
export default function UserInfo({ category = 'post', userName, detail }) {
  const { nameTag: UserNameTag, detailCategory } = categoryMap[category];
  return (
    <div className="user-info">
      <UserNameTag className="user-name">{userName}</UserNameTag>
      {detailCategory ? <p className={detailClassMap[detailCategory]}>{detail}</p> : null}
    </div>
  );
}

// // 팔로잉 팔로워
// <div className="user-info" style="width: calc(100% - 150px);">
//   <strong className="user-name">
//     <a href="./profile_info.html?accountName=oxxunnnn21">
//       가은<span className="a11y-hidden">의 프로필 보기</span>
//     </a>
//   </strong>
//   <p className="user-intro ellipsis">메렁</p>
// </div>;

// <div className="user-info">
//   <strong className="user-name">
//     <a href="./profile_info.html?accountName=weniv_rho">
//       노태희<span className="a11y-hidden">의 프로필 보기</span>
//     </a>
//   </strong>
//   <p className="user-intro ellipsis">안녕하세요 저는 태희입니다.^^( ◡̉̈ )</p>
// </div>;

// // 게시글
// <a className="user-info" href="./profile_info.html?accountName=oxxunnnn21">
//   <p className="user-name">가은</p>
//   <p className="user-id">oxxunnnn21</p>
// </a>;

// <div className="user-info">
//   <p className="user-name">박재영!</p>
//   <p className="user-id">jyp0308</p>
// </div>;

// // 채팅
// <div className="user-info">
//   <p className="user-name">애월읍 위니브 가지밭</p>
//   <p className="chat-content ellipsis">이번에 정정 언제하멘마씸?</p>
// </div>;

// // 검색결과
// <a className="user-info" href="./profile_info.html?accountName=112233aa">
//   <h3 className="user-name">
//     112233<strong>aa</strong>
//   </h3>
//   <span className="a11y-hidden">의 프로필 보기</span>
//   <p className="user-id">112233aa</p>
// </a>;