import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../../../components/Element/Header/Header';
import uploadIcon from '../../../assets/icon/upload-file.svg';

export default function SkeletonPosting() {
  return (
    <>
      <Header page="upload">
        <Skeleton width={90} height={30} />
      </Header>
      <main className="main-posting">
        <div className="l_main-posting">
          <div className="profile-img user">
            <Skeleton style={{ display: 'block', height: '100%' }} />
          </div>
          <form action="" className="posting-form">
            <Skeleton className="textarea" height="150px" />
            <ul className="upload-imgs-list">
              <li>
                <Skeleton className="posting-img-cover" style={{ boxShadow: 'none' }} />
              </li>
            </ul>
            {/* 일부로 작동 가능한 버튼을 만든 건가요? */}
            <label className="input-file-btn" htmlFor="input-file">
              <img id="image-upload-btn" src={uploadIcon} alt="" />
              <input type="file" id="input-file" accept="image/*" multiple />
            </label>
          </form>
        </div>
      </main>
    </>
  );
}
