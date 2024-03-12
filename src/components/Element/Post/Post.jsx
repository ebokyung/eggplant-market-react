import React, { createContext, useRef } from 'react';
import { Link } from 'react-router-dom';

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

// 콘텐츠

function returnContentTag(path) {
  switch (path) {
    case 'profile':
      return 'h3';
    case 'post':
      return 'p';
    default:
      return 'h2';
  }
}

function TextContent({ path, text }) {
  // pathname에 따른 콘텐츠 글자 태그 결정
  const TextTag = returnContentTag(path);

  return <TextTag className="post-text">{text}</TextTag>;
}

function 이미지전처리(image) {
  return image
    .split(imgReg)
    .filter(img => !!img)
    .map(img => checkImageUrl(img, 'post'));
}

function ImageContent({ src }) {
  // lazy load
  const imgRef = useRef([]);
  imgRef.current = [];
  const addToRefs = el => {
    console.log(el);
    imgRef.current.push(el);
  };
  useLazyLoad(imgRef);

  // 요소 최대 3개
  const imgs = 이미지전처리(src);

  return (
    <>
      {imgs.map(img => (
        <div key={img} className="img-cover">
          <img className="post-img" data-src={img} alt="" ref={addToRefs} />
        </div>
      ))}
    </>
  );
}

function Contents({ src, text, path }) {
  return (
    <>
      <TextContent text={text} path={path} />
      <ImageContent src={src} />
    </>
  );
}
// 댓글 아이콘
function CommentIcon({ value }) {
  return (
    <>
      <MessageCircle />
      <span className="cnt">{value}</span>
    </>
  );
}

function withLinkTag(Component, text) {
  return function ({ id, ...props }) {
    return (
      <Link to={`/post?postId=${id}`}>
        <span className="a11y-hidden">{text}</span>
        <Component {...props} />
      </Link>
    );
  };
}

const ContentsWithLink = withLinkTag(Contents, '게시글 상세보기');
const CommentIconWithLink = withLinkTag(CommentIcon, '게시물 댓글 보러가기');

const PostContext = createContext();
console.log(PostContext);

// idx : 게시글 순서 식별용
export function Post({ post, path = 'home', idx = 0 }) {
  // data
  const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;

  return (
    <section id={`post${idx}`} className="home-post" data-postid={id}>
      <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
      <div className="post-edit">
        <ContentsWithLink src={image} text={content} path={path} />
        <div className="post-icon">
          <ButtonLike postId={id} hearted={hearted} heartCount={heartCount} />
          <CommentIconWithLink id={id} value={commentCount} />
        </div>
        {/* 날짜 처리 함수 적용 필요 */}
        <p className="post-date">{dateProcess(createdAt)}</p>
      </div>

      <ButtonOptionPost postid={id} isMyPost={author.accountname === storage.getAccountName()} />
    </section>
  );
}

// function 게시글({ children, post }) {
//   const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;

//   return (
//     <section id="post" className="home-post" data-postid={id}>
//       <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
//       <div className="post-edit">{children}</div>
//       <ButtonOptionPost postid={id} isMyPost={author.accountname === storage.getAccountName()} />
//     </section>
//   );
// }
