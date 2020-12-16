# Real-world-next-app
https://github.com/reck1ess/next-realworld-example-app

## Api server
`https://conduit.productionready.io/api` 

- api: https://github.com/gothinkster/realworld/tree/master/api

## Main feature

### General functionality:
* Authenticate users via JWT (login/register pages + logout button on settings page)
* CRU* users (sign up & settings page - no deleting required)
* CRUD Articles
* CR*D Comments on articles (no updating required)
* GET and display paginated lists of articles
* Favorite articles
* Follow other users

### The general page breakdown
* Home page (URL: /)
  * List of tags
  * List of articles pulled from either Feed, Global, or by Tag
  * Pagination for list of articles
* Sign in/Sign up pages (URL: /user/login, /user/register)
  * Use JWT (store the token in localStorage)
* Settings page (URL: /user/settings )
* Editor page to create/edit articles (URL: /editor/new, /editor/article-slug-here)
* Article page (URL: /article/article-slug-here)
  * Delete article button (only shown to article's author)
  * Render markdown from server client side
  * Comments section at bottom of page
  * Delete comment button (only shown to comment's author)
* Profile page (URL: /profile/username-here, /profile/username-here?favorite=true)
  * Show basic user info
  * List of articles populated from author's created articles or author's favorited articles


## Next 공식 문서
https://nextjs.org/

# 1일차 학습
제대로 해놓은 코드를 들여다 보는데 예상했던것처럼 쉽지가않다!!


### STEP1: Create Next app
```
npx create-next-app real-app
cd real-app
yarn dev
```

### STEP2: 프로젝트 기본구조 따라하기
<img src="../Real-world-next-app/assets/1.png">

### STEP3: pages 폴더 보기
[참고](https://github.com/Road-of-CODEr/we-hate-js/blob/master/Front-End/Next.js/basicStructure.md)

* _app.js: 리액트를 커스텀 하는 곳

<img src="../Real-world-next-app/assets/2.png">
<img src="../Real-world-next-app/assets/3.png">

이렇게 두 컴포넌트가 있다치면 __app.js가 최상단 컴포넌트인 것을 console.log를 찍어보면 알 수 있다. 

<img src="../Real-world-next-app/assets/4.png">

그래서 global css같은걸 입힐땐 _app.js에서 처리하면 된다. 

화면을 먼저 정의하고 각 페이지의 url에 따라서 페이지 구성을 먼저함. 각 페이지내의 컴포넌트는 컴포넌트 폴더안에 있음

* page에서 data fetching:
  * <img src="../Real-world-next-app/assets/5.png">
    이 코드를 보자. 
    path에 param으로 미리 빌드할 pid를 주지 않으면 먼저 빌드를 해놓지 않는데, pid를 주면 static하게 빌드시에 미리 generation한다. 
  * <img src="../Real-world-next-app/assets/6.png">
  * <img src="../Real-world-next-app/assets/7.png">
    [참고자료](https://github.com/Road-of-CODEr/we-hate-js/blob/master/Front-End/Next.js/basicFeatures/dataFetching/getStaticPaths.md)

  * lib/api로 정리해도 기존처럼 axios post하는 부분은 클라이언트에서 처리한다. 
    * <img src="../Real-world-next-app/assets/10.png">
    * <img src="../Real-world-next-app/assets/8.png">
    * <img src="../Real-world-next-app/assets/9.png">
    
### lib
- api 폴더: 리소스별? api 콜을 정리해둠


# 2일차 학습
오늘은 또 내가 뭘 모르고 또 배울련지.... 대학원 안가도 되겠다... 개발자는 학위안나오는 종신형 석박과정....

### React Hooks
리액트의 훅스에 대해서 제대로 정리를 해본다. lib에서 customhooks를 쓰고 있던데, 실제로 사용해본적이 없어서 보려고 한다. [공식문서](https://reactjs.org/docs/hooks-intro.html) 

[내 블로그](https://mytutorials.tistory.com/187)

오늘은 하다보니까 훅스만 보게됬다!