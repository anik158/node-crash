// import fs from 'fs';
import fs from 'fs/promises';



const file=  './test.txt';

/* Read file callback */
// fs.readFile(file,'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data);
// });


/* Read file sync */
// const readFile = fs.readFileSync(file, 'utf8');
// console.log('File contents (sync):', readFile);


/* Read file Promise. then */
// fs.readFile(file, 'utf8')
// .then((data) => {
//     console.log('File contents (Promise.then):', data);
// }).catch((err) => {
//     console.error('Error reading file:', err);
// });

/* Read file async/await */
const readFileAsync = async () => {
    try {
        const data = await fs.readFile(file, 'utf8');
        console.log('File contents (async/await):', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

/* Write to a file */

const writeFile = async () => {
    const content = 'Hello, this is a test file!';
    try {
        await fs.writeFile(file, content, 'utf8');
        console.log('File written successfully.');
    } catch (err) {
        console.error('Error writing file:', err);
    }
};

/* Append to a file */
const appendFile = async () => {
    const content = '\nThis is an appended line.';
    try {
        await fs.appendFile(file, content, 'utf8');
        console.log('File appended successfully.');
    } catch (err) {
        console.error('Error appending file:', err);
    }
}

writeFile();
appendFile();
readFileAsync();
