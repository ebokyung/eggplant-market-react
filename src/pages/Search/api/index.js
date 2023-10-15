import { defaultAxios } from '../../../libs/api/axios';

export const getSearchAPI = async keyword => {
  try {
    const res = await defaultAxios.get(`/user/searchuser/?keyword=${keyword}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
