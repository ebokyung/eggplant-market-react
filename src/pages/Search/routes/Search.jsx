/* eslint-disable import/no-extraneous-dependencies */
import { debounce } from 'lodash';
import React, { useState } from 'react';

import Footer from '../../../components/Element/Navbar/Navbar';
import { searchList } from '../../../libs/dummy';
import { SearchItem } from '../components/SearchItem';

import { getSearchAPI } from '../api/index';
import { HeaderSearch } from '../../../components/Element/Header/HeaderSearch';
import '../style/Search.scss';

export function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const data = searchList;
  const debouncedSearch = debounce(async value => {
    const result = await getSearchAPI(value);
    console.log(result);
    setIsLoading(false);
  }, 1000); // 디바운스 대기 시간 (밀리초)

  const handleSearch = async e => {
    setIsLoading(true);

    const { value } = e.target;
    setSearchKeyword(value);
    debouncedSearch(value);
  };

  return (
    <>
      <HeaderSearch page="search" searchKeyword={searchKeyword} handleSearch={handleSearch} />
      <main className="main-with-nav">
        {isLoading ? (
          <>검색중</>
        ) : (
          <ul className="search-user-list">
            {data?.map(result => (
              <SearchItem key={result._id} user={result} keyword="가지" />
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
