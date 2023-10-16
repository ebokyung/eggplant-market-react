import { defaultAxios } from '../../../libs/api/axios';

export const getProfileAPI = async accountname => {
  try {
    const res = await defaultAxios.get(`/profile/${accountname}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getProductAPI = async accountname => {
  try {
    const res = await defaultAxios.get(`/product/${accountname}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getPostAPI = async accountname => {
  try {
    const res = await defaultAxios.get(`/post/${accountname}/userpost`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

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
