/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Footer from '../../../components/Element/Navbar/Navbar';
import { getSearchAPI } from '../api';
import { HeaderSearch } from '../../../components/Element/Header/HeaderSearch';
import { handleDimension } from '../util';
import '../style/Search.scss';

const SearchItem = lazy(() => import('../components/SearchItem'));

export default function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    let timer;
    if (searchKeyword) {
      setIsLoading(true);
      timer = setTimeout(async () => {
        const result = await getSearchAPI(searchKeyword);
        setIsLoading(false);
        setData(handleDimension(result));
      }, 500); // 0.5초 대기 후 검색 시작
    }
    if (searchKeyword === '') {
      setData([]);
      setIsLoading(false);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [searchKeyword]);

  const handleSearch = e => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <HeaderSearch page="search" searchKeyword={searchKeyword} handleSearch={handleSearch} />
      <main className="main-with-nav">
        <ul className="search-user-list">
          <Suspense fallback={<div />}>
            {isLoading ? (
              <li>
                <div className="user-container">
                  <div className="profile-img item">
                    <Skeleton style={{ display: 'block', height: '100%' }} />
                  </div>
                  <div className="user-info">
                    <Skeleton className="user-name" width={250} />
                    <Skeleton className="user-id before-none" width={150} />
                  </div>
                </div>
              </li>
            ) : searchKeyword !== '' && data.length === 0 ? (
              <p className="no-data">검색결과가 없습니다.</p>
            ) : (
              data?.map(result => <SearchItem key={result._id} user={result} keyword={searchKeyword} />)
            )}
          </Suspense>
        </ul>
      </main>
      <Footer />
    </>
  );
}
