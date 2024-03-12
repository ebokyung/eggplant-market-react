import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { User } from '../User';
import { ButtonOptionPost } from '../Buttons';
import ButtonLike from './ButtonLike';

import './Post.scss';
import { ReactComponent as MessageCircle } from '../../../assets/icon/icon-message-circle.svg';
import { checkImageUrl } from '../../../utils/imageUrlProcess';
import { dateProcess } from '../../../utils/date';
import { imgReg } from '../../../libs/constant/regex';
import { storage } from '../../../utils/storage';
import { useLazyLoad } from '../../../hooks/useLazyLoad';

function withLinkTag(Component, id, text) {
  return function newComponent(props) {
    const { pathname } = useLocation();

    if (pathname.includes('post')) return <Component {...props} />;

    return (
      <Link to={`/post?postId=${id}`}>
        <span className="a11y-hidden">{text}</span>
        <Component {...props} />
      </Link>
    );
  };
}

// 콘텐츠

function returnContentTag() {
  const { pathname } = useLocation();

  if (pathname.includes('home')) return 'h2';
  if (pathname.includes('profile')) return 'h3';
  if (pathname.includes('post')) return 'p';
  return 'h2';
}

function 이미지전처리(image) {
  return image
    .split(imgReg)
    .filter(img => !!img)
    .map(img => checkImageUrl(img, 'post'));
}

function Content({ content, image }) {
  // lazy load
  const imgRef = useRef([]);
  imgRef.current = [];
  const addToRefs = el => {
    console.log(el);
    imgRef.current.push(el);
  };
  useLazyLoad(imgRef);

  // pathname에 따른 콘텐츠 글자 태그 결정
  const ContentTag = returnContentTag();

  // 요소 최대 3개
  const imgs = 이미지전처리(image);

  return (
    <>
      <ContentTag className="post-text">{content}</ContentTag>
      {imgs.map(img => (
        <div key={img} className="img-cover">
          <img className="post-img" data-src={img} alt="" ref={addToRefs} />
        </div>
      ))}
    </>
  );
}

// 댓글 아이콘
function CommentIcon({ commentCount }) {
  return (
    <>
      <MessageCircle />
      <span className="cnt">{commentCount}</span>
    </>
  );
}

// Post 링크 분기
// 게시글 상세 페이지에서는 게시글 상세보기 링크 막기
export function Post({ post }) {
  // data
  const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;

  return (
    <section id="post" className="home-post" data-postid={id}>
      <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
      <div className="post-edit">
        <Link to={`/post?postId=${id}`}>
          <span className="a11y-hidden">게시글 상세보기</span>
          <Content content={content} image={image} />
        </Link>
        <div className="post-icon">
          <ButtonLike postid={id} hearted={hearted} heartCnts={heartCount} />
          <Link to={`/post?postId=${id}`}>
            <span className="a11y-hidden">게시물 댓글 보러가기</span>
            <CommentIcon commentCount={commentCount} />
          </Link>
        </div>
        {/* 날짜 처리 함수 적용 필요 */}
        <p className="post-date">{dateProcess(createdAt)}</p>
      </div>

      <ButtonOptionPost postid={id} isMyPost={author.accountname === storage.getAccountName()} />
    </section>
  );
}
