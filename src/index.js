import HexoGitCoauthor from './add-coauthor';

hexo.on('new', HexoGitCoauthor.newPost);
