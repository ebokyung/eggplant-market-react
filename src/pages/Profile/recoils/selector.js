import { selectorFamily } from 'recoil';
import { defaultAxios } from '../../../libs/api/axios';

export const userProfileInfoState = selectorFamily({
  key: 'profileData/get',
  get: accountname => async () => {
    // if (!accountname) return null;
    const res = await defaultAxios.get(`/profile/${accountname}`);
    return res.data.profile;
  },
});

export const userProductState = selectorFamily({
  key: 'productData/get',
  get: accountname => async () => {
    // if (!accountname) return null;
    const res = await defaultAxios.get(`/product/${accountname}`);
    return res.data.product;
  },
});
