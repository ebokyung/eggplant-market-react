import React, { createContext, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Post.scss';

import { User } from '../User';
import { ButtonOptionPost } from '../Buttons';
import { ReactComponent as HeartSVG } from './icon-heart.svg';
import { ReactComponent as MessageCircleSVG } from '../../../assets/icon/icon-message-circle.svg';

import useLike from './hooks/useLike';
import { useLazyLoad } from '../../../hooks/useLazyLoad';

import { returnTextTag, 이미지전처리 } from './utils';
import { dateProcess } from '../../../utils/date';
import { storage } from '../../../utils/storage';

const PostContext = createContext({
  id: '',
  image: '',
  content: '',
  hearted: false,
  heartCount: 0,
  commentCount: 0,
  createdAt: '',
});

// 콘텐츠
// 텍스트 콘텐츠
function TextContents() {
  const { path, content } = useContext(PostContext);

  // pathname에 따른 콘텐츠 글자 태그 결정
  const TextTag = returnTextTag(path);

  return <TextTag className="post-text">{content}</TextTag>;
}

// 리팩토링 필요
function ImageContents() {
  // 요소 최대 3개 -> 메모이제이션 불필요
  const { image } = useContext(PostContext);
  const imgs = 이미지전처리(image);

  // lazy load
  const imgRef = useRef([]);
  imgRef.current = [];
  const addToRefs = el => {
    // console.log(el);
    imgRef.current.push(el);
  };
  useLazyLoad(imgRef);

  return (
    <>
      {imgs.map(img => (
        <div className="img-cover">
          <img className="post-img" data-src={img} alt="" ref={addToRefs} />
        </div>
      ))}
    </>
  );
}

// 아이콘
function Count({ value }) {
  return <span className="cnt">{value}</span>;
}

function Comment() {
  const { commentCount } = useContext(PostContext);
  return (
    <>
      <MessageCircleSVG />
      <Count value={commentCount} />
    </>
  );
}
function Like() {
  const { id, hearted, heartCount } = useContext(PostContext);
  const { isHeart, heartCnt, toggleHeart } = useLike({ id, hearted, heartCount });

  return (
    <button type="button" className={`btn-like${isHeart ? ' like' : ''}`} onClick={toggleHeart}>
      <HeartSVG />
      <Count value={heartCnt} />
    </button>
  );
}

function LinkWrapper({ children, hiddenText }) {
  const { id } = useContext(PostContext);
  return (
    <Link to={`/post?postId=${id}`}>
      <span className="a11y-hidden">{hiddenText}</span>
      {children}
    </Link>
  );
}

function Date() {
  const { createdAt } = useContext(PostContext);
  const date = dateProcess(createdAt);
  return <p className="post-date">{date}</p>;
}

export function Post({ post, children, path = 'home', idx = 0 }) {
  // data
  const { author, id } = post;

  const contextValue = React.useMemo(() => {
    return { ...post, path };
  }, [post, path]);

  return (
    <PostContext.Provider value={contextValue}>
      <section id={`post${idx}`} className="home-post" data-postid={id}>
        <User category="post" accountName={author.accountname} userName={author.username} detail={author.accountname} profileImg={author.image} />
        <div className="post-edit">{children}</div>
        <ButtonOptionPost postid={id} isMyPost={author.accountname === storage.getAccountName()} />
      </section>
    </PostContext.Provider>
  );
}
Post.TextContents = TextContents;
Post.ImageContents = ImageContents;
Post.Like = Like;
Post.Comment = Comment;
Post.Date = Date;

export function PostWithoutLink({ post }) {
  return (
    <Post post={post} path="post">
      <Post.TextContents />
      <Post.ImageContents />
      <div className="post-icon">
        <Post.Like />
        <Post.Comment />
      </div>
    </Post>
  );
}

export function PostWithLink({ post, path, idx }) {
  return (
    <Post post={post} path={path} idx={idx}>
      <LinkWrapper hiddenText="게시글 보기">
        <Post.TextContents />
        <Post.ImageContents />
      </LinkWrapper>
      <div className="post-icon">
        <Post.Like />
        <LinkWrapper hiddenText="댓글 보기">
          <CommentWithLink />
        </LinkWrapper>
      </div>
    </Post>
  );
}
