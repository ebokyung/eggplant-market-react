import { API_URL } from '../../../configs/config';
import { postImage, defaultAxios } from '../../../libs/api/axios';

export const getUserAPI = async () => {
  try {
    const res = await defaultAxios.get('/user/myinfo');
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const getPostAPI = async postId => {
  try {
    const {
      data: { post },
    } = await defaultAxios.get(`/post/${postId}`);

    return post;
  } catch (e) {
    return e;
  }
};

export const postPostImgAPI = async img => {
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

export const postingAPI = async content => {
  try {
    await defaultAxios.post('/post', content);
    return 1;
  } catch (e) {
    return e;
  }
};

export const putPostAPI = async (postId, content) => {
  try {
    await defaultAxios.put(`/post/${postId}`, content);
    return 1;
  } catch (e) {
    return e;
  }
};
