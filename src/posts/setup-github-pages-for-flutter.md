---
title: "Setup github-pages for Flutter Web-App"
description: "Auto build and and serve flutter web-apps as soon as you commit and push them to github with github actions"
metaKeywords: "github-pages,flutter,web-app,github-actions,auto"
date: 2021-09-10T13:00
thumb: "https://i.postimg.cc/yYtpP3bS/github-pages-thumb.jpg"
tags:
  - flutter
  - github-pages
---
# Setup Github Pages for Flutter Web-App with Github Actions

Use Github Actions to auto build the github-pages as soon as you push it to github.
[Refrence](https://github.com/Roopaish/Ultimate-Flutter-App)

1. Inside project folder or repository, add a new folder '/.github/workflows'.

<img src='https://i.postimg.cc/FHcK1v6v/workflow-folder.png' alt='workflow-folder'/>

2. Under workflows, create publish.yaml file and paste it

```yaml
name: Gh-Pages

on:
  push:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2 # Only works with v2
      - uses: subosito/flutter-action@v1
      - uses: erickzanardo/flutter-gh-pages@v6
```

3. Commit and Publish it to github.
4. Navigate to 'actions' tab of the github repo. There, we can see the action going on.
5. After that action is completed, new branch 'gh-pages' will be created.
6. Go to 'Settings' of the repo, then 'Pages' and Under Branch: dropdown, select 'gh-pages' and hit save

<img src='https://i.postimg.cc/j50WXXDp/github-pages.png' alt='github-pages'/>

7. Now the site will publish to
   'https://your_user_name.github.io/your_repo_name'

> Note: In case you use custom url or the webpage reside in the root directory of custom url, below steps are not necessary

8. Now finally you have to open 'gh-pages' branch and change 'index.html'

9. Inside head tag find base url
```html
<head>
  .....
  <base href="/" />
  .....
</head>
```
10. Change base url to your repo name (or directory name in case of custom website)

```html
<head>
  .....
  <base href="/your-repo-name/" />
  .....
</head>
```

**Done! Now your Web-App is live. Now Pat yourself!**
