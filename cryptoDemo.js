import {
    createHash,
    randomBytes,
    createCipheriv, createDecipheriv
} from 'crypto';

// createHash()
// const hash = createHash('sha256');
// hash.update('password123');
// console.log(hash.digest('hex'));


// Random Bytes
// crypto.randomBytes(16, (err, buf) => {
//     if (err) throw err;
//     console.log(buf.toString('hex'));
// }); 

// Cypher Example

// CreateCupheriv & createDecipheriv

const algorithm = 'aes-256-cbc';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello World', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted);