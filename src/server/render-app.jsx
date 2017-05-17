// @flow
import Helmet from 'react-helmet'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { StaticRouter } from 'react-router'

import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'
import AppComponent from '../shared/app'
import { COURSE_ROUTES } from '../shared/routes'


const renderApp = (location: string, data: Object) => {
  // THIS IS WHERE I DECIDE WHAT THE DATA IS
  const head = Helmet.rewind()
  const context = {}
  console.log('\n @renderApp Location:'+location)

  const reactHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={context}>
      <AppComponent courses={data} routes={COURSE_ROUTES} path={location} />
    </StaticRouter>

  )

  return (`<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <!-- Bootstrap Core CSS -->
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <!-- Plugin CSS -->
        <link rel="stylesheet" href="${STATIC_PATH}/css/creative.css">
      </head>

      <body>
        <div class="${APP_CONTAINER_CLASS}">
        ${reactHtml}
        </div>
        <script
          src="https://code.jquery.com/jquery-3.1.1.min.js"
          integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
          crossorigin="anonymous"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="/static/js/typed.min.js"></script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/public`}/js/bundle.js"></script>
      </body>
    </html>`
  )
}

export default renderApp
