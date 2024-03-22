import defaultProfile from '../assets/basic-profile.png';
import hcProfile from '../assets/basic-profile-hc.png';
import defaultError from '../assets/error-image.png';
import hcError from '../assets/error-image-hc.png';

const LIGHT_PROFILE = '1687141773353.png';
const HC_PROFILE = '1687827693364.png';
const LIGHT_POST = '1687742174893.png';
const HC_POST = '1687742585629.png';
const BASE_URL = 'https://api.mandarin.weniv.co.kr/';

function setDefaultImage(type) {
  let Light;
  let Contrast;

  if (type === 'profile') {
    Light = defaultProfile;
    Contrast = hcProfile;
  } else if (type === 'post') {
    Light = defaultError;
    Contrast = hcError;
  } else {
    console.error('Error');
  }

  return { Light, Contrast };
}

function processName(imgString) {
  let newImg = imgString;

  if (newImg.includes('madarin.api')) {
    newImg = newImg.replaceAll('mandarin.api', 'api.mandarin');
  }

  const pattern = BASE_URL.repeat(2);

  while (newImg.includes(pattern)) {
    newImg = newImg.replace(pattern, BASE_URL);
  }

  return newImg;
}

function getFileName(imgString) {
  const regex = /(\d+)\.(PNG|JPG|png|svg|jpg|jpeg|gif|webp)$/;
  const FILENAME_LEGNTH = 13;

  const match = imgString.match(regex);
  const fileNameWithExtension = match && match[1].length === FILENAME_LEGNTH ? `${match[1]}.${match[2]}` : null;

  return fileNameWithExtension;
}

export function getImage({ img, type }) {
  const theme = localStorage.getItem('theme');
  const { Light, Contrast } = setDefaultImage(type);

  // toString
  const imgToString = img.toString();

  if (imgToString.includes('Ellipse')) {
    if (theme === 'light') return Light;
    if (theme === 'highContrast') return Contrast;
  }

  // url 정제
  const imgURL = processName(imgToString);
  // url에서 파일 이름 떼오기
  const fileNameWithExtension = getFileName(imgURL);

  if (fileNameWithExtension === null) {
    if (theme === 'light') return Light;
    if (theme === 'highContrast') return Contrast;
  }

  // 디폴트 이미지 1차 리턴
  switch (fileNameWithExtension) {
    case LIGHT_PROFILE:
    case LIGHT_POST:
      return Light;
    case HC_PROFILE:
    case HC_POST:
      return Contrast;
    default:
      break;
  }

  // 최종 리턴
  if (imgToString.includes('Ellipse') || fileNameWithExtension === null) {
    if (theme === 'light') return Light;
    if (theme === 'highContrast') return Contrast;
  }

  return BASE_URL + fileNameWithExtension;
}

// export function checkImageUrl(Img, position) {
//   const theme = localStorage.getItem('theme');
//   const LightProfile = defaultProfile;
//   const LightPost = defaultError;
//   const ContrastProfile = hcProfile;
//   const ContrastPost = hcError;

//   Img += '';

//   if (Img.includes('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/')) {
//     const result = Img.replace('https://api.mandarin.weniv.co.kr/https://api.mandarin.weniv.co.kr/', 'https://api.mandarin.weniv.co.kr/');
//     return checkImageUrl(result, position);
//   }
//   if (Img.includes('mandarin.api')) {
//     const result = Img.replace('mandarin.api', 'api.mandarin');
//     return checkImageUrl(result, position);
//   }

//   const match = Img.match(/(\d+)\.(PNG|JPG|png|svg|jpg|jpeg|gif|webp)$/);
//   const fileNameWithExtension = match && match[1].length === 13 ? `${match[1]}.${match[2]}` : null;
//   if (fileNameWithExtension) {
//     return `https://api.mandarin.weniv.co.kr/${fileNameWithExtension}`;
//   }

//   if (Img.includes('Ellipse') || !fileNameWithExtension) {
//     if (position === 'profile') {
//       if (theme === 'light') return LightProfile;
//       if (theme === 'highContrast') return ContrastProfile;
//     }
//     if (position === 'post') {
//       if (theme === 'light') return LightPost;
//       if (theme === 'highContrast') return ContrastPost;
//     }
//   }
// }
