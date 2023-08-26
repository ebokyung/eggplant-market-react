import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { User } from '../User';
import ButtonOption from '../Buttons/ButtonOption';
import ButtonLike from './ButtonLike';

import './Post.scss';
import messageCircle from '../../../assets/icon/icon-message-circle.svg';

function returnContentTag() {
  const location = useLocation();
  if (location.pathname.includes('home')) return 'h2';
  if (location.pathname.includes('profile')) return 'h3';
  if (location.pathname.includes('detail')) return 'p';
  return 'h2';
}

// Post 링크 분기
// 게시글 상세 페이지에서는 게시글 상세보기 링크 막기
function Post({ post }) {
  const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;
  const ContentTag = returnContentTag();

  return (
    <section id="post" className="home-post" data-postid={id}>
      <User category="post" userName={author.username} detail={author.accountname} profileImg={author.profileImg} />
      <div className="post-edit">
        <Link to="/">
          <span className="a11y-hidden">게시글 상세보기</span>
          {/* home : h2, profile : h3, detail : p  */}
          <ContentTag className="post-text">{content}</ContentTag>
          {image && (
            <div className="img-cover">
              <img className="post-img" src={image} alt="" />
            </div>
          )}
        </Link>
        <div className="post-icon">
          <ButtonLike hearted={hearted} heartCount={heartCount} />
          <Link to="/">
            <span className="a11y-hidden">게시물 댓글 보러가기</span>
            <img src={messageCircle} alt="" />
            <span className="cnt">{commentCount}</span>
          </Link>
        </div>
        {/* 날짜 처리 함수 적용 필요 */}
        <p className="post-date">{createdAt}</p>
      </div>

      <ButtonOption />
    </section>
  );
}

export default Post;
