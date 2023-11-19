import { useEffect } from 'react';

export const useLazyLoad = (imgRef, options = {}) => {
  useEffect(() => {
    if (!imgRef.current) return;

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // eslint-disable-next-line no-param-reassign
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    imgRef.current.forEach(i => observer.observe(i));

    // eslint-disable-next-line consistent-return
    return () => imgRef.current.forEach(i => observer.disconnect(i));
  }, [imgRef, options]);
};
