import Hexo from 'hexo';
import child_process from 'child_process';
import fs from 'fs';
import HexoGitCoauthor from '../src/add-coauthor';

const hexo = new Hexo(__dirname, {silent: true});


jest.mock('child_process');
child_process.execSync.mockReturnValue("Peixin Liu");

jest.mock('fs');
fs.writeFile.mockImplementation((path, content, callback) => {
  return content;
});


hexo.on('new', HexoGitCoauthor.newPost);
hexo.extend.filter.register('before_post_render', HexoGitCoauthor.before_renderPost);

describe('Post With User Pre-defined coauthor Attribute on new post', () => {

  let post = {
    path: false,
    content: `---
title: I love Hexo!
coauthor:
date: 2019-12-03 18:30:49
tags:
---`
  };

  hexo.emit('new', post);

  test("should have coauthor", () => {
    let coauthorPresence = /coauthor: .\S+.*\n/.test(post.content);
    expect(coauthorPresence).toBeTruthy();
  });

});

describe('Post Without User Pre-defined coauthor Attribute on new post', () => {

  let post = {
    path: './tmp/test.md',
    content: `---
title: I love Hexo!
date: 2019-12-03 18:30:49
tags:
---
    `
  };

  hexo.emit('new', post);

  test("should have coauthor", () => {
    let coauthorPresence = /coauthor: .\S+.*\n/.test(post.content);
    expect(coauthorPresence).toBeTruthy();
  });

});

describe('Post With User Pre-defined coauthor Attribute before render', () => {

  let post = {
    layout: 'post',
    coauthor: 'liupeixin',
    full_source: './tmp/test.md',
    raw: `'---
coauthor: liupeixin
title: I love Hexo!
date: 2019-12-03 18:30:49
tags:
---
test
    `
  };

  hexo.extend.filter.exec('before_post_render', post);
  test("should not change", () => {
    let coauthorPresence = /coauthor: liupeixin/.test(post.raw);
    expect(coauthorPresence).toBeTruthy()
  });


});

describe('Post Without User Pre-defined coauthor Attribute before render', () => {

  let post = {
    layout: 'post',
    full_source: './tmp/test.md',
    raw: `'---
title: I love Hexo!
date: 2019-12-03 18:30:49
tags:
---
test
    `
  };

  hexo.extend.filter.execSync('before_post_render', post);

  test("should have coauthor", () => {
    let coauthorPresence = /coauthor: .\S+.*\n/.test(post.raw);
    expect(coauthorPresence).toBeTruthy();
  });

});

describe('Post With User Pre-defined coauthor Attribute but blank before render', () => {

  let post = {
    coauthor: '',
    layout: 'post',
    full_source: './tmp/test.md',
    raw: `'---
coauthor:
title: I love Hexo!
date: 2019-12-03 18:30:49
tags:
---
test
    `
  };

  hexo.extend.filter.execSync('before_post_render', post);

  test("should have coauthor", () => {
    let coauthorPresence = /coauthor: .\S+.*\n/.test(post.raw);
    expect(coauthorPresence).toBeTruthy();
  });

});

describe('Post With User Pre-defined coauthor Attribute but no git on new post', () => {

  let post = {
    path: false,
    content: `---
title: I love Hexo!
coauthor:
date: 2019-12-03 18:30:49
tags:
---`
  };
  child_process.execSync.mockImplementation(() => {
    throw 'error';
  });

  hexo.emit('new', post);

  test("should have empty coauthor", () => {
    let coauthorPresence = /coauthor: \n/.test(post.content);
    expect(coauthorPresence).toBeTruthy();
  });

});
