import React, { createContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';
import { User } from '../User';
import { ButtonOptionPost } from '../Buttons';
import { ReactComponent as MessageCircle } from '../../../assets/icon/icon-message-circle.svg';
import { ReactComponent as Heart } from './icon-heart.svg';

import { returnTextContentTag, 이미지전처리 } from './utils';
import { dateProcess } from '../../../utils/date';
import { storage } from '../../../utils/storage';
import { useLazyLoad } from '../../../hooks/useLazyLoad';
import useLike from './hooks/useLike';

// 콘텐츠
// 텍스트 콘텐츠
function TextContents({ path, text }) {
  // pathname에 따른 콘텐츠 글자 태그 결정
  const TextTag = returnTextContentTag(path);

  return <TextTag className="post-text">{text}</TextTag>;
}

// 리팩토링 필요
function ImageContents({ src }) {
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
        <Image key={img} src={img} ref={addToRefs} />
      ))}
    </>
  );
}

const Image = React.forwardRef(({ src }, ref) => {
  return (
    <div className="img-cover">
      <img className="post-img" data-src={src} alt="" ref={ref} />
    </div>
  );
});

// 콘텐츠 컨테이너
function Contents({ src, text, path }) {
  return (
    <>
      <TextContents text={text} path={path} />
      <ImageContents src={src} />
    </>
  );
}
// 아이콘
function Count({ value }) {
  return <span className="cnt">{value}</span>;
}

function Comment({ value }) {
  return (
    <>
      <MessageCircle />
      <Count value={value} />
    </>
  );
}
function Like({ id, status, value }) {
  const { isHeart, heartCnt, toggleHeart } = useLike({ id, hearted: status, heartCount: value });

  return (
    <button type="button" className={`btn-like${isHeart ? ' like' : ''}`} onClick={toggleHeart}>
      <Heart />
      <Count value={heartCnt} />
    </button>
  );
}

// 링크 다는 고차컴포넌트
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
const CommentWithLink = withLinkTag(Comment, '게시물 댓글 보러가기');

function Date({ value }) {
  const date = dateProcess(value);
  return <p className="post-date">{date}</p>;
}

const PostContext = createContext();
console.log(PostContext);

// idx : 게시글 순서 식별용
export function Post({ post, path = 'home', idx = 0 }) {
  // data
  const { author, commentCount, content, createdAt, heartCount, hearted, id, image } = post;

  return (
    <section id={`post${idx}`} className="home-post" data-postid={id}>
      <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
      <PostContext.Provider>
        <div className="post-edit">
          <ContentsWithLink id={id} src={image} text={content} path={path} />
          {/* icon의 props들은 context 안에 넣게되면 리렌더링이 불필요하게 일어날 일이 생길 수 있음 */}
          <div className="post-icon">
            <Like id={id} status={hearted} value={heartCount} />
            <CommentWithLink id={id} value={commentCount} />
          </div>
          {/* 날짜 처리 함수 적용 필요 */}
          <Date value={createdAt} />
        </div>
      </PostContext.Provider>

      <ButtonOptionPost postid={id} isMyPost={author.accountname === storage.getAccountName()} />
    </section>
  );
}

/**
 * PostWithLink
 * PostWithoutLink
 */
