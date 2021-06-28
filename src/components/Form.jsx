import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            street: "",
            suburb: "",
            postcode: "",
            country: ""
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(e){
        e.preventDefault();

        this.props.setData([
            ...this.props.data, this.state
        ]);
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div id="user_form">
                <form>
                    <label>First Name:{" "} 
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                    </label>
                    <label>Last Name:{" "} 
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                    </label>
                    <label>Street Address:{" "} 
                        <input type="text" name="street" value={this.state.street} onChange={this.handleChange}/>
                    </label>
                    <label>Suburb:{" "} 
                        <input type="text" name="suburb" value={this.state.suburb} onChange={this.handleChange}/>
                    </label>
                    <label>Postcode:{" "} 
                        <input type="text" name="postcode" value={this.state.postcode} onChange={this.handleChange}/>
                    </label>
                    <label>Country:{" "} 
                        <input type="text" name="country" value={this.state.country} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" onClick={this.handleClick}></input>
                </form>
            </div>
        )
    }
}
