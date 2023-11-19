import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ButtonOption from '../../../components/Element/Buttons/ButtonOption';

export default function SkeletonComment() {
  return (
    <section className="comment-sec">
      <h2 className="a11y-hidden">게시물에 대한 답변</h2>
      <ul className="comment-list">
        <li className="comment-item">
          <div className="comment-user-info a">
            <div className="profile-img comment">
              <Skeleton height="100%" />
            </div>
            <div className="user-info">
              <Skeleton className="user-name" width={70} />
            </div>
          </div>
          <div className="comment-time">
            <Skeleton className="user-name" width={92} />
          </div>
          <div className="comment-text">
            <Skeleton className="user-name" width="70%" />
          </div>
          <ButtonOption disabled />
        </li>
      </ul>
    </section>
  );
}
