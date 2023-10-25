import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { User } from '../User';
import ButtonOptionPost from '../Buttons/ButtonOptionPost';
import ButtonLike from './ButtonLike';

import './Post.scss';
import messageCircle from '../../../assets/icon/icon-message-circle.svg';
import { checkImageUrl } from '../../../utils/imageUrlProcess';
import { dateProcess } from '../../../utils/date';

function returnContentTag(location) {
  if (location.includes('home')) return 'h2';
  if (location.includes('profile')) return 'h3';
  if (location.includes('post')) return 'p';
  return 'h2';
}

// Post 링크 분기
// 게시글 상세 페이지에서는 게시글 상세보기 링크 막기
export function Post({ post }) {
  const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;
  const location = useLocation();
  const ContentTag = returnContentTag(location.pathname);

  const preventClick = e => {
    if (location.pathname.includes('post')) {
      e.preventDefault();
    }
  };

  const preventPointer = location.pathname.includes('post')
    ? {
        pointerEvents: 'none',
      }
    : null;

  return (
    <section id="post" className="home-post" data-postid={id}>
      <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
      <div className="post-edit">
        <Link to={`/post?postId=${id}`} onClick={preventClick} style={preventPointer}>
          <span className="a11y-hidden">게시글 상세보기</span>
          <ContentTag className="post-text">{content}</ContentTag>
          {image
            .split(',')
            .filter(img => !!img)
            .map(img => (
              <div key={img} className="img-cover">
                <img className="post-img" src={checkImageUrl(img, 'post')} alt="" />
              </div>
            ))}
        </Link>
        <div className="post-icon">
          <ButtonLike postid={id} hearted={hearted} heartCnts={heartCount} />
          <Link to={`/post?postId=${id}`} onClick={preventClick} style={preventPointer}>
            <span className="a11y-hidden">게시물 댓글 보러가기</span>
            <img src={messageCircle} alt="" />
            <span className="cnt">{commentCount}</span>
          </Link>
        </div>
        {/* 날짜 처리 함수 적용 필요 */}
        <p className="post-date">{dateProcess(createdAt)}</p>
      </div>

      <ButtonOptionPost />
    </section>
  );
}
