const config = require('config');
const express = require('express');
const bp = require('body-parser');
const cors = require('cors');

const server = require('./bin/app/server');
const history = require('./bin/app/history');
const app = express();

app.use(bp.json());
app.use(cors());

app.use('/',server);
app.use(config.get('pathHistoryEndpoint'), history)

app.listen(config.get('ports'))