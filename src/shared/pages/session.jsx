import React from 'react'
import $ from 'jquery'


import NavComponent from '../components/nav'
import Form from '../components/form'
import Footer from '../components/footer'

class SessionsPage extends React.Component {
  constructor(props) {
    super(props)
    console.log('@CoursePage '+this.props.route)
    this.state = {
      course: this.props.course,
      style: this.props.style,
    }
  }

  formSubmit() {
    const sessionInfo = {
      name: $('#name').val(),
      email: $('#email').val(),
      course: $('#Course').val(),
      message: $('#message').val(),
      type: 'sessionResponse',
    }
    $.ajax({
      url: '/sessions',
      type: 'POST',
      async: true,
      data: sessionInfo,
      complete: Form.displaySuccess,
      error: Form.displayFail,
    })
  }
  render() {
    if (this.state.course) {
      return (
        <div style={this.state.style}>
            <div style={{ height: '7em', backgroundColor: '#fff' }}></div>
            <NavComponent routes={this.props.courseRoutes} />
            <Form defaultValue={this.state.course[0].name} handleSubmit={this.formSubmit} />
            <Footer />
        </div>
      )
    } else {
      return <div>Loading....</div>
    }
  }
}

export default SessionssPage
