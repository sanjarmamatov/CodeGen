import mongoose from 'mongoose'

const ProjectSchema = mongoose.Schema({
  name: String,
  shortDes: String,
  longDes: String,
  imgURL: String,
  courseID: mongoose.Types.ObjectId,
  skills: [{ name: String, imgURL: String }],
  students: [String],
  date: Date,
})

const Project = mongoose.model('Projects', ProjectSchema)

export default Project
