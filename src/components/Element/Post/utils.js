import { checkImageUrl } from '../../../utils/imageUrlProcess';
import { imgReg } from '../../../libs/constant/regex';

function returnTextContentTag(path) {
  switch (path) {
    case 'profile':
      return 'h3';
    case 'post':
      return 'p';
    default:
      return 'h2';
  }
}

function 이미지전처리(image) {
  return image
    .split(imgReg)
    .filter(img => !!img)
    .map(img => checkImageUrl(img, 'post'));
}

export { returnTextContentTag, 이미지전처리 };
