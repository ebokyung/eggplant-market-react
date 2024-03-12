import React, { useCallback, useEffect, useState } from 'react';
import { throttle } from 'lodash'; //
import { getDocumentHeight, getScrollTop } from '../utils/scroll';
import { defaultAxios } from '../libs/api/axios';
import Spinner from '../components/Element/Spinner/Spinner';

const getData = async (url, cnt, page) => {
  return defaultAxios.get(`${url}?skip=${page * cnt}&limit=${cnt}`);
};

const withInfiniteScroll = (Skeleton, Element, url, cnt) => {
  return function 무한스크롤컴포넌트(props) {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const handleScroll = throttle(async () => {
      if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
        setIsLoading(true);
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
        setData(prev => prev.concat(res.data));
      } else {
        if (Object.values(res.data)[0].length === 0) {
          setHasMoreData(false);
          return;
        }
        setData(prev => prev.concat(Object.values(res.data)[0]));
      }
    };

    const fetchData = useCallback(async () => {
      await loadData();
      setPage(prev => prev + 1);
      setIsLoading(false);
    });

    useEffect(() => {
      if (isLoading && hasMoreData) fetchData();
      else if (!hasMoreData) setIsLoading(false);
    }, [isLoading]);

    useEffect(() => {
      window.addEventListener('scroll', handleScrollEvent);
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    if (isLoading && page === 0) return <Skeleton />;

    return (
      <>
        <Element {...props} data={data} />
        {isLoading && !!page && <Spinner />}
      </>
    );
  };
};

export default withInfiniteScroll;
