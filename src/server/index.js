// @flow

import compression from 'compression'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'


import {
  STATIC_PATH,
  WEB_PORT,
} from '../shared/config'
import {
  isProd,
} from '../shared/util'
import realRouter from './routing'
import realApiRouter from './apis'
import mockRouter from './mock/mockRouting'
import mockApiRouter from './mock/mockApis'

require('babel-polyfill')

const app = express()


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(compression())
app.use(STATIC_PATH, express.static('public'))
    // Use bluebird
mongoose.connect(isProd ? 'mongodb://localhost:27017/real' : 'mongodb://localhost:27017/test')
mongoose.Promise = require('bluebird')

if (isProd) {
  app.use('/', realRouter)
  app.use('/api', realApiRouter)
} else {
  app.use('/', mockRouter)
  app.use('/api', mockApiRouter)
}

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
  '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`)
})
// make the courses file jsx


