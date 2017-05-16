import React from 'react'
import 'isomorphic-fetch'
import $ from 'jquery'


import NavComponent from '../components/nav'
import Form from '../components/form'
import Footer from '../components/footer'
import Course from '../components/course'


function displaySuccess(xhr, status) {
  console.log('session request sent' + status)   
}
function displayError(xhr) {
  alert("Please check that you staisfied all the conditions")
  console.log('Huyna poluchilas' + xhr)
}


class CoursesPage extends React.Component {
  constructor(props) {
    super(props)
    console.log('@CoursePage '+this.props.route)
    this.state = {
      course: this.props.course,
      style: this.props.style,
    }
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      fetch('/api'+this.props.route)
        .then(data => data.json())
        .then(course => this.setState({ course }))
        .catch(err => console.log(err))
    }
  }
  formSubmit() {
    const sessionInfo = {
      name: $('#name').val(),
      email: $('#email').val(),
      course: $('#Course').val(),
      message: $('#message').val(),
      type: 'sessionRequest',
    }
    $.ajax({
      url: '/sessions',
      type: 'POST',
      async: true,
      data: sessionInfo,
      complete: displaySuccess,
      error: displayError,
    })
  }
  render() {
    if (this.state.course) {
      return (
        <div style={this.state.style}>
        <div style={{ height: '7em', backgroundColor: '#fff' }}></div>
          <NavComponent routes={this.props.courseRoutes} />
          <Course course={this.state.course[0]} />
          <Form defaultValue={this.state.course[0].name} handleSubmit={this.formSubmit} />
          <Footer />
        </div>
      )
    } else {
      return <div>Loading....</div>
    }
  }
}

export default CoursesPage
