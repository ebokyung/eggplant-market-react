import { defaultAxios } from '../../../libs/api/axios';
import { storage } from '../../../utils/storage';

export const getMyProfileAPI = async () => {
  try {
    const res = await defaultAxios.get(`/profile/${storage.getAccountName()}`);
    return res.data.profile;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const putEditProfileAPI = async data => {
  try {
    const res = await defaultAxios.put(`/user`, {
      user: { ...data },
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
