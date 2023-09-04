import React from 'react';
import Header from '../../../components/Element/Header/Header';
import Footer from '../../../components/Element/Navbar/Navbar';
import { searchList } from '../../../libs/dummy';
import { SearchItem } from '../components/SearchItem';

import style from '../style/Search.module.scss';

export function Search() {
  const data = searchList;
  return (
    <>
      <Header page="search" />
      <main className="main-with-nav">
        <ul className={style.searchUserList}>
          {data.map(result => (
            // eslint-disable-next-line no-underscore-dangle
            <SearchItem key={result._id} user={result} keyword="가지" />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
