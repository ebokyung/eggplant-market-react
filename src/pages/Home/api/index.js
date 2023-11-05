import { defaultAxios } from '../../../libs/api/axios';

export const getFeedAPI = async () => {
  try {
    const res = await defaultAxios.get('/post/feed/');
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export function fetchClosure(cnt) {
  let reqCnt = 0;

  const getData = async () => {
    // eslint-disable-next-line no-plusplus
    return defaultAxios.get(`/post/feed?skip=${reqCnt++ * cnt}&limit=${cnt}`);
  };

  return getData;
}
