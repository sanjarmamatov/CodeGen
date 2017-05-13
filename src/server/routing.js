// @flow
import express from 'express'

import renderApp from './render-app'
import Course from '../shared/db/Courses'
import Session from '../shared/db/Session'

const router = express.Router()

router.get('/', (req, res) => {
  loadHomeData()
            .then(data =>
              res.send(renderApp(req.url, data)))
            .catch(err => 
                console.log(err))
})

router.get('/courses/:course', (req, res) => {
  loadCoursesData(capitalizeFirstLetter(req.params.course))
                .then(data => {
              console.log('/courses route : ' + JSON.stringify(data))
                res.send(renderApp(req.url, data))})
                .catch(err =>
                console.log(err))
})

router.post('/sessionRequest', (req, res) => {
  console.log('got a session request')
  Session.create({
    name: req.body.name,
    email: req.body.email,
    request: {
      message: req.body.message,
      date: new Date(),
    }
  }, (err, session) => {
    if (err) {
      console.log("session request got an error" + err)
      res.sendStatus(500)
    } else {
      console.log('Succes session request')
      res.send(200)
      session.emailAdmin()
    }
  })
})


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadHomeData() {
  return Course.find({})
}

function loadCoursesData(course: String) {
  return Course.find({ name: course })
}

export default router
