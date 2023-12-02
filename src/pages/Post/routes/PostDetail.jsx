/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Comment from '../components/Comment';
import { Post } from '../../../components/Element/Post';
import '../style/PostDetail.scss';
import { CommentInput } from '../components/CommentInput';
import { getPostDetailAPI } from '../api';
import SkeletonComment from '../components/SkeletonComment';
import SkeletonCommentInput from '../components/SkeletonCommentInput';
import SkeletonPost from '../../../components/Skeleton/Post';

export default function PostDetail() {
  const [userImg, setUserImg] = useState('');
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get('postId');

  useEffect(() => {
    (async () => {
      if (isLoading) {
        const [{ image }, { post }, { comments }] = await getPostDetailAPI(postId);

        setUserImg(image);
        setPost(post);
        setComments(comments);

        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="main-with-nav main-post">
        {isLoading ? (
          <>
            <SkeletonPost />
            <SkeletonComment />
          </>
        ) : (
          <>
            <Post post={post} />
            <section className="comment-sec">
              <h2 className="a11y-hidden">게시물에 대한 답변</h2>
              <ul className="comment-list">
                {comments?.map(comment => (
                  <li key={comment.id} className="comment-item">
                    <Comment comment={comment} />
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </main>
      {isLoading ? <SkeletonCommentInput /> : <CommentInput postId={postId} setIsLoading={setIsLoading} userImg={userImg} />}
      <section />
    </>
  );
}
