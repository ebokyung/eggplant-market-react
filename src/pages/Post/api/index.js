import { defaultAxios } from '../../../libs/api/axios';

const getUserAPI = async () => {
  try {
    const res = await defaultAxios.get('/user/myinfo');
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getPostAPI = async postId => {
  try {
    const res = await defaultAxios.get(`/post/${postId}`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getCommentsAPI = async postId => {
  try {
    const res = await defaultAxios.get(`/post/${postId}/comments`);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getPostDetailAPI = async postId => {
  try {
    const [{ user }, { post }, { comments }] = await Promise.all([getUserAPI(), getPostAPI(postId), getCommentsAPI(postId)]);
    return [{ image: user.image }, { post }, { comments }];
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const postCommentAPI = async (postId, content) => {
  try {
    const res = await defaultAxios.post(`/post/${postId}/comments`, content);
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
