# JU-LABO!

- 향수 관련 커머스 사이트인 [르라보](https://www.lelabofragrances.com/th-matcha-26.html) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

## 팀원

| FrontEnd / BackEnd | 팀원                   |
| :----------------: | :--------------------- |
|  <b>FrontEnd</b>   | 윤남주, 김청규, 석정도 |
|   <b>BackEnd</b>   | 최창현, 최형택, 김지연 |

### 프론트엔드

- HTML/CSS
- JavaScript(ES6+)
- React
- SASS

### 백엔드

- Django
- Python
- PyJWT
- Bcrypt

[백엔드 레포지토리](https://github.com/wecode-bootcamp-korea/29-1st-JU-LABO-backend)

## 일정

<b>2022/01/24 ~ 2022/02/11</b>

## 🚩 구현 예정 목록

1. 회원가입
2. 로그인
3. 메인페이지
4. 상품 리스트 페이지, 상품 목록 API
5. 상품 리스트 페이지, 상품 목록 API 필터링 적용
6. 상품 상세 페이지, API
7. 장바구니 기능(추가, 삭제, 수량조절)
8. 프로젝트 배포

## 📌 구현 파트

|               | 구현 파트                      |
| :-----------: | :----------------------------- |
| <b>윤남주</b> | 메인, 상품리스트, 검색, 필터링 |
| <b>김청규</b> | 헤더, 푸터, 로그인, 회원가입   |
| <b>석정도</b> | 상품상세, 장바구니             |

## 🔧 Built With

<div style="display: flex">

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

</div>

<div style="display: flex">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

</div>

<div style="display: flex">

![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

</div>

## 시연

#### 로그인 & 로그아웃

- 아이디 및 비밀번호 유효성 검사
- 회원가입 성공 시 로그인 페이지로 이동
- 로그인 성공 시 토큰발급 및 헤더 부분의 조건부 렌더링
  ![login signup](https://user-images.githubusercontent.com/39605922/153719668-819c4830-6681-4a37-94c2-aad548109c84.gif)

#### 메인페이지

- carousel를 통한 이미지 전환
- 마우스 hover 에 따른 다른 이미지 렌더링
  ![main](https://user-images.githubusercontent.com/39605922/153719735-7bd16587-c4ce-4a35-9b92-b5f19be003c8.gif)

#### 검색에서 장바구니까지

- 검색어에 해당하는 아이템 리스트를 보여주고 해당 아이템 클릭 시 디테일 페이지로 이동
- 디테일 페이지에서 원하는 ml 선택 시 그에 맞는 아이템 정보 렌더링
- Add to Cart 버튼 클릭 시 모달창이 뜨며 모달창에서 장바구니 페이지로 이동
- 장바구니에서 수량 조절에 따른 총 가격 변화 및 상품 제거
  ![searchToCart](https://user-images.githubusercontent.com/39605922/153719784-94c8bcf0-a290-4fa1-bb02-ff6233a39d14.gif)

#### 상품리스트 필터링

- ml에 다른 상품 필터링
- 상품리스트의 필터링 목록을 클릭 시 해당 필터 제거
  ![filterItemList](https://user-images.githubusercontent.com/39605922/153719820-3ccb57bf-f85c-4784-9d4c-17a1fd2164c3.gif)

#### 이스터에그 - 햄찌

- 남주님이 만들어주신 JULABO의 이스터에그
- 팀원들의 한마디 및 킹받는 햄찌 등장...
  ![hamster](https://user-images.githubusercontent.com/39605922/153719870-849ee490-5646-46ec-adf2-1847d42fc896.gif)

<br>

## ⚙ Build Installation

```bash
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm start
```

<br>

---

## Reference

- 이 프로젝트는 [르라보](https://www.lelabofragrances.com/th-matcha-26.html) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
