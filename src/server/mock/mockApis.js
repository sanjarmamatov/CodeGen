
// @flow

import express from 'express'
import fs from 'fs'

const mockApiRouter = express.Router()

mockApiRouter.get('/courses/all', (req, res) => {
    console.log('api/courses/all route triggered')
    res.json(getCourse())
})
mockApiRouter.get('/courses/:course', (req, res) => {
    const course = capitalizeFirstLetter(req.params.course) 
    console.log('api/courses/:course route triggered; param: ' + course)
    res.json(getCourse(course))
})
mockApiRouter.get('/projects/:project', (req, res) => {
    const project = capitalizeFirstLetter(req.params.project)
    console.log('api/projects/:project route triggered; param: ' + project)

})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
export function getCourse(name) {
    const rawJSON = fs.readFileSync(__dirname + '/mockCourses.json', 'utf-8'),
        data = JSON.parse(rawJSON)
    return name ? [data[name]] : [data]
}
export function getProjects(name) {
    const rawJSON = fs.readFileSync(__dirname + '/mockProjects.json', 'utf-8'),
        data = JSON.parse(rawJSON)
    return name ? [data[name]] : [data]
}


export default mockApiRouter
