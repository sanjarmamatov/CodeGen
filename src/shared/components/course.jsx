import React from 'react'

const Course = (props) =>
    <div>
        <div className="section background-white course-banner">
            <div className="container text-left">
                <h3 className="text-huge text-primary text-with-subtitle"> {props.course.name} </h3>
                <h4 className="text-big text-gray">Badges: </h4>
            </div>
            <img height='300' width='300' className='course-banner-img' src={props.course.courseBadgeUrl}/>
        </div>
        <div className="Course section" style={props.course.styles}>
            <div className="container content">
                <h3 className="text-big text-white"> This is : {props.course.name}</h3>
                <div className="row">
                <div className="col-xs-12 col-md-6">
                    {props.course.shortDes}
                </div>
                <div className="col-xs-12 col-md-6"></div>
                    {props.course.instructors}
                </div>
            </div>
        </div>
    </div>

export default Course
