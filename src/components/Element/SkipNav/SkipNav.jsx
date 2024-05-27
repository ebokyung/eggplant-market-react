import React from 'react';
import './SkipNav.scss';

// ! 리팩토링 필요
export function SkipNav({ page }) {
  if (page === 'home') {
    return (
      <div className={`skip-nav ${localStorage.getItem('theme') === 'light' ? null : 'highContrast'}`}>
        <a href="#header" className="skip-link">
          상단 탭으로 가기
        </a>
        <a href="#main" className="skip-link">
          메인 콘텐츠로 가기
        </a>
        <a href="#footer" className="skip-link">
          하단 탭으로 가기
        </a>
      </div>
    );
  }
  if (page === 'profile') {
    return (
      <div className={`skip-nav ${localStorage.getItem('theme') === 'light' ? null : 'highContrast'}`}>
        <a href="#header" className="skip-link">
          상단 탭으로 가기
        </a>
        <a href="#profile" className="skip-link">
          프로필 정보로 가기
        </a>
        <a href="#product" className="skip-link">
          판매중인 상품으로 가기
        </a>
        <a href="#post" className="skip-link">
          게시글 목록으로 가기
        </a>
        <a href="#footer" className="skip-link">
          하단 탭으로 가기
        </a>
      </div>
    );
  }
  if (page === 'post') {
    return (
      <div className={`skip-nav ${localStorage.getItem('theme') === 'light' ? null : 'highContrast'}`}>
        <a href="#header" className="skip-link">
          상단 탭으로 가기
        </a>
        <a href="#post" className="skip-link">
          게시글로 가기
        </a>
        <a href="#comment" className="skip-link">
          댓글로 가기
        </a>
        <a href="#footer" className="skip-link">
          댓글 입력하기
        </a>
      </div>
    );
  }
}
