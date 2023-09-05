import React from 'react';

export function PostViewTab({ listViewOn, isListViewOn }) {
  return (
    <section className="post-tab">
      <h2 className="a11y-hidden">게시글 보기 유형 고르기</h2>
      <div className="tab-btn-wrap">
        <button type="button" className={`btn-post-list ${listViewOn ? 'on' : ''}`} onClick={() => isListViewOn(true)}>
          <span className="a11y-hidden">목록형</span>
        </button>
        <button type="button" className={`btn-post-album ${listViewOn ? '' : 'on'}`} onClick={() => isListViewOn(false)}>
          <span className="a11y-hidden">앨범형</span>
        </button>
      </div>
    </section>
  );
}
