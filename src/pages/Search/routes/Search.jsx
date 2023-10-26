/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useEffect, useState } from 'react';

import Footer from '../../../components/Element/Navbar/Navbar';
import { SearchItem } from '../components/SearchItem';

import { getSearchAPI } from '../api';
import { HeaderSearch } from '../../../components/Element/Header/HeaderSearch';
import '../style/Search.scss';
import { handleDimension } from '../util';

export function Search() {
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
        {isLoading ? (
          <>검색중 스켈레톤</>
        ) : searchKeyword !== '' && data.length === 0 ? (
          <p className="no-data">검색결과가 없습니다.</p>
        ) : (
          <ul className="search-user-list">
            {data?.map(result => (
              <SearchItem key={result._id} user={result} keyword={searchKeyword} />
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
