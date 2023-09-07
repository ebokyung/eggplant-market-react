import React from 'react';
import Header from '../../../components/Element/Header/Header';
import { commentList, myinfo, singlePost } from '../../../libs/dummy/post';
import Comment from '../components/Comment';
import { Post } from '../../../components/Element/Post';
import '../style/PostDetail.scss';
import { CommentInput } from '../components/CommentInput';

export function PostDetail() {
  const { user } = myinfo;
  const { post } = singlePost;
  const { comments } = commentList;
  return (
    <>
      <Header />
      <main className="main-with-nav post-main">
        <Post post={post} />
        <section className="comment-sec">
          <h2 className="a11y-hidden">게시물에 대한 답변</h2>
          <ul className="comment-list">
            {comments &&
              comments.map(comment => (
                // eslint-disable-next-line no-underscore-dangle
                <li key={comment.id} className="comment-item">
                  <Comment comment={comment} />
                </li>
              ))}
          </ul>
        </section>
      </main>
      <CommentInput userImg={user.image} />
      <section />
    </>
  );
}
