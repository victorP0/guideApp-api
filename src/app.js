const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const guideRouter = require('./guide-router')
const validateBearerToken = require("./validate-bearer-token");
const app = express()


const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(helmet())
app.options('*', cors());
app.use(cors());
app.use(validateBearerToken);

app.use(morgan(morganOption))
app.use(guideRouter)

module.exports = app