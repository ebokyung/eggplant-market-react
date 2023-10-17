import { defaultAxios } from '../../../libs/api/axios';
import { storage } from '../../../utils/storage';

// 둘다 공백 : "이메일 또는 비밀번호를 입력해주세요."
// 이메일만 공백 : "이메일을 입력해주세요."
// 비밀번호 공백 : "패스워드를 입력해주세요."
// 로그인 실패 "이메일 또는 비밀번호가 일치하지 않습니다."
// "status": 422

export const signInApi = async loginInfo => {
  try {
    const res = await defaultAxios.post('/user/login', { user: loginInfo });

    if (res.data.status === 422) {
      return res.data;
    }
    storage.setToken(res.data.user.token);
    storage.setAccountName(res.data.user.accountname);
    return { status: 200 };
  } catch (e) {
    return e;
  }
};
