const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('src/mocks/mocks_db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');

server.use(cors());
server.use(jsonServer.bodyParser);

// Custom rule for POST /login, so that we don't override values in the mock DB.
server.post('/login', (req, res, next) => {
    const originalResource = router.db.get('login').value();
    res.jsonp(originalResource);
});

server.use(middlewares);
server.use(router);

const port = 8000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
