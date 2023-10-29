import { API_URL } from '../../configs/config';
import { postImage } from './axios';

export const postImageAPI = async img => {
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
