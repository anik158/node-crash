import {
    log
} from 'console';
import http from 'http';
import {
    json
} from 'stream/consumers';

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

// Simple logger middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
}


const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.end(JSON.stringify(users));
}

// Route handler for GET /api/users/:id
const getUserByIdHander = (req, res, id) => {
    const userId = parseInt(req.url.split('/')[3]);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'User Not Found'
        }));
    }
}

// Not Found handler
const notFoundHandler = (req, res) => {
    res.writeHead(404);
    res.end(JSON.stringify({
        message: 'Not Found'
    }));
}


const createServer = http.createServer(async (req, res) => {
    try {

        logger(req, res, () => {

            jsonMiddleware(req, res, () => {
                if (req.method === 'GET' && req.url === '/api/users') {
                    getUsersHandler(req, res);
                } else if (req.method === 'GET' && req.url.startsWith('/api/users/')) {
                    getUserByIdHander(req, res);
                } else {
                    notFoundHandler(req, res);
                }
            });

        });
    } catch (err) {
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            error: `Server Error: ${err.message}`
        }));
    }
});



createServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});