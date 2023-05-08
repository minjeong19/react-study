# 폴더 구조

```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┃ ┣ 📂Chat
 ┃ ┣ 📂IndividualMyCity
 ┃ ┣ 📂Main
 ┃ ┣ 📂MyCity
 ┃ ┣ 📂recruitBoard
 ┃ ┣ 📂StudyDetail
 ┃ ┃ ┣ 📂StudyStatusTab
 ┣ 📂pages
 ┣ 📂store
 ┣ 📂style
 ┃ ┣ 📂recruitBoard
 ┣ 📂utils
 ┣ 📜App.js
 ┣ 📜GithubRedirectHandler.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜KakaoRedirectHandler.js
```

<br>

# Git Commit & PR Message

| 태그이름 | 설명                                               |
| -------- | -------------------------------------------------- |
| Feat     | 새로운 기능을 추가할 경우                          |
| Fix      | 버그를 고친 경우                                   |
| Design   | CSS 등 사용자 UI 디자인 변경                       |
| Refactor | 프로덕션 코드 리팩토링                             |
| Rename   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
| Remove   | 파일을 삭제하는 작업만 수행하는 경우               |

<br>

# 실행 방법

## 프론트

1. 원격 저장소 복제

```
git clone https://github.com/JKyEun/dev-city.git
```

2. 프로젝트 폴더로 이동

```
cd dev-city
```

3. 필요한 node_modules 설치

```
npm install
```

4. 리액트 앱 실행

```
npm start
```

<br>

## 백엔드

1. 원격 저장소 복제

```
git clone https://github.com/JKyEun/dev-city-backend.git
```

2. 프로젝트 폴더로 이동

```
cd dev-city-backend
```

3. MongoDB 연결

```

```

4. 필요한 node_modules 설치

```
npm install
```

5. nodemon 설치

```
npm install nodemon --save-dev
```

6. 서버 실행

```
nodemon server.js
```
