import React, { createElement } from 'react';
import { Link } from 'react-router-dom';

// const userContext = createContext({
//   id: '',
//   username: '',
//   accountname: '',
//   image: '',
//   intro: '',
// });

const useProfileImage = profileImage => {
  const theme = useRecoilValue(themeAtom);

  const lightProfileUrl = 'https://api.mandarin.weniv.co.kr/1687141773353.png';
  const hcProfileUrl = 'https://api.mandarin.weniv.co.kr/1687827693364.png';

  let imgsrc;

  if (profileImage instanceof File) imgsrc = URL.createObjectURL(profileImage);
  else if (profileImage === lightProfileUrl || profileImage === hcProfileUrl) imgsrc = checkImageUrl('Ellipse', 'profile');
  else imgsrc = checkImageUrl(profileImage, 'profile');

  useEffect(() => {
    imgsrc = theme === 'light' ? defaultProfile : hcProfile;
  }, [theme]);

  return imgsrc;
};

function ProfileImage({ src }) {
  const imgsrc = useProfileImage(profileImage);

  return (
    <div>
      <img src={src} alt="" />
    </div>
  );
}

function Name({ value, tagName }) {
  return createElement(tagName, { className: 'user-name' }, value);
}

function SubInfo({ value, type }) {
  let className = '';

  switch (type) {
    case 'accountname':
      className = 'user-id';
      break;
    case 'intro':
      className = 'user-intro ellipsis';
      break;
    case 'chat':
      className = 'chat-comment ellipsis';
      break;
    default:
      return null;
  }

  return <p className={className}>{value}</p>;
}

// 경우의 수
// post
/// name : p, subclass user-id
// chat
/// name : p, subclass chat-content ellipsis
// search
/// name : h3, subclass user-id
// follow
/// name : strong subclass user-intro ellipsis
// comment
/// name : strong subclass null & null -> 렌더링 x

const categoryMap = {
  post: { NameTag: 'p', detailCategory: 'id' },
  chat: { NameTag: 'p', detailCategory: 'chat' },
  search: { NameTag: 'h3', detailCategory: 'id' },
  follow: { NameTag: 'strong', detailCategory: 'intro' },
  comment: { NameTag: 'strong', detailCategory: null },
};

const detailClassMap = {
  id: 'user-id',
  chat: 'chat-content ellipsis',
  intro: 'user-intro ellipsis',
};

function User({ children, accountname }) {
  return (
    <Link className="user-info-container" to={`/profile?accountName=${accountname}`}>
      {children}
    </Link>
  );
}

User.ProfileImage = ProfileImage;
User.Name = Name;
User.SubInfo = SubInfo;

function PostUser({ author }) {
  const { username, accountname, image } = author;
  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} />
      <div className="user-info">
        <User.Name value={username} tagName="h3" />
        <User.SubInfo value={accountname} type="accountname" />
      </div>
    </User>
  );
}
