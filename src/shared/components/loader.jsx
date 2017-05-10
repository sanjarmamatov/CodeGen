import React, { Component } from 'react'

class Loader extends Component {
    constructor(props){
      super(props)
      this.state = {
          success: false,
        }
    }
    render() {
        render (
            <div className="ns-box ns-other ns-effect-loadingcircle ns-type-notice ns-show">
                <div className="ns-box-inner"><p>{this.props.message}</p></div>
                <span className="ns-close"></span>
            </div>
        )
    }
}

export default Loader
