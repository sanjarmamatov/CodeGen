// @flow
import React from 'react'


class Form extends React.Component {
      state: {
          name: {valid: boolean ,value: string},
          email: {valid: boolean ,value: string},
          message: {valid: boolean ,value: string},
          handleSubmit: Function,
    }
    static displaySuccess(xhr, status) {
     console.log('session request sent' + status)   
    }
    static displayError(xhr) {
        alert("Please check that you staisfied all the conditions")
        console.log('Huyna poluchilas' + xhr)
    } 
    
    constructor(props){
        super(props)
        this.state = {
            name: { valid: true, value: '' },
            email: { valid: true, value: '' },
            message: { valid: true, value: '' },
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event: Object) {

        const target = event.target,
            name = target.name,
            value = target.value,
            isValid = this.checkValidity(name, value)
        this.setState({
          [name]: { valid: isValid, value }
        })
    }


    checkValidity(name: String, text: String) {
        if (name === 'email') {
           return text.indexOf('@') !== -1 && text.indexOf('.') !== -1 && text.length >= 5
       } else {
           return true
       }
    }

    render() {
        return( 
            <div className="Form container">
                <h2 className="text-big">Send a request.</h2>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <label className="label" htmlFor="name">Name</label>
                        <div className={(this.state.name.valid ? '':'error') + ' input full-width'}>
                            <input id="name" placeholder="Name" type="text" name="name" value={this.state.name.value} onChange={this.handleChange} ></input>
                        </div>
                        {
                            this.state.name.valid ? '' : <p className="text-error text-small"> PLease input your full name</p>
                        }
                        
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <label className="label" htmlFor="email">Email</label>
                        <div className={(this.state.email.valid ? '' : 'error' ) + ' input full-width'}>
                            <input id="email" placeholder="Email" type="text" name="email" value={this.state.email.value} onChange={this.handleChange} ></input>
                        </div>
                        {
                            this.state.email.valid ? '' : <p className="text-error text-small"> Please enter a valid email address (with an '@' and a '.')</p> 
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <label className="label" htmlFor="Course">Course</label>
                        <div className="select">
                            <select defaultValue={this.props.defaultValue ? this.props.defaultValue : 'Python X Minecraft'} id="Course">
                                <option>Python X Minecraft</option>
                                <option>Unity</option>
                                <option>Java</option>
                            </select>
                            <i className="fa fa-angle-down fa-2" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <label className="label" htmlFor="message">Message</label>
                        <textarea className={(this.state.message.valid ? '' : 'error') + ' textarea'} id="message" name="message" value={this.state.message.value} onChange={this.handleChange} />
                    </div>
                {
                 this.state.message.valid ? '' :  <p className="text-error text-small"> PLease make your message 140 characters long</p> 
                }
                </div>
                <div className="row"></div>
                <button onClick={this.props.handleSubmit} className="button button-big button-primary block-mobile">Send request</button>
            </div>
        )}
}

export default Form
