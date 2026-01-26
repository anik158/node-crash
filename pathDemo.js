import path from "path";
import url from "url";

const file = "./dir1/dir2/sample.txt";

/* Get directory name */
const dirName = path.dirname(file);
console.log('Directory Name:', dirName);

/* Get base name */
const baseName = path.basename(file);
console.log('Base Name:', baseName);

/* Get file extension */
const extName = path.extname(file);
console.log('Extension Name:', extName);

console.log(path.parse(file));

const __filename = url.fileURLToPath(import.meta.url);
console.log('__filename:', __filename);

const __dirname = path.dirname(__filename);
console.log('__dirname:', __dirname);

/* Join paths */
const joinedPath = path.join(__dirname, 'dir1', 'dir2', 'newfile.txt');
console.log('Joined Path:', joinedPath);

/* Resolve paths */
const resolvedPath = path.resolve('dir1', 'dir2', 'newfile.txt');
console.log('Resolved Path:', resolvedPath);