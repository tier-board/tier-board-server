'use strict';

require('dotenv').config();

require('babel-register');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_BLUE_URI, { useNewUrlParser: true });

require('./src/app.js').start(process.env.PORT);
