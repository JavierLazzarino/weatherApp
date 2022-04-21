const express = require('express');
const Helmet = require('helmet');
const cors = require('cors');
const { router } = require('./routes/index');

// Create express server
const app = express();
app.use(express.json());

app.use(Helmet());
app.use(cors());

app.use('/v1', router);

module.exports = app;
