import { useRecoilValue } from 'recoil';
import defaultProfile from '../assets/basic-profile.png';
import hcProfile from '../assets/basic-profile-hc.png';
import defaultError from '../assets/error-image.png';
import hcError from '../assets/error-image-hc.png';
import { themeAtom } from '../recoil/theme/atoms';

// 상수 정의
const LIGHT_PROFILE = '1687141773353.png';
const HC_PROFILE = '1687827693364.png';
const LIGHT_POST = '1687742174893.png';
const HC_POST = '1687742585629.png';
const BASE_URL = 'https://api.mandarin.weniv.co.kr/';

// type(profile, post)에 맞는 default Image 설정
// ? default를 어떻게 할지?
function setDefaultImage(type) {
  switch (type) {
    case 'profile':
      return {
        Light: defaultProfile,
        Contrast: hcProfile,
      };
    case 'post':
      return {
        Light: defaultError,
        Contrast: hcError,
      };
    default:
      console.error('Error');
  }

  return {};
}

// 문자열 처리
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

// imgString에서 filename 추출 (없으면 null)
function getFileName(imgString) {
  const regex = /(\d+)\.(PNG|JPG|png|svg|jpg|jpeg|gif|webp)$/;
  const FILENAME_LEGNTH = 13;

  const match = imgString.match(regex);
  const fileNameWithExtension = match && match[1].length === FILENAME_LEGNTH ? `${match[1]}.${match[2]}` : null;

  return fileNameWithExtension;
}

// 이미지 처리
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
