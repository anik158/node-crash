import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT || 5000;

// Get current path

const  __filename = url.fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {


    try {

        if (req.method === 'GET') {

            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html');
            }
            else {
             throw new Error('Invalid Request URL');
            }

            const data = await fs.readFile(filePath,);
            res.setHeader(
                'Content-Type', 'text/html'
            );
            res.write(data);

            res.end
        } else {
            throw new Error('Invalid Request Method');
        }
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'text/html'
        });
        res.end(`<h1>Server Error: ${err.message}</h1>\n`);
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});