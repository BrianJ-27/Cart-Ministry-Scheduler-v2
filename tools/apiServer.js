const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.use(function(req, res, next) {
  setTimeout(next, 1000); //bake in some delay on api responses
});

server.post('/messages/', (req, res, next) => {
  const error = validateMessage(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

const validateMessage = message => {
  if (message == null) return 'message can not be null';
  if (typeof message !== 'string') return 'message type is invalid';
  if (message.trim().length < 3) return 'message must be at least three characters';
};
