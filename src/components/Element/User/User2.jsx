import React, { createContext } from 'react';

const userContext = createContext({
  id: '',
  username: '',
  accountname: '',
  image: '',
  intro: '',
});

function User({ children, userInfo }) {
  console.log(userInfo);
  return (
    <userContext.Provider>
      <div>{children}</div>
    </userContext.Provider>
  );
}

function ProfileImage() {
  return (
    <div>
      <img src="" alt="" />
    </div>
  );
}

function Username() {
  return <p className="user-name">asdf</p>;
}

function SubInfo() {
  return <p>asdf</p>;
}

User.ProfileImage = ProfileImage;
User.Username = Username;
User.SubInfo = SubInfo;

/**
    <div className={`profile-img ${returnSize(category)}`}>
      <img src={imgsrc} alt="" />
    </div>
    <div className="user-info">
      <NameTag className="user-name">{userName}</NameTag>
      {detailCategory && <p className={detailClassMap[detailCategory]}>{detail}</p>}
    </div>
 */
