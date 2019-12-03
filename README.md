# hexo-git-username-coauthor


git config --global user.name

[![Build Status](https://github.com/peixin/hexo-git-username-coauthor/workflows/Build/badge.svg)](https://github.com/peixin/hexo-git-username-coauthor/workflows/Build/badge.svg)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

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

## License

MIT
