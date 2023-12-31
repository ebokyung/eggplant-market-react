import { throttle } from 'lodash';
import { useEffect } from 'react';
import { getDocumentHeight, getScrollTop } from '../utils/scroll';
import { fetchClosure } from '../libs/api/fetchClosure';

export const scrollHook = ({ url, cnt, setData, setIsLoading, hasMoreData, setHasMoreData }) => {
  const getData = fetchClosure(url, cnt);

  useEffect(() => {
    (async () => {
      const res = await getData();
      if (Array.isArray(res.data)) {
        setData(res.data);
      } else {
        setData(Object.values(res.data)[0]);
      }
      if (setIsLoading) {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleScroll = async () => {
    if (!hasMoreData) return;
    if (Math.ceil(getScrollTop()) >= getDocumentHeight() - window.innerHeight) {
      const res = await getData();

      if (Array.isArray(res.data)) {
        if (res.data.length === 0) setHasMoreData(false);
        setData(prev => prev.concat(res.data));
      } else {
        if (Object.values(res.data)[0].length === 0) setHasMoreData(false);
        setData(prev => prev.concat(Object.values(res.data)[0]));
      }
    }
  };

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 500);
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);
};
