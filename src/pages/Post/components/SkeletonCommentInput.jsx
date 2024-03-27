import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonCommentInput() {
  return (
    <section className="comment-section">
      <form action="" style={{ zIndex: 1 }}>
        <div id="commemt-input">
          <Skeleton />
        </div>
        <div className="profile-img comment">
          <Skeleton height="100%" />
        </div>
        <button type="submit" className="btn-comment" disabled>
          게시
        </button>
      </form>
    </section>
  );
}
