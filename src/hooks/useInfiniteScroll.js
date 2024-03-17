import { throttle } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import { getDocumentHeight, getScrollTop } from '../utils/scroll';

export const useInfiniteScroll = fetchData => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [fetchStatus, setFetchStatus] = useState({ isLoading: true, isFetching: true });

  const handleScroll = throttle(async () => {
    if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
      setFetchStatus(prev => ({ ...prev, isFetching: true }));
    }
  }, 500);
  const handleScrollEvent = useCallback(handleScroll);

  const loadData = async () => {
    const newData = await fetchData(page);
    if (newData.length === 0) {
      setHasMoreData(false);
      return;
    }
    setData(prev => prev.concat(newData));
  };

  const executeLoadData = useCallback(async () => {
    await loadData();
    setPage(prev => prev + 1);
    setFetchStatus(prev => ({ ...prev, isLoading: false, isFetching: false }));
  });

  useEffect(() => {
    if (hasMoreData && fetchStatus.isFetching) executeLoadData();
    else if (!hasMoreData) setFetchStatus(prev => ({ ...prev, isLoading: false, isFetching: false }));
  }, [fetchStatus.isFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return { data, fetchStatus };
};
