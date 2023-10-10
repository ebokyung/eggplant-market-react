import { defaultAxios } from '../../../libs/axios';

export const getProductAPI = async productId => {
  try {
    const res = await defaultAxios.get(`/product/detail/${productId}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
