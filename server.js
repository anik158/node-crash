import http from 'http';

const PORT = 9001;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Server is running...\n');
    res.end('Hello World\n');
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});