import React from 'react';

export function PostViewTab() {
  return (
    <section className="post-tab">
      <h2 className="a11y-hidden">게시글 보기 유형 고르기</h2>
      <div className="tab-btn-wrap">
        <button type="button" className="btn-post-list on">
          <span className="a11y-hidden">목록형</span>
        </button>
        <button type="button" className="btn-post-album">
          <span className="a11y-hidden">앨범형</span>
        </button>
      </div>
    </section>
  );
}
