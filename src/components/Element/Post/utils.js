import { checkImageUrl } from '../../../utils/imageUrlProcess';
import { imgReg } from '../../../libs/constant/regex';

function returnTextTag(path) {
  switch (path) {
    case 'profile':
      return 'h3';
    case 'post':
      return 'p';
    default:
      return 'h2';
  }
}

function 이미지문자열전처리(image) {
  return image
    .split(imgReg)
    .filter(img => !!img)
    .map(img => checkImageUrl(img, 'post'));
}

export { returnTextTag, 이미지문자열전처리 };
