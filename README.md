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
