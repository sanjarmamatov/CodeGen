
// @flow
import React from 'react'

import HomePage from './pages/home'
import CoursesPage from './pages/courses'

export const HOME_ROUTE = { route: '/', label: 'Home', getComponent: data => <HomePage courses={data} />}

export const COURSE_ROUTES = [
        { route: '/courses/Java', label: 'Java', getComponent: data => <CoursesPage course={data} /> },
        { route: '/courses/Unity',label: 'Unity', getComponent: data => <CoursesPage courses={data} /> },
        { route: '/courses/Python x Minecraft',label: 'PythonXMine', getComponent: data => <CoursesPage course={data} /> },
    ]

