import http from 'http';

const PORT = process.env.PORT || 5000;

const users = [{
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Smith',
    },
    {
        id: 3,
        name: 'Alice Johnson',
    }
];

const createServer =  http.createServer(async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');

        if (req.method === 'GET' && req.url === '/api/users') {
            res.end(JSON.stringify(users));
        }else if(req.method === 'GET' && req.url.startsWith('/api/users/')){
            const userId = parseInt(req.url.split('/')[3]);
            const user = users.find(u => u.id === userId);
            if(user){
                res.end(JSON.stringify(user));
            }else{
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'User Not Found' }));
            }
        }else{
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'Not Found' }));
        }
    }catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Server Error: ${err.message}` }));
    }
});



createServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});