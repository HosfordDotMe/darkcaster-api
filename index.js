const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger');

//routers
const weatherRouter = require('./routers/weather.router');

server.use(logger);
server.use(weatherRouter);
//dummy route
server.get('/', (req, res) => {
  res.send('it works');
});

server.listen(port, () => {
  console.log('Now listening on port:', port);
});
