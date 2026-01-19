import http from 'http';

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {


    try {

        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.end('<h1>Welcome to the Home Page</h1>\n');
            } else if (req.url === '/about') {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('<h1>About Page</h1>\n');
            } else {
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                res.end('<h1>Page Not Found</h1>\n');
            }
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