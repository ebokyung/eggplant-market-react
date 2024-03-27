import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeAtom } from '../../../recoil/theme/atoms';
import searchIcon from '../../../assets/icon/icon-search.svg';
import searchIconHc from '../../../assets/icon/icon-search-hc.svg';

function ButtonSearch({ isViewText = false, curPage = '' }) {
  const theme = useRecoilValue(themeAtom);
  const searchImgSrc = theme === 'light' ? searchIcon : searchIconHc;

  return (
    <Link to="/search" className={curPage === '/search' ? 'btn-search here' : 'btn-search'}>
      <img className="search-icon" src={searchImgSrc} alt="검색하기" />
      <span className={isViewText ? '' : 'a11y-hidden'}>검색</span>
    </Link>
  );
}
export default React.memo(ButtonSearch);
