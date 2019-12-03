import fs from 'fs';
import child_process from 'child_process';

const coauthorPropertyName = 'coauthor';
const getUserName = () => {
  let userName = "";
  try {
    userName = child_process.execSync('git config --global user.name').toString();
  } catch (e) {
  }
  return userName.trim();
};

const getCoauthorPropertyItem = userName => `${coauthorPropertyName}: ${userName}`;


const getContentWithCoauthor = (content) => {
  const userName = getUserName();
  let lines = content.split('\n');
  let index = lines.findIndex(item => item.trim() === `${coauthorPropertyName}:`);
  if (index > -1) {
    lines[index] = getCoauthorPropertyItem(userName);
  } else {
    lines.splice(1, 0, getCoauthorPropertyItem(userName));
  }

  return lines.join('\n');
};

const newPost = (post) => {
  post.content = getContentWithCoauthor(post.content);
  if (post.path !== false) {
    fs.writeFile(post.path, post.content, () => null);
  }

};

const before_renderPost = (post) => {
  if (post.layout == 'post' && !post[coauthorPropertyName]) {
    post.raw = getContentWithCoauthor(post.raw);
    fs.writeFile(post.full_source, post.raw, () => null);
  }
};


export default {
  newPost,
  before_renderPost
}
