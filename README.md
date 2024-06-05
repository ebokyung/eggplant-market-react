# EggplantMarket

> 배포 URL: </br>id: eggplant@market.com <br>pw: 123123123
> <br />

```
node : v18.18.2

npm start
```

## 팀원 소개

|                                                                      **박재영**                                                                       |                                                                        **이보경**                                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" height="210" alt="jyp" src="https://user-images.githubusercontent.com/121578822/249660606-75372b99-49e0-4408-bdce-4dfb6145a070.png"> | <img width="180" height="210" alt="bokyung" src="https://user-images.githubusercontent.com/121578822/249660143-c577ac7b-a4bf-4345-a209-0a481b3be82b.png"> |
|                                                        [ GitHub ](https://github.com/jypark38)                                                        |                                                          [ GitHub ](https://github.com/ebokyung)                                                          |

<br />

## 목차

1. [프로젝트 소개](#intro)
2. [기술 스택](#technology)
3. [역할 분담](#role)
4. [주요 기능](#mainFunction)
5. [페이지 기능](#pageFunction)
6. [파일 구조](#tree)
7. [컨벤션](#convention)

<br />

## <span id = "intro">1. 프로젝트 소개<span>

### [프로젝트 설명]

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/90684277/284291017-33d0c168-10e4-4ae8-87fa-a4f660b3bb4b.jpg">

가지마켓은 나눔의 정신을 실천하고 사회적 가치를 실현하는데 기여할 수 있는 소중한 플랫폼입니다. 함께 가치를 지켜가며 더 나은 세상을 만들어가보세요. :)

### [프로젝트 기간]

- 총 개발 기간 :

### [프로젝트 목표]

- 바닐라 자바스크립트로 개발한 가지마켓 프로젝트 리액트로 마이그레이션

<br />

## <span id = "technology">2. 기술 스택<span>

<table>
<tr>
 <td align="center">사용 기술</td>
 <td>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">&nbsp 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">&nbsp    
  <img src="https://img.shields.io/badge/Recoil-blue?style=for-the-badge&logo=recoil&logoColor=white">&nbsp  
  <img alt="SASS" src ="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/axios-671ddf?style=for-the-badge&logo=axios&logoColor=white">&nbsp
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>

<br />

## <span id = "role">3. 역할 분담<span>

<br />

## <span id = "mainFunction">4. 주요 기능<span>

- 로그인 / 회원가입
  - 로그인
  - 회원가입
  - 유효성 검사
  - 프로필 설정
- 피드
  - 게시글 목록
- 검색
  - 유저 검색
- 게시물
  - 게시물 작성 / 수정 / 삭제
  - 댓글 게시 / 삭제
  - 이미지 업로드 / 수정
- 채팅 (마크업만 진행)
  - 채팅 리스트
  - 채팅창
- 마이 프로필
  - 로그아웃
  - 프로필 수정
  - 팔로우 / 팔로잉
  - 판매 상품 업로드 / 수정 / 삭제
  - 게시글 목록 - 목록형/앨범형
- 유저 프로필
  - 팔로우 / 팔로잉

<br />
<img width= "800" src="https://github.com/ebokyung/eggplant-market-react/assets/126536351/591515db-14f2-4cb4-81ba-efc307e660e9">
<br />

## <span id = "pageFunction">5. 페이지 기능</span>

### 1) 로그인/회원가입

|                                                            [로그인]                                                             |                                                           [로그인-이메일오류]                                                           |                                                              [로그인-실패]                                                               |
| :-----------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------: |
| ![로그인-성공](https://github.com/ebokyung/eggplant-market-react/assets/126536351/ddfd6826-807c-4fc1-929c-0781f1d2e622) | ![로그인-이메일오류](https://github.com/ebokyung/eggplant-market-react/assets/126536351/1c5a560c-5fa9-4f43-817d-059949b8963b) | ![로그인-로그인실패](https://github.com/ebokyung/eggplant-market-react/assets/126536351/aebc5bd2-0e65-45b6-8b42-cd32fba43e34) |

|                                                         [회원가입]                                                         |
| :------------------------------------------------------------------------------------------------------------------------: |
| ![회원가입](https://github.com/ebokyung/eggplant-market-react/assets/126536351/f42cf68b-6d06-4a97-8a5f-15e906f4518f) |

<br />

### 2) 홈

|                                                       [홈-게시글 상세 이동]                                                        |                                                       [홈-피드 무한 스크롤]                                                        |
| :--------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| ![홈-게시글상세](https://github.com/ebokyung/eggplant-market-react/assets/126536351/80032df0-fce1-4e92-b88a-2c0b0496f07c) | ![홈-무한스크롤](https://github.com/ebokyung/eggplant-market-react/assets/126536351/70ac8e6d-402e-4f8d-a931-bd10acdacd41) |

|                                                       [채팅(UI)]                                                       |                                                        [검색]                                                        |
| :--------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| ![채팅-UI](https://github.com/ebokyung/eggplant-market-react/assets/126536351/d8ebfa34-2be1-4399-9df8-2d50a38f6580) | ![검색](https://github.com/ebokyung/eggplant-market-react/assets/126536351/b73f569a-5f5c-4590-bf95-e7e876d0d835) |

<br />

### 3) 게시글

|                                                         [게시글 - 작성]                                                         |                                                        [게시글 - 수정]                                                         |                                                        [게시글 - 삭제]                                                         |
| :-----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------: |
| ![게시글-작성](https://github.com/ebokyung/eggplant-market-react/assets/126536351/32f0f52d-6db0-4186-80c1-97c105a8f982) | ![게시글-수정](https://github.com/ebokyung/eggplant-market-react/assets/126536351/b60d1d0a-ea17-487f-90d0-711bf5b23b05) | ![게시글-삭제](https://github.com/ebokyung/eggplant-market-react/assets/126536351/4f462c49-59f3-44cc-9214-e431c33aca57) |

|                                                           [게시글 상세 - 댓글 작성]                                                            |                                                           [게시글 상세 - 댓글 삭제]                                                           |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| ![게시글상세-댓글작성](https://github.com/ebokyung/eggplant-market-react/assets/126536351/de358a73-a77c-4e6a-935a-60b281701062) | ![게시글상세-댓글삭제](https://github.com/ebokyung/eggplant-market-react/assets/126536351/72457f06-7540-42d7-8e02-4edfef41e86d) |

<br />

### 4) 상품판매

|                                                         [상품 - 등록]                                                         |                                                       [상품 - 수정]                                                        |                                                       [상품 - 삭제]                                                        |
| :---------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![상품업로드](https://github.com/ebokyung/eggplant-market-react/assets/90684277/bd9c3e41-2a9a-41de-ae77-ee358f03b99e) | ![상품수정](https://github.com/ebokyung/eggplant-market-react/assets/90684277/dffcefc6-3a61-4c7a-9bd9-13bdd43741b5) | ![상품삭제](https://github.com/ebokyung/eggplant-market-react/assets/90684277/e688abb9-f65b-4953-bff4-e96173eb3742) |

<br />

### 5) 프로필

|                                                        [나의 프로필]                                                        |                                                                 [나의 팔로우/팔로잉 목록]                                                                  |                                                               [다른 사람의 팔로우/팔로잉 목록]                                                               |
| :-------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
| ![나의프로필](https://github.com/ebokyung/eggplant-market-react/assets/90684277/b44201e6-7c2e-43c3-94d1-33a2e69443fa) | ![나의프로필 팔로워:팔로잉목록](https://github.com/ebokyung/eggplant-market-react/assets/90684277/a54d8118-baf3-4532-ba9d-3df3ad808d33) | ![다른사람프로필에서 팔로워목록](https://github.com/ebokyung/eggplant-market-react/assets/90684277/6ccb6e00-0035-41fc-b4ce-19b44beb8e09) |

<br />

### 6) 고대비 테마

|                                                          [고대비테마-적용]                                                           |                                                         [고대비테마-해제]                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| ![고대비테마-적용](https://github.com/ebokyung/eggplant-market-react/assets/126536351/b9427b5c-0dbf-40c0-b9ab-8d0efe414830) | ![고대비테마-해제](https://github.com/ebokyung/eggplant-market-react/assets/126536351/612ee596-f2ff-4728-8aa9-132984198908) |

<br />

### 7) 키보드 접근성

|                                                       [Tab으로 focus 이동]                                                        |                                                     [skip navigation]                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![tab으로 focus이동](https://github.com/ebokyung/eggplant-market-react/assets/90684277/256a2c9d-feab-409a-9669-c20db07effc2) | ![skip navigation](https://github.com/ebokyung/eggplant-market-react/assets/90684277/79bb3163-690d-49d2-a36d-45d1239c23f0) |

<br />

### 8) 반응형

|                                                         [반응형]                                                         |
| :----------------------------------------------------------------------------------------------------------------------: |
| ![반응형](https://github.com/ebokyung/eggplant-market-react/assets/126536351/08c95f49-cd3d-4c7f-a0ec-004fdd4333ab) |

## <span id = "tree">6. 파일 구조</span>

```bash
기본포맷
├── 📁 src
│   ├── 📁 assets
│   ├── 📁 components
│   ├── 📁 config
│   ├── 📁 hooks
│   ├── 📁 libs
│   │   ├── 📁 api
│   │   ├── 📁 constant
│   │   ├── 📁 dummy
│   │   └── Meta.jsx
│   ├── 📁 pages
│   │   └── 📁 page
│   │       ├── 📁 api
│   │       ├── 📁 style
│   │       ├── 📁 routes
│   │       └── 📁 components
│   ├── 📁 recoil
│   ├── 📁 routes
│   ├── 📁 styles
│   │   ├── 📁 font
│   │   └── 📁 scss
│   ├── 📁 utils
│   ├── App.js
│   └── index.js
├── package.json
├── package-lock.json
├── .prettierrc
├── .eslintrc
└── README.md
```

<br />

## <span id = "convention">7. 컨벤션<span>

### [작업 관리]

- [ 🔗issues ](https://github.com/FRONTENDSCHOOL5/final-19-EggplantMarket/issues)

<br />

### [커밋 컨벤션]

- Git commit message
  - `#이슈번호 <아래컨벤션> : <커밋내용>`

```
- add : 새로운 기능 추가
- fix : 버그 수정(단순 수정 X), 충돌 해결
- docs : 문서 수정
- chore : 코드의 논리에 영향이 없는 작업. 변수명 변경 등등
- design : 마크업 및 디자인 구현, 변경
- rename : 파일 이름의 변경 or 파일의 이동
- remove : 파일의 삭제
- refactor : 리팩토링
- test : 테스트 관련 코드 추가 및 삭제 등
- comment : 필요한 주석 추가 및 변경
```

<br />

### [코드 컨벤션]

- .prettierrc
  ```
  {
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "printWidth": 200,
  "arrowParens": "avoid",
  "trailingComma": "all"
  }
  ```
- .eslintrc

  ```
  {
    "env": {
      "browser": true,
      "es6": true,
      "node": true
    },
    "parserOptions": {
      "parser": "@babel/eslint-parser",
      "ecmaVersion": 2020
    },
    "extends": ["airbnb", "eslint:recommended", "plugin:prettier/recommended"],
    "rules": {
      "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
      "react/prop-types": "off",
      "import/newline-after-import": "off",
      "react/jsx-props-no-spreading": ["warn"],
      "import/prefer-default-export": "off",
      "no-underscore-dangle": "off",
      "no-unused-expressions": "off",
      "jsx-a11y/no-noninteractive-tabindex": [
        "error",
        {
          "tags": ["label"],
          "roles": ["tabpanel"],
          "allowExpressionValues": true
        }
      ],
      "import/no-extraneous-dependencies": 0
    }
  }

  ```

<br />
