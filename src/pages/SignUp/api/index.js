import { defaultAxios } from '../../../libs/api/axios';

export const postSignUpAPI = async data => {
  try {
    const res = await defaultAxios.post(`/user`, {
      user: { ...data },
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
