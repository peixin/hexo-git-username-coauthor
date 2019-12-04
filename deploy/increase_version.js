const packageJson = require("../package");
const versionInfo = packageJson.version.split(".");
let patch = parseInt(versionInfo[versionInfo.length - 1]) + 1;
versionInfo[versionInfo.length - 1] = patch;

packageJson.version = versionInfo.join(".");

console.log(packageJson.version);
