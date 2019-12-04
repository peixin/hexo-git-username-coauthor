# hexo-git-username-coauthor

[![Build Status](https://github.com/peixin/hexo-git-username-coauthor/workflows/build/badge.svg)](https://github.com/peixin/hexo-git-username-coauthor/workflows/build/badge.svg) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![Coverage Status](https://coveralls.io/repos/github/peixin/hexo-git-username-coauthor/badge.svg?branch=master)](https://coveralls.io/github/peixin/hexo-git-username-coauthor?branch=master)

Coauthor from git global username plugin for [Hexo](http://hexo.io/).


## Installation

``` bash
$ yarn add hexo-git-username-coauthor
```

or
``` bash
$ npm install hexo-git-username-coauthor --save
```

> This Plugin use es6 syntax, make sure your node support it.

## Usage

After installation, when you `hexo new whatever-your-title-is`, your post/page markdown file will have a coauthor attribute, get from git global username, like below:

```
---
title: I love Hexo!
date: 2016-05-20 16:20
coauthor: liupeixin
---
```

## And Then
After generate coauthor property,  you can use like [hexo-next-coauthor](https://github.com/theme-next/hexo-next-coauthor) theme to show coauthor.


## License

MIT
