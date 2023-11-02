import { defaultAxios } from '../../../../libs/api/axios';

// 댓글 삭제, 댓글 신고, 게시글 삭제, 게시글 신고

export const deletePostAPI = async postid => {
  try {
    const res = await defaultAxios.delete(`/post/${postid}`);
    return res.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const postPostReportAPI = async postid => {
  try {
    const res = await defaultAxios.post(`/post/${postid}/report`);
    return res.data;
  } catch (e) {
    console.error(e);
    return e;
  }
};
