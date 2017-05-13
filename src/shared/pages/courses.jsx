import React from 'react'
import 'isomorphic-fetch'


import NavComponent from '../components/nav'
import Form from '../components/form'
import Footer from '../components/footer'
import Course from '../components/course'

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
  render() {
    if (this.state.course) {
      return (
        <div style={this.state.style}>
        <div style={{ height: '7em', backgroundColor: '#fff' }}></div>
          <NavComponent routes={this.props.courseRoutes} />
          <Course course={this.state.course[0]} />
          <Form defaultValue={this.state.course[0].name}>
          </Form>
          <Footer />
        </div>
      )
    } else {
      return <div>Loading....</div>
    }
  }
}

export default CoursesPage
