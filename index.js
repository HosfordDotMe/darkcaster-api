const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');
const errorHandler = require('./middleware/500');
const cors = require('cors')

//routers
const weatherRouter = require('./routers/weather.router');

server.use(logger);
server.use(weatherRouter);
server.use(cors);

//dummy route
server.get('/', (req, res) => {
  res.send('it works');
});

server.use(notFound);
server.use(errorHandler);

server.listen(port, () => {
  console.log('Now listening on port:', port);
});
