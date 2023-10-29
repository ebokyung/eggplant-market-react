/* eslint-disable consistent-return */
import { defaultAxios } from '../../../libs/api/axios';

export const getFollowAPI = async (accountName, currStatus) => {
  try {
    const res = await defaultAxios.get(`/profile/${accountName}/${currStatus}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const postFollowAPI = async accountName => {
  try {
    await defaultAxios.post(`/profile/${accountName}/follow`);
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const postUnfollowAPI = async accountName => {
  try {
    await defaultAxios.delete(`/profile/${accountName}/unfollow`);
  } catch (e) {
    console.log(e);
    return e;
  }
};
