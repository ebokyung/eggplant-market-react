import { defaultAxios } from '../../../libs/api/axios';

export const postFollowAPI = async someone => {
  try {
    const res = await defaultAxios.post(`/profile/${someone}/follow`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteFollowAPI = async someone => {
  try {
    const res = await defaultAxios.delete(`/profile/${someone}/unfollow`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const deleteProductAPI = async productid => {
  try {
    const res = await defaultAxios.delete(`/product/${productid}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
