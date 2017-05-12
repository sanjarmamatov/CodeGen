import express from 'express'
import { getCourse, getProjects } from './mockApis'
import renderApp from '../render-app'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('homepage route triggered')
  res.send(renderApp(req.url, loadHomeData()))
})

router.get('/courses/:course', (req, res) => {
  const course = capitalizeFirstLetter(req.params.course)
  console.log('\n course route triggered, course param: ' + course)
  res.send(renderApp(req.url,loadCoursesData(course)))
})

router.post('/sessionRequest', (req, res) => {
  console.log('\n got a session request')
  res.sendStatus(500).send('session funcitonality is not availlible on a mock router')
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadHomeData() {
  return getCourse() // add projects to this as well
}

function loadCoursesData(course: String) {
  return getCourse(course) // add projects in here as well
}

export default router
