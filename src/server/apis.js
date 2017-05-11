// @flow

import express from 'express'
import Course from '../shared/db/Courses'

const router = express.Router()

router.get('/courses/all', (req, res) => {
    console.log('api/courses/all route triggered')
    Course.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(err))
})
router.get('/courses/:course', (req, res) => {
    const course = capitalizeFirstLetter(req.params.course) 
    console.log('api/courses/:course route triggered; param: ' + course)
    Course.find({ name: course })
        .then(doc => {
            console.log('@api course route sent this doc: '+ doc)
            res.json(doc)
        })
        .catch(err => console.log(err))
})
router.get('/projects/:project', (req, res) => {
    const project = capitalizeFirstLetter(req.params.project)
    console.log('api/projects/:project route triggered; param: ' + project)
    Course.find({ name: project })
        .then(doc => res.json(doc))
        .catch(err => console.log(err))
})
router.get('/sessions/:sessionId', (req, res) => {
    const session = req.params.sessionId
    console.log('/api/sessions/:sessionId route triggered; param: ' + session)
    Course.find({ id: session })
        .then(doc => res.json(doc))
        .catch(err => console.log(err))
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default router
