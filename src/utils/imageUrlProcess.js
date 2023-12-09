/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import defaultProfile from '../assets/basic-profile.png';
import hcProfile from '../assets/basic-profile-hc.png';
import defaultError from '../assets/error-image.png';
import hcError from '../assets/error-image-hc.png';

export function checkImageUrl(Img, position) {
  const theme = localStorage.getItem('theme');
  const LightProfile = defaultProfile;
  const LightPost = defaultError;
  const ContrastProfile = hcProfile;
  const ContrastPost = hcError;

  Img += '';

  if (Img.includes('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/')) {
    const result = Img.replace('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
    return checkImageUrl(result, position);
  }
  if (Img.includes('mandarin.api')) {
    const result = Img.replace('mandarin.api', 'api.mandarin');
    return checkImageUrl(result, position);
  }

  const regex = /(\d+)\.(PNG|JPG|png|svg|jpg|jpeg|gif|webp)$/;
  const match = Img.match(regex);
  const fileNameWithExtension = match && match[1].length === 13 ? `${match[1]}.${match[2]}` : null;
  if (fileNameWithExtension) {
    return `https://api.mandarin.weniv.co.kr/${fileNameWithExtension}`;
  }

  if (Img.includes('Ellipse') || !fileNameWithExtension) {
    if (position === 'profile') {
      if (theme === 'light') return LightProfile;
      if (theme === 'highContrast') return ContrastProfile;
    }
    if (position === 'post') {
      if (theme === 'light') return LightPost;
      if (theme === 'highContrast') return ContrastPost;
    }
  }
}
