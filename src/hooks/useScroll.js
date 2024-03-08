import { throttle } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { getDocumentHeight, getScrollTop } from '../utils/scroll';

export const useScroll = ({ getData, setData, setIsLoading }) => {
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  const handleScroll = throttle(async () => {
    if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
      setPage(prev => prev + 1);
    }
  }, 500);
  const handleScrollEvent = useCallback(handleScroll);

  const loadData = async () => {
    const res = await getData(page);
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
    setIsLoading(false);
  });

  useEffect(() => {
    if (hasMoreData) {
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
};
