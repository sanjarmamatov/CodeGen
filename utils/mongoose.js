// @flow
const mongoose = require('mongoose'),
      React = require('react');

const EmployeeSchema = mongoose.Schema({
  name: {},
  email: String,
  role: String,
});
mongoose.connect('mongodb://localhost:27017/test');

const Employee = mongoose.model('Employees', EmployeeSchema);

let John = new Employee({
  name: React.createElement(
    'div',
    null,
    'Hello world!'
  )
})
John.save(err => {
  console.log(err)
})