import React from 'react'
import 'isomorphic-fetch'


import NavComponent from '../components/nav'
import Hero from '../components/hero'
import CoursesDisplay from '../components/coursesDisplay'
import ProjectsDisplay from '../components/projectsDisplay'
import Banner from '../components/banner'
import Footer from '../components/footer'
import Form from '../components/form'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: this.props.courses,
      routes: this.props.courseRoutes 
      }
  }

  componentDidMount() {
    if(typeof window !== 'undefined'){
      fetch('/api/courses/all')
        .then(data => data.json())
        .then((courses) => {
          this.setState({ courses }) 
          console.log('state set' + courses)
        })
        .catch(err => console.log(err))
    }
  }
  render() {
    if (this.state.courses) {
    return (
      <div>
        <NavComponent routes={this.state.routes} />
        <Hero />
        <Banner />
        <CoursesDisplay courses={this.state.courses} />
        <ProjectsDisplay />
        <Form />
        <Footer />
      </div>
    )
   } else {
      return <div> Loading.. </div>
    }
  }
}

export default HomePage
