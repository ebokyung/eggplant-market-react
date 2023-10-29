import { defaultAxios } from '../../../libs/api/axios';

export const getProductAPI = async productId => {
  try {
    const res = await defaultAxios.get(`/product/detail/${productId}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const postProductAPI = async data => {
  try {
    const res = await defaultAxios.post(`/product`, data);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const putProductAPI = async (productId, data) => {
  try {
    const res = await defaultAxios.put(`/product/${productId}`, data);
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
};
