/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { useRecoilValue } from 'recoil';
import defaultProfile from '../assets/basic-profile.png';
import hcProfile from '../assets/basic-profile-hc.png';
import defaultError from '../assets/error-image.png';
import hcError from '../assets/error-image-hc.png';
import { themeAtom } from '../recoil/theme/atoms';

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

export function getImageWithTheme({ img, type }) {
  const theme = useRecoilValue(themeAtom);

  const { Light, Contrast } = setDefaultImage(type);

  // toString
  const imgToString = `${img}`;

  if (imgToString.includes('Ellipse')) {
    if (theme === 'light') return Light;
    if (theme === 'highContrast') return Contrast;
  }

  // url 정제
  const imgURL = processName(imgToString);
  // url에서 파일 이름 떼오기
  const fileNameWithExtension = getFileName(imgURL);

  // ! 테마 정보에 맞게 리턴해야하지 않나?
  // 디폴트 이미지 1차 리턴

  switch (fileNameWithExtension) {
    case LIGHT_PROFILE:
    case LIGHT_POST:
    case HC_PROFILE:
    case HC_POST:
    case null:
      if (theme === 'light') return Light;
      if (theme === 'highContrast') return Contrast;
      break;
    default:
      break;
  }

  return BASE_URL + fileNameWithExtension;
}
