import { defaultAxios } from './axios';

export function fetchClosure(reqUrl, cnt) {
  let reqCnt = 0;

  const getData = async () => {
    // eslint-disable-next-line no-plusplus
    return defaultAxios.get(`${reqUrl}?skip=${reqCnt++ * cnt}&limit=${cnt}`);
  };

  return getData;
}
