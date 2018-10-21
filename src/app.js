'use strict';

// 3rd Party Libraries
import express from 'express';
import cors from 'cors';

// Custom Libraries
import router from './api/api.js';

// Custom Middleware
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import resourceNotFound from './middleware/400.js';

const app = express();

// App level middleware
app.use(cors());
app.use(express.json()); //parse request body as JSON  Without this then you'll still get a body, but it will be an empty object

// Our API Routes
app.use(router);

// Errors and 404's
app.use(notFound);
app.use(errorHandler);
app.use(resourceNotFound);

let server;

module.exports = {
  start: (port) => {
    if(! server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log(`Server up on ${port}`);
      });
    }
    else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close( () => {
      console.log('Server has been stopped');
    });
  },
};