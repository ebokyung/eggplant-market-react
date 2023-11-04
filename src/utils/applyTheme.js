/* eslint-disable no-param-reassign */
import defaultError from '../assets/error-image.png';
import hcError from '../assets/error-image-hc.png';

/*
- 1. 첫 렌더링 (search-icon, symbol, logo, uploadFile-icon, profile-ellipse-img, post-error) 
      -> 각 컴포넌트에서 테마에 따른 src값 적용
- 2. 동적으로 변할때 테마 적용 (profile-ellipse-img, post-error) 
      -> useEffect atom
*/

export function applyThemeToBackground(theme = 'light') {
  if (theme === 'highContrast') {
    if (document.querySelector('.login-body-color')) document.body.style.backgroundColor = '#E4D6FF';
    else document.body.style.backgroundColor = '#000000';
  }
  if (theme === 'light') {
    if (document.querySelector('.login-body-color')) document.body.style.backgroundColor = '#635CA5';
    else if (document.querySelector('.profile-body-color')) document.body.style.backgroundColor = '#f2f2f2';
    else document.body.style.backgroundColor = '#ffffff';
  }
}

// TODO: post-img-error나타나는 경우 확인하고 테마에 따른 이미지 적용
export function applyThemeToErrorImage(theme) {
  const LightPost = defaultError;
  const ContrastPost = hcError;
  const LightPostUrl = 'https://api.mandarin.weniv.co.kr/1687742174893.png';
  const ContrastPostUrl = 'https://api.mandarin.weniv.co.kr/1687742585629.png';

  if (theme === 'highContrast') {
    document.querySelectorAll('img').forEach(item => {
      if (item.src === LightPost || item.src === LightPostUrl) item.src = ContrastPost;
    });
  } else {
    document.querySelectorAll('img').forEach(item => {
      if (item.src === ContrastPost || item.src === ContrastPostUrl) item.src = LightPost;
    });
  }
}
