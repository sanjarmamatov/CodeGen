import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

class NavComponent extends React.Component {
        constructor(props) {
                super(props)
                console.log('@navcomponent '+this.props.routes)
        }
        componentDidMount() {
                $(window).scroll(() => {
                        const scroll = $(window).scrollTop()
                        if (scroll !== 0) {
                             $('.navbar').addClass('off-top')
                        } else {
                             $('.navbar').removeClass('off-top')
                        }
                })
        }
        render() {
          return (
                <nav className="navbar navbar-fixed-top">
                        <div className="container-fliud">
                                <NavLink to={'/'} className="navbar-left brackets-effect" key={'home route'} exact>{'CodeGeneration'}</NavLink>
                                <ul className="nav navbar-nav navbar-right">
                                        <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Courses<span className="caret" /></a>
                                                <ul className="dropdown-menu">
                                                        {
                                                        this.props.routes.map((route) => 
                                                                <li><NavLink to={route.route} className="nav-link brackets-effect" key={route.label} exact>{route.label}</NavLink></li>
                                                                )
                                                        }
                                                        <li role="separator" className="divider"></li>
                                                        <li><a href="#">Apply for a tester session</a></li>
                                                </ul>
                                        </li>
                                </ul>
                        </div>
                        <hr />
                </nav>
         )
        }
}



 



export default NavComponent
