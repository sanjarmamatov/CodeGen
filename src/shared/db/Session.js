import mongoose from 'mongoose'
import Handlebars from 'handlebars'
import fs from 'fs'
import path from 'path'
import { Employees } from '../config'
import sendEmail from '../../server/email'

console.log('Employees: '+ Employees)

const SessionSchema = mongoose.Schema({
  name: String,
  email: String,
  request: {
      message: String,
      date: { type: Date, default: Date.now },
  },
  response: { type: {
                  date: { type: Date, default: null },
                  location: String,
                  message: String,
                },
              default: null,
            },
})

SessionSchema.methods.emailAdmin = function () {
  const source = fs.readFileSync(path.join(__dirname, '../emailTemplates/sessionRequest.hbs'), 'utf8'),
      template = Handlebars.compile(source),
      html = template({
      name: this.name,
      course: this.course,
      message: this.message,
      email: this.email,
    })
  console.log('compiled')
    sendEmail('Session Request', Employees.admin.email, html, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        console.log(response)
      }
    })
}

SessionSchema.methods.emailBack = function () {
    const source = fs.readFileSync('../emailTemplates/sessionResponse.hbs', 'utf8'),
    template = Handlebars.template(source),
    html = template({
      name: this.name,
      course: this.course,
      message: this.session.message,
      sessionDate: this.session.date,
      sessionLocation: this.session.location,
    })
  sendEmail('Session Request', this.email, html, (err, response) => {
    if (err) {
      console.log(err)
    } else {
      console.log(response)
    }
  })
}

SessionSchema.methods.confirm = function (date, message, location) {
  this.response = { date, message, location }
  this.save((err) => {
    if (err) console.log(err)
  })
}

const Session = mongoose.model('sessionRequests', SessionSchema)

export default Session
