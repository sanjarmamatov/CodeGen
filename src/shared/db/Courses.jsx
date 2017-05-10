import mongoose from 'mongoose'
import React from 'react'
import CoursesPage from '../pages/courses'

const CourseSchema = mongoose.Schema({
  name: String,
  URL: String,
  shortDes: String,
  longDes: String,
  imgURL: String,
  projectURLs: [String],
  skills: [{ name: String, imgURL: String }],
  instructors: [String],
  numStudents: Number,
  startDate: Date,
  bannerpattern: String,
  bannerImage: String,

})
CourseSchema.methods.getComponent = () =>
  <CoursesPage course={this.lean()} />

const Course = mongoose.model('courses', CourseSchema)

export default Course
