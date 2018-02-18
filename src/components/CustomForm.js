import React, { Component } from 'react';

class CustomForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: 0,
            agreement: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    render () {
        return (
            <form action="">
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={this.handleChange} onBlur={this.handleBlur} className="form-control" pattern="[A-Za-z]{2,32}"
                           name="name" type="text" value={this.state.name} placeholder="Name"/>
                    <small>No digits and special characters, more then 2 symbols</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Some masked text input, like price:</label>
                    <input onChange={this.handleChange} onBlur={this.handleBlur} className="form-control"
                           name="price" type="text" value={this.state.price+' $'} placeholder=""/>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" onChange={this.handleChange} className="form-check-input" id="chk1" name="agreement"/>
                        <label className="form-check-label" htmlFor="chk1">Some long read agreement. Don't read, simply agree, really.</label>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-success btn-lg" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if ( name == 'price') {
            this.setState({[name]: value.replace(' $','')});
        } else {
            this.setState({[name]: value});
        }
/*
        console.log('----------------' + new Date());
        console.log('current state - ' + this.state[event.target.name]);
        console.log('current value - ' + value);
*/
    }

    handleBlur(event) {
        const el = event.target;
        if ( el.pattern !== '' ) {
            //console.log('name');
        }
        console.log('blur event');
    }

    handleSubmit(event) {
        event.preventDefault();
        if ( this.state.agreement ) {
            console.log('Name - ' + this.state.name);
            console.log('Price - ' + this.state.price + '$');
        } else {
            console.log('check agreement');
        }
    }
}

export default CustomForm;
