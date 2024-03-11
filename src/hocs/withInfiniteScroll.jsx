import React, { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash'; //
import { getDocumentHeight, getScrollTop } from '../utils/scroll';
import { defaultAxios } from '../libs/api/axios';

const getData = async (url, cnt, page) => {
  return defaultAxios.get(`${url}?skip=${page * cnt}&limit=${cnt}`);
};

const withInfiniteScroll = (Element, url, cnt) => {
  return function 무한스크롤컴포넌트(props) {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const handleScroll = throttle(async () => {
      if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
        setPage(prev => prev + 1);
      }
    }, 500);
    const handleScrollEvent = useCallback(handleScroll);

    const loadData = async () => {
      const res = await getData(url, cnt, page);
      // error 처리
      if (Array.isArray(res.data)) {
        if (res.data.length === 0) {
          setHasMoreData(false);
          return;
        }
        setData(prev => [...prev, ...res.data]);
      } else {
        if (Object.values(res.data)[0].length === 0) {
          setHasMoreData(false);
          return;
        }
        setData(prev => [...prev, ...Object.values(res.data)[0]]);
      }
    };

    const fetchData = useCallback(async () => {
      await loadData();
      setIsLoading(false);
    });

    useEffect(() => {
      if (hasMoreData) {
        setIsLoading(true);
        fetchData();
      } else {
        window.removeEventListener('scroll', handleScrollEvent);
      }
    }, [page]);

    useEffect(() => {
      window.addEventListener('scroll', handleScrollEvent);
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    return (
      <>
        <Element {...props} data={data} />
        {isLoading && '스피너...'}
      </>
    );
  };
};

export default withInfiniteScroll;
