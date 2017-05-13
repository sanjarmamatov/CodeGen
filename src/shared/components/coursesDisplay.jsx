import React from 'react'
import { NavLink } from 'react-router-dom'


class CoursesDisplay extends React.Component {
    constructor(props) {
        super(props)
        console.log('@coursesdisplay' + JSON.stringify(this.props.courses[0].URL))
    }
  render() {
    return (
    <div className="CoursesDisplay container section">
        <h1 className='text-big'>Our Courses.</h1>
        <div className="aligner-space-around">
                { this.props.courses.map( course => 
            <div key={course.name} className="col-sm-6 col-md-4 col-lg-3 mt-4">
                <div className="card">
                    <img className="card-img-top" src={course.imgURL} />
                    <div className="card-block">
                        <h4 className="card-title card-text">{course.name}</h4>
                        <div className="meta">
                          <NavLink to={course.URL} exact>View Course</NavLink>
                        </div>
                        <div className="card-text">
                            {course.shortDes}
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="float-right">05/2017</span>
                        <span><i className=""></i>75 students</span>
                    </div>
                </div>
            </div>
                )}
             </div>
        </div>    
            )
    }
}

export default CoursesDisplay
