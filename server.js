const express = require('express');
const routes = require('./routes');
const { response } = require('express');
const { listen } = require('express/lib/application');

require('./database')

const app = express();

app.use(express.json())
app.use(routes)

const port = process.env.PORT || 3000;