// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { APP_NAME } from './config'
import HomePage from './pages/home'
import CoursesPage from './pages/courses'
import { COURSE_ROUTES } from './routes'

class AppComponent extends React.Component {
  // should be the router here
  constructor(props: Object) {
    super(props)

    this.state = {
      routes: this.props.routes,
      courses: this.props.courses,
   }
    console.log('\n @appcomponent ' + JSON.stringify(this.props.routes))
 }

  render() {
    return (
    <div>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <Switch>
          {
            COURSE_ROUTES.map( route => 
              <Route key={route.label} path={route.route} render={() => <CoursesPage course={this.state.courses} courseRoutes={COURSE_ROUTES} label={route.label} route={route.route} />} />
            )
          }
          <Route key={'Home'} path={'/'} render={() => <HomePage courses={this.state.courses} courseRoutes={COURSE_ROUTES} />} />
      </Switch>
    </div>
    )  
  }
}


export default AppComponent
