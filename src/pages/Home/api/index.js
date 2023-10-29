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
