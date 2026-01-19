import http from 'http';

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {

    console.log('Method:', req.method);
    console.log('URL:', req.url);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Server is running...\n');
    res.end('Hello World\n');
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});