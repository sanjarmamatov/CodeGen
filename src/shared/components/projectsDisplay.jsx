import React from 'react'
import ReactDOM from 'react-dom'

import Animate from 'react-move'
import $ from 'jquery'

const ProjectsDisplay = () =>
<div className="Projects container">
    <h1 className="text-big">Our courses listed here!</h1>
    <div className="grid">
                <figure className="effect-zoe">
                    <img src="https://cdn.dribbble.com/users/241205/screenshots/3448180/drib-ayncjs_1x.jpg" alt="img25"/>

                    <figcaption>
                    <h2 className="effect-zoe">Creative  <span>Zoe</span></h2>							
                    </figcaption>
                    <div className="figure-content">
                       <button className="button button-white" onClick={showProjectContents}>
                           See more
                        </button>
                        <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                    </div>
                    <div id="unique"></div>

    
                </figure>
                <figure className="effect-zoe">
                    <img src="https://cdn.dribbble.com/users/241205/screenshots/3448180/drib-ayncjs_1x.jpg" alt="img26"/>
                    <figcaption>
                    <h2 className="effect-zoe">Creative <span>Zoe</span></h2>
                    </figcaption>	
		         <div className="figure-content">
                       <button className="button button-white">
                           See more
                        </button>
                        <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
                    </div>
                </figure>
        </div>
    </div>

const ProjectDetails = () => 
    <h2>HERE ARE THE PROJECT DETAILS</h2>

function showProjectContents(e) {
    e.preventDefault()
    ReactDOM.render(<ProjectDetails />, document.getElementById("unique"))
}
export default ProjectsDisplay
