import { defaultAxios, postImage } from '../../../libs/axios';
import { API_URL } from '../../../configs/config';

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

export const postProductImgAPI = async img => {
  try {
    const formData = new FormData();
    formData.append('image', img);
    const res = await postImage.post(`/image/uploadfile`, formData);
    return `${API_URL}/${res.filename}`;
  } catch (e) {
    console.log(e);
    return e;
  }
};
